/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteCal = /* GraphQL */ `
  mutation DeleteCal($id: Int!) {
    deleteCal(id: $id) {
      id
      year
      month
      day
      is_workday
    }
  }
`;
export const createCal = /* GraphQL */ `
  mutation CreateCal($createCalInput: CreateCalInput!) {
    createCal(createCalInput: $createCalInput) {
      id
      year
      month
      day
      is_workday
    }
  }
`;
export const updateCal = /* GraphQL */ `
  mutation UpdateCal($updateCalInput: UpdateCalInput!) {
    updateCal(updateCalInput: $updateCalInput) {
      id
      year
      month
      day
      is_workday
    }
  }
`;
export const deleteConfigs = /* GraphQL */ `
  mutation DeleteConfigs($id: Int!) {
    deleteConfigs(id: $id) {
      id
      key
      value
    }
  }
`;
export const createConfigs = /* GraphQL */ `
  mutation CreateConfigs($createConfigsInput: CreateConfigsInput!) {
    createConfigs(createConfigsInput: $createConfigsInput) {
      id
      key
      value
    }
  }
`;
export const updateConfigs = /* GraphQL */ `
  mutation UpdateConfigs($updateConfigsInput: UpdateConfigsInput!) {
    updateConfigs(updateConfigsInput: $updateConfigsInput) {
      id
      key
      value
    }
  }
`;
export const deleteEmp_types = /* GraphQL */ `
  mutation DeleteEmp_types($id: Int!) {
    deleteEmp_types(id: $id) {
      id
      emp_type_name
      is_enabled
    }
  }
`;
export const createEmp_types = /* GraphQL */ `
  mutation CreateEmp_types($createEmp_typesInput: CreateEmp_typesInput!) {
    createEmp_types(createEmp_typesInput: $createEmp_typesInput) {
      id
      emp_type_name
      is_enabled
    }
  }
`;
export const updateEmp_types = /* GraphQL */ `
  mutation UpdateEmp_types($updateEmp_typesInput: UpdateEmp_typesInput!) {
    updateEmp_types(updateEmp_typesInput: $updateEmp_typesInput) {
      id
      emp_type_name
      is_enabled
    }
  }
`;
export const deleteEmployees = /* GraphQL */ `
  mutation DeleteEmployees($id: Int!) {
    deleteEmployees(id: $id) {
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
export const createEmployees = /* GraphQL */ `
  mutation CreateEmployees($createEmployeesInput: CreateEmployeesInput!) {
    createEmployees(createEmployeesInput: $createEmployeesInput) {
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
export const updateEmployees = /* GraphQL */ `
  mutation UpdateEmployees($updateEmployeesInput: UpdateEmployeesInput!) {
    updateEmployees(updateEmployeesInput: $updateEmployeesInput) {
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
export const deleteHomebases = /* GraphQL */ `
  mutation DeleteHomebases($id: Int!) {
    deleteHomebases(id: $id) {
      id
      homebase_name
      is_enabled
    }
  }
`;
export const createHomebases = /* GraphQL */ `
  mutation CreateHomebases($createHomebasesInput: CreateHomebasesInput!) {
    createHomebases(createHomebasesInput: $createHomebasesInput) {
      id
      homebase_name
      is_enabled
    }
  }
`;
export const updateHomebases = /* GraphQL */ `
  mutation UpdateHomebases($updateHomebasesInput: UpdateHomebasesInput!) {
    updateHomebases(updateHomebasesInput: $updateHomebasesInput) {
      id
      homebase_name
      is_enabled
    }
  }
`;
export const deleteLocations = /* GraphQL */ `
  mutation DeleteLocations($id: Int!) {
    deleteLocations(id: $id) {
      id
      location_name
      prefcode
      zipcode
      is_enabled
    }
  }
`;
export const createLocations = /* GraphQL */ `
  mutation CreateLocations($createLocationsInput: CreateLocationsInput!) {
    createLocations(createLocationsInput: $createLocationsInput) {
      id
      location_name
      prefcode
      zipcode
      is_enabled
    }
  }
`;
export const updateLocations = /* GraphQL */ `
  mutation UpdateLocations($updateLocationsInput: UpdateLocationsInput!) {
    updateLocations(updateLocationsInput: $updateLocationsInput) {
      id
      location_name
      prefcode
      zipcode
      is_enabled
    }
  }
`;
export const deletePerm_loc = /* GraphQL */ `
  mutation DeletePerm_loc($location_id: Int!) {
    deletePerm_loc(location_id: $location_id) {
      employee_id
      location_id
    }
  }
`;
export const createPerm_loc = /* GraphQL */ `
  mutation CreatePerm_loc($createPerm_locInput: CreatePerm_locInput!) {
    createPerm_loc(createPerm_locInput: $createPerm_locInput) {
      employee_id
      location_id
    }
  }
`;
export const updatePerm_loc = /* GraphQL */ `
  mutation UpdatePerm_loc($updatePerm_locInput: UpdatePerm_locInput!) {
    updatePerm_loc(updatePerm_locInput: $updatePerm_locInput) {
      employee_id
      location_id
    }
  }
`;
export const deletePermissions = /* GraphQL */ `
  mutation DeletePermissions($id: Int!) {
    deletePermissions(id: $id) {
      id
      permission_name
      is_enabled
    }
  }
`;
export const createPermissions = /* GraphQL */ `
  mutation CreatePermissions($createPermissionsInput: CreatePermissionsInput!) {
    createPermissions(createPermissionsInput: $createPermissionsInput) {
      id
      permission_name
      is_enabled
    }
  }
`;
export const updatePermissions = /* GraphQL */ `
  mutation UpdatePermissions($updatePermissionsInput: UpdatePermissionsInput!) {
    updatePermissions(updatePermissionsInput: $updatePermissionsInput) {
      id
      permission_name
      is_enabled
    }
  }
`;
export const deletePerson_types = /* GraphQL */ `
  mutation DeletePerson_types($id: Int!) {
    deletePerson_types(id: $id) {
      id
      person_type_name
      is_enabled
    }
  }
`;
export const createPerson_types = /* GraphQL */ `
  mutation CreatePerson_types(
    $createPerson_typesInput: CreatePerson_typesInput!
  ) {
    createPerson_types(createPerson_typesInput: $createPerson_typesInput) {
      id
      person_type_name
      is_enabled
    }
  }
`;
export const updatePerson_types = /* GraphQL */ `
  mutation UpdatePerson_types(
    $updatePerson_typesInput: UpdatePerson_typesInput!
  ) {
    updatePerson_types(updatePerson_typesInput: $updatePerson_typesInput) {
      id
      person_type_name
      is_enabled
    }
  }
`;
export const deleteReservations = /* GraphQL */ `
  mutation DeleteReservations($id: Int!) {
    deleteReservations(id: $id) {
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
export const createReservations = /* GraphQL */ `
  mutation CreateReservations(
    $createReservationsInput: CreateReservationsInput!
  ) {
    createReservations(createReservationsInput: $createReservationsInput) {
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
export const updateReservations = /* GraphQL */ `
  mutation UpdateReservations(
    $updateReservationsInput: UpdateReservationsInput!
  ) {
    updateReservations(updateReservationsInput: $updateReservationsInput) {
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
export const deleteSlots = /* GraphQL */ `
  mutation DeleteSlots($id: Int!) {
    deleteSlots(id: $id) {
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
export const createSlots = /* GraphQL */ `
  mutation CreateSlots($createSlotsInput: CreateSlotsInput!) {
    createSlots(createSlotsInput: $createSlotsInput) {
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
export const updateSlots = /* GraphQL */ `
  mutation UpdateSlots($updateSlotsInput: UpdateSlotsInput!) {
    updateSlots(updateSlotsInput: $updateSlotsInput) {
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
export const deleteTimeframes = /* GraphQL */ `
  mutation DeleteTimeframes($id: Int!) {
    deleteTimeframes(id: $id) {
      id
      begin_time
      end_time
      is_enabled
    }
  }
`;
export const createTimeframes = /* GraphQL */ `
  mutation CreateTimeframes($createTimeframesInput: CreateTimeframesInput!) {
    createTimeframes(createTimeframesInput: $createTimeframesInput) {
      id
      begin_time
      end_time
      is_enabled
    }
  }
`;
export const updateTimeframes = /* GraphQL */ `
  mutation UpdateTimeframes($updateTimeframesInput: UpdateTimeframesInput!) {
    updateTimeframes(updateTimeframesInput: $updateTimeframesInput) {
      id
      begin_time
      end_time
      is_enabled
    }
  }
`;
export const deleteCustomers = /* GraphQL */ `
  mutation DeleteCustomers($id: Int!) {
    deleteCustomers(id: $id) {
      id
      name
      phone
      email
    }
  }
`;
export const createCustomers = /* GraphQL */ `
  mutation CreateCustomers($createCustomersInput: CreateCustomersInput!) {
    createCustomers(createCustomersInput: $createCustomersInput) {
      id
      name
      phone
      email
    }
  }
`;
export const updateCustomers = /* GraphQL */ `
  mutation UpdateCustomers($updateCustomersInput: UpdateCustomersInput!) {
    updateCustomers(updateCustomersInput: $updateCustomersInput) {
      id
      name
      phone
      email
    }
  }
`;
export const deleteOrders = /* GraphQL */ `
  mutation DeleteOrders($id: Int!) {
    deleteOrders(id: $id) {
      id
      customerId
      orderDate
    }
  }
`;
export const createOrders = /* GraphQL */ `
  mutation CreateOrders($createOrdersInput: CreateOrdersInput!) {
    createOrders(createOrdersInput: $createOrdersInput) {
      id
      customerId
      orderDate
    }
  }
`;
export const updateOrders = /* GraphQL */ `
  mutation UpdateOrders($updateOrdersInput: UpdateOrdersInput!) {
    updateOrders(updateOrdersInput: $updateOrdersInput) {
      id
      customerId
      orderDate
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
