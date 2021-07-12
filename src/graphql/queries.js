/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomersByEmail = /* GraphQL */ `
  query GetCustomersByEmail($email: String!) {
    getCustomersByEmail(email: $email) {
      id
      name
      phone
      email
      age
    }
  }
`;
export const getCustomers = /* GraphQL */ `
  query GetCustomers($id: Int!) {
    getCustomers(id: $id) {
      id
      name
      phone
      email
      age
    }
  }
`;
export const countCustomers = /* GraphQL */ `
  query CountCustomers {
    countCustomers {
      count
    }
  }
`;
export const listCustomerss = /* GraphQL */ `
  query ListCustomerss {
    listCustomerss {
      id
      name
      phone
      email
      age
    }
  }
`;
export const listCustomersByAgeRange = /* GraphQL */ `
  query ListCustomersByAgeRange($min: Int!, $max: Int!) {
    listCustomersByAgeRange(min: $min, max: $max) {
      id
      name
      phone
      email
      age
    }
  }
`;
