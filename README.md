# Amplify + AppSync を使って Aurora Serverless に対して複雑なクエリを発行する

Amplify CLI の`add-graphql-datasource`コマンドを利用することで、[既存の Aurora Serverless をデータソースとしてプロジェクトに import することができます。](https://docs.amplify.aws/cli/graphql-transformer/relational) この方法を用いることで、AppSync から簡単に Aurora Serverless を呼び出すためのスキーマ(`schema.graphql`)を作成することが可能です。

ただし、この方法では一つのテーブルに対し単純な CRUD 処理しか実行することができません。テーブルに対しより柔軟なクエリを発行するためには[カスタムリゾルバ](https://docs.amplify.aws/cli/graphql-transformer/resolvers)を作成して、SQL とそれに対応するレスポンスのマッピング処理を定義する必要があります。

本リポジトリでは、より複雑な SQL を発行するためのサンプルを提供します。

## 前提となる環境

- Amplify CLI version: >4.52.0
- AWS CLI version: >2.1.3
- jq: >jq-1.6

## デプロイ方法

1. Aurora Serverless の起動

aws cli を用いて新規に Aurora Serverless を起動します。

```bash
aws rds create-db-cluster --db-cluster-identifier amplify-aurora-serverless --engine aurora --engine-version 5.6.10a \
--engine-mode serverless --scaling-configuration MinCapacity=1,MaxCapacity=2 \
--master-username admin --master-user-password Passw0rd! --enable-http-endpoint \
--region ap-northeast-1
```

クラスタの起動には 10 分程度かかる可能性があります。クラスタが正常に起動したかは、以下のコマンドを発行して`available`と表示されることを確認してください。

```bash
aws rds describe-db-clusters --db-cluster-identifier amplify-aurora-serverless | jq -r '.DBClusters[].Status'
```

2. Secrets Manager の作成

Aurora Serverless に接続するための Secrets Manager を作成します。この操作はクラスタが作成されてから実行してください。

```bash
CLUSTER_RESOURCE_ID=$(aws rds describe-db-clusters --db-cluster-identifier amplify-aurora-serverless | jq -r '.DBClusters[].DbClusterResourceId')
CLUSTER_HOST=$(aws rds describe-db-clusters --db-cluster-identifier amplify-aurora-serverless | jq -r '.DBClusters[].DBClusterArn')
cat <<-EOF > creds.json
{
  "dbInstanceIdentifier": "amplify-aurora-serverless",
  "engine": "aurora",
  "resourceId": "$CLUSTER_RESOURCE_ID",
  "host": "$CLUSTER_HOST",
  "port": 3306,
  "username": "admin",
  "password": "Passw0rd!"
}
EOF
```

```bash
aws secretsmanager create-secret --name tutorial/amplify-aurora-serverless-secrets --secret-string file://creds.json --region ap-northeast-1
```

3. Database、Table の作成

```bash
SECRET_ARN=$(aws secretsmanager describe-secret --secret-id tutorial/amplify-aurora-serverless-secrets | jq -r '.ARN')
CLUSTER_ARN=$(aws rds describe-db-clusters --db-cluster-identifier amplify-aurora-serverless | jq -r '.DBClusters[].DBClusterArn')
```

```bash
aws rds-data execute-statement --resource-arn "$CLUSTER_ARN" --secret-arn "$SECRET_ARN" --sql "create database myaurora;"
aws rds-data execute-statement --resource-arn "$CLUSTER_ARN" --secret-arn "$SECRET_ARN" --sql "\
CREATE TABLE myaurora.Customers ( \
 id int(11) NOT NULL PRIMARY KEY, \
 name varchar(50) NOT NULL,       \
 phone varchar(50) NOT NULL,      \
 email varchar(50) NOT NULL,      \
 age int(3) NOT NULL,             \
 INDEX email_index (email),       \
 INDEX age_index (age)            \
);"
```

4. Aurora Serverless を Amplify プロジェクトに取り込む

```bash
amplify init
```

5. AppSync の構築

```bash
amplify push
```

6. 後片付け

```bash
amplify delete
```

```bash
aws rds delete-db-cluster --db-cluster-identifier amplify-aurora-serverless --skip-final-snapshot
```

## 使用方法

> ローカル環境でアプリケーションを起動する方法を記述してください。もし他に特筆すべき事項があれば詳細を記述してください。

```bash
# example
npm install
npm start
open localhost:8000
```

Deploy it to the cloud with [Amplify Console](https://ap-northeast-1.console.aws.amazon.com/amplify/home?region=ap-northeast-1#/) ([Documentation](https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html)).
