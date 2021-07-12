/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCal = /* GraphQL */ `
  query GetCal($id: Int!) {
    getCal(id: $id) {
      id
      year
      month
      day
      is_workday
    }
  }
`;
export const listCals = /* GraphQL */ `
  query ListCals {
    listCals {
      id
      year
      month
      day
      is_workday
    }
  }
`;
export const getConfigs = /* GraphQL */ `
  query GetConfigs($id: Int!) {
    getConfigs(id: $id) {
      id
      key
      value
    }
  }
`;
export const listConfigss = /* GraphQL */ `
  query ListConfigss {
    listConfigss {
      id
      key
      value
    }
  }
`;
export const getEmp_types = /* GraphQL */ `
  query GetEmp_types($id: Int!) {
    getEmp_types(id: $id) {
      id
      emp_type_name
      is_enabled
    }
  }
`;
export const listEmp_typess = /* GraphQL */ `
  query ListEmp_typess {
    listEmp_typess {
      id
      emp_type_name
      is_enabled
    }
  }
`;
export const getEmployees = /* GraphQL */ `
  query GetEmployees($id: Int!) {
    getEmployees(id: $id) {
      id
      phone
      employee_name
      emp_type_id
      permission_id
      homebase_id
      alias
      created_at
      updated_at
    }
  }
`;
export const listEmployeess = /* GraphQL */ `
  query ListEmployeess {
    listEmployeess {
      id
      phone
      employee_name
      emp_type_id
      permission_id
      homebase_id
      alias
      created_at
      updated_at
    }
  }
`;
export const getHomebases = /* GraphQL */ `
  query GetHomebases($id: Int!) {
    getHomebases(id: $id) {
      id
      homebase_name
      is_enabled
    }
  }
`;
export const listHomebasess = /* GraphQL */ `
  query ListHomebasess {
    listHomebasess {
      id
      homebase_name
      is_enabled
    }
  }
`;
export const getLocations = /* GraphQL */ `
  query GetLocations($id: Int!) {
    getLocations(id: $id) {
      id
      location_name
      prefcode
      zipcode
      is_enabled
    }
  }
`;
export const listLocationss = /* GraphQL */ `
  query ListLocationss {
    listLocationss {
      id
      location_name
      prefcode
      zipcode
      is_enabled
    }
  }
`;
export const getPerm_loc = /* GraphQL */ `
  query GetPerm_loc($location_id: Int!) {
    getPerm_loc(location_id: $location_id) {
      employee_id
      location_id
    }
  }
`;
export const listPerm_locs = /* GraphQL */ `
  query ListPerm_locs {
    listPerm_locs {
      employee_id
      location_id
    }
  }
`;
export const getPermissions = /* GraphQL */ `
  query GetPermissions($id: Int!) {
    getPermissions(id: $id) {
      id
      permission_name
      is_enabled
    }
  }
`;
export const listPermissionss = /* GraphQL */ `
  query ListPermissionss {
    listPermissionss {
      id
      permission_name
      is_enabled
    }
  }
`;
export const getPerson_types = /* GraphQL */ `
  query GetPerson_types($id: Int!) {
    getPerson_types(id: $id) {
      id
      person_type_name
      is_enabled
    }
  }
`;
export const listPerson_typess = /* GraphQL */ `
  query ListPerson_typess {
    listPerson_typess {
      id
      person_type_name
      is_enabled
    }
  }
`;
export const getReservations = /* GraphQL */ `
  query GetReservations($id: Int!) {
    getReservations(id: $id) {
      id
      employee_id
      slot_id
      person_name
      person_type_id
      created_at
      updated_at
    }
  }
`;
export const listReservationss = /* GraphQL */ `
  query ListReservationss {
    listReservationss {
      id
      employee_id
      slot_id
      person_name
      person_type_id
      created_at
      updated_at
    }
  }
`;
export const getSlots = /* GraphQL */ `
  query GetSlots($id: Int!) {
    getSlots(id: $id) {
      id
      cal_id
      timeframe_id
      location_id
      num_free
      num_init
      is_enabled
      created_at
      updated_at
    }
  }
`;
export const listSlotss = /* GraphQL */ `
  query ListSlotss {
    listSlotss {
      id
      cal_id
      timeframe_id
      location_id
      num_free
      num_init
      is_enabled
      created_at
      updated_at
    }
  }
`;
export const getTimeframes = /* GraphQL */ `
  query GetTimeframes($id: Int!) {
    getTimeframes(id: $id) {
      id
      begin_time
      end_time
      is_enabled
    }
  }
`;
export const listTimeframess = /* GraphQL */ `
  query ListTimeframess {
    listTimeframess {
      id
      begin_time
      end_time
      is_enabled
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
    }
  }
`;
export const getCustomersByEmail = /* GraphQL */ `
  query GetCustomersByEmail($email: String) {
    getCustomersByEmail(email: $email) {
      id
      name
      phone
      email
    }
  }
`;
export const getOrders = /* GraphQL */ `
  query GetOrders($id: Int!) {
    getOrders(id: $id) {
      id
      customerId
      orderDate
    }
  }
`;
export const listOrderss = /* GraphQL */ `
  query ListOrderss {
    listOrderss {
      id
      customerId
      orderDate
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
