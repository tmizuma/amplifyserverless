# Amplify + AppSync を使って Aurora Serverless に対して複雑なクエリを発行する

Amplify CLI の`add-graphql-datasource`コマンドを利用することで、[既存の Aurora Serverless をデータソースとしてプロジェクトに import することができます。](https://docs.amplify.aws/cli/graphql-transformer/relational) この方法を用いることで、AppSync から簡単に Aurora Serverless を呼び出すためのスキーマ(`schema.graphql`)を作成することが可能です。

ただし、この方法では一つのテーブルに対し単純な CRUD 処理しか実行することができません。テーブルに対しより柔軟なクエリを発行するためには[カスタムリゾルバ](https://docs.amplify.aws/cli/graphql-transformer/resolvers)を作成して、SQL とそれに対応するレスポンスのマッピング処理を定義する必要があります。

本リポジトリでは、データベース(Aurora MySQL)に以下のような SQL を発行するためのサンプルを提供します。

```sql
# テーブル定義
CREATE TABLE myaurora.Customers (
 id int(11) NOT NULL PRIMARY KEY,
 name varchar(50) NOT NULL,
 phone varchar(50) NOT NULL,
 email varchar(50) NOT NULL,
 age int(3) NOT NULL,
 INDEX email_index (email),
 INDEX age_index (age)
);

# 発行するSQL

## id以外の条件で検索
SELECT * from Customers WHERE email = 'test@amazon.com';
## レコード数のカウント
SELECT count(1) from Customers;
## 複数カラムでの検索
SELECT * from Customers WHERE age > 10 AND age < 20;
```

AppSync からこれらの SQL を発行するために以下の`vtl`ファイルを追加しています。

- `amplify/backend/api/serverless/resolvers/Query.getCustomersByEmail.req.vtl`
- `amplify/backend/api/serverless/resolvers/Query.getCustomersByEmail.res.vtl`
- `amplify/backend/api/serverless/resolvers/Query.countCustomers.req.vtl`
- `amplify/backend/api/serverless/resolvers/Query.countCustomers.red.vtl`
- `amplify/backend/api/serverless/resolvers/Query.listCustomersByAgeRange.req.vtl`
- `amplify/backend/api/serverless/resolvers/Query.listCustomersByAgeRange.res.vtl`

カスタムリゾルバの設定は以下のファイルの`CustomersByEmailGetResolver`、`CountCustomersResolver`、`CustomersByAgeRangeResolver`を参照してください。

- `amplify/backend/api/serverless/stacks/serverless-myaurora-rds.json`

GraphQL のスキーマ定義は以下の`schema.grapql`を参照してください。

- `amplify/backend/api/serverless/schema.graphql`

## 前提となる環境

### ライブラリ

- Amplify CLI version: >4.52.0
- AWS CLI version: >2.1.3
- [jq](https://www.npmjs.com/package/node-jq): >jq-1.6

### その他

- Amplify Configure の設定が完了していること

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

4. Amplify プロジェクトの設定を行う

```bash
amplify init

# コマンドラインから以下のように回答する
? Enter a name for the environment dev
? Choose your default editor: None
? Select the authentication method you want to use: AWS profile
? Please choose the profile you want to use default
? Provide the region in which your cluster is located: ap-northeast-1
? Select the Aurora Serverless cluster that will be used as the data source for your API: amplify-aurora-serverless
? Select the secret used to access your Aurora Serverless cluster: tutorial/amplify-aurora-serverless-secrets
? Select the database to use as the datasource: myaurora
```

`amplify status`を発行して AppSync の構築準備ができていることを確認する。

```bash
amplify status

Current Environment: dev

| Category | Resource name | Operation | Provider plugin   |
| -------- | ------------- | --------- | ----------------- |
| Api      | serverless    | Create    | awscloudformation |

```

5. AppSync の構築

`amplify push`コマンドで AppSync の設定をクラウドに反映します。選択肢は全てデフォルトを選択します。

```bash
amplify push
```

6. マネジメントコンソールから AppSync の動作を確認する

6-1. [マネジメントコンソール](https://ap-northeast-1.console.aws.amazon.com/appsync/home?region=ap-northeast-1#/apis)にアクセスして作成した API(serverless-dev)を選択する。

6-2. 左のナビゲーションバーから「クエリ」を選択して GraphQL のクエリエディタを開く。

6-3. クエリを発行し、動作を確認する。

### 顧客を新規登録する

```graphql
mutation MyMutation {
  createCustomers(
    createCustomersInput: {
      age: 20
      email: "test@amazon.com"
      id: 1
      name: "test"
      phone: "08012345678"
    }
  ) {
    age
    email
    id
    name
    phone
  }
}
```

### Email で顧客を検索する

```graphql
query MyQuery {
  getCustomersByEmail(email: "test@amazon.com") {
    age
    email
    id
    name
    phone
  }
}
```

### 顧客テーブルのレコード数をカウントする

```graphql
query MyQuery {
  countCustomers {
    count
  }
}
```

### 年齢が 10 歳~30 歳の顧客を検索する

```graphql
query MyQuery {
  listCustomersByAgeRange(min: 10, max: 30) {
    age
    email
    id
    name
    phone
  }
}
```

7. 後片付け

```bash
# Secrets Managerのシークレットの削除
aws secretsmanager delete-secret --secret-id tutorial/amplify-aurora-serverless-secrets --force-delete-without-recovery --region ap-northeast-1
# Aurora Serverless クラスタの削除
aws rds delete-db-cluster --db-cluster-identifier amplify-aurora-serverless --skip-final-snapshot
# Amplify プロジェクトの削除
amplify delete
```
