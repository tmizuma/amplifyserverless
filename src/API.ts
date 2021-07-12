/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type cal = {
  __typename: "cal",
  id: number,
  year: number,
  month: number,
  day: number,
  is_workday: number,
};

export type CreateCalInput = {
  id: number,
  year: number,
  month: number,
  day: number,
  is_workday: number,
};

export type UpdateCalInput = {
  id: number,
  year?: number | null,
  month?: number | null,
  day?: number | null,
  is_workday?: number | null,
};

export type configs = {
  __typename: "configs",
  id: number,
  key: string,
  value: string,
};

export type CreateConfigsInput = {
  id: number,
  key: string,
  value: string,
};

export type UpdateConfigsInput = {
  id: number,
  key?: string | null,
  value?: string | null,
};

export type emp_types = {
  __typename: "emp_types",
  id: number,
  emp_type_name: string,
  is_enabled: number,
};

export type CreateEmp_typesInput = {
  id: number,
  emp_type_name: string,
  is_enabled: number,
};

export type UpdateEmp_typesInput = {
  id: number,
  emp_type_name?: string | null,
  is_enabled?: number | null,
};

export type employees = {
  __typename: "employees",
  id: number,
  phone: string,
  employee_name: string,
  emp_type_id: number,
  permission_id: number,
  homebase_id: number,
  alias?: string | null,
  created_at: number,
  updated_at: number,
};

export type CreateEmployeesInput = {
  id: number,
  phone: string,
  employee_name: string,
  emp_type_id: number,
  permission_id: number,
  homebase_id: number,
  alias?: string | null,
  created_at: number,
  updated_at: number,
};

export type UpdateEmployeesInput = {
  id: number,
  phone?: string | null,
  employee_name?: string | null,
  emp_type_id?: number | null,
  permission_id?: number | null,
  homebase_id?: number | null,
  alias?: string | null,
  created_at?: number | null,
  updated_at?: number | null,
};

export type homebases = {
  __typename: "homebases",
  id: number,
  homebase_name: string,
  is_enabled: number,
};

export type CreateHomebasesInput = {
  id: number,
  homebase_name: string,
  is_enabled: number,
};

export type UpdateHomebasesInput = {
  id: number,
  homebase_name?: string | null,
  is_enabled?: number | null,
};

export type locations = {
  __typename: "locations",
  id: number,
  location_name: string,
  prefcode: number,
  zipcode: number,
  is_enabled: number,
};

export type CreateLocationsInput = {
  id: number,
  location_name: string,
  prefcode: number,
  zipcode: number,
  is_enabled: number,
};

export type UpdateLocationsInput = {
  id: number,
  location_name?: string | null,
  prefcode?: number | null,
  zipcode?: number | null,
  is_enabled?: number | null,
};

export type perm_loc = {
  __typename: "perm_loc",
  employee_id: number,
  location_id: number,
};

export type CreatePerm_locInput = {
  employee_id: number,
  location_id: number,
};

export type UpdatePerm_locInput = {
  employee_id: number,
  location_id: number,
};

export type permissions = {
  __typename: "permissions",
  id: number,
  permission_name: string,
  is_enabled: number,
};

export type CreatePermissionsInput = {
  id: number,
  permission_name: string,
  is_enabled: number,
};

export type UpdatePermissionsInput = {
  id: number,
  permission_name?: string | null,
  is_enabled?: number | null,
};

export type person_types = {
  __typename: "person_types",
  id: number,
  person_type_name: string,
  is_enabled: number,
};

export type CreatePerson_typesInput = {
  id: number,
  person_type_name: string,
  is_enabled: number,
};

export type UpdatePerson_typesInput = {
  id: number,
  person_type_name?: string | null,
  is_enabled?: number | null,
};

export type reservations = {
  __typename: "reservations",
  id: number,
  employee_id: number,
  slot_id: number,
  person_name: string,
  person_type_id: number,
  created_at: number,
  updated_at: number,
};

export type CreateReservationsInput = {
  id: number,
  employee_id: number,
  slot_id: number,
  person_name: string,
  person_type_id: number,
  created_at: number,
  updated_at: number,
};

export type UpdateReservationsInput = {
  id: number,
  employee_id?: number | null,
  slot_id?: number | null,
  person_name?: string | null,
  person_type_id?: number | null,
  created_at?: number | null,
  updated_at?: number | null,
};

export type slots = {
  __typename: "slots",
  id: number,
  cal_id: number,
  timeframe_id: number,
  location_id: number,
  num_free: number,
  num_init: number,
  is_enabled: number,
  created_at: number,
  updated_at: number,
};

export type CreateSlotsInput = {
  id: number,
  cal_id: number,
  timeframe_id: number,
  location_id: number,
  num_free: number,
  num_init: number,
  is_enabled: number,
  created_at: number,
  updated_at: number,
};

export type UpdateSlotsInput = {
  id: number,
  cal_id?: number | null,
  timeframe_id?: number | null,
  location_id?: number | null,
  num_free?: number | null,
  num_init?: number | null,
  is_enabled?: number | null,
  created_at?: number | null,
  updated_at?: number | null,
};

export type timeframes = {
  __typename: "timeframes",
  id: number,
  begin_time: string,
  end_time: string,
  is_enabled: number,
};

export type CreateTimeframesInput = {
  id: number,
  begin_time: string,
  end_time: string,
  is_enabled: number,
};

export type UpdateTimeframesInput = {
  id: number,
  begin_time?: string | null,
  end_time?: string | null,
  is_enabled?: number | null,
};

export type Customers = {
  __typename: "Customers",
  id: number,
  name: string,
  phone: string,
  email: string,
};

export type CreateCustomersInput = {
  id: number,
  name: string,
  phone: string,
  email: string,
};

export type UpdateCustomersInput = {
  id: number,
  name?: string | null,
  phone?: string | null,
  email?: string | null,
};

export type Orders = {
  __typename: "Orders",
  id: number,
  customerId: number,
  orderDate?: string | null,
};

export type CreateOrdersInput = {
  id: number,
  customerId: number,
  orderDate?: string | null,
};

export type UpdateOrdersInput = {
  id: number,
  customerId?: number | null,
  orderDate?: string | null,
};

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items?:  Array<Todo | null > | null,
  nextToken?: string | null,
};

export type DeleteCalMutationVariables = {
  id: number,
};

export type DeleteCalMutation = {
  deleteCal?:  {
    __typename: "cal",
    id: number,
    year: number,
    month: number,
    day: number,
    is_workday: number,
  } | null,
};

export type CreateCalMutationVariables = {
  createCalInput: CreateCalInput,
};

export type CreateCalMutation = {
  createCal?:  {
    __typename: "cal",
    id: number,
    year: number,
    month: number,
    day: number,
    is_workday: number,
  } | null,
};

export type UpdateCalMutationVariables = {
  updateCalInput: UpdateCalInput,
};

export type UpdateCalMutation = {
  updateCal?:  {
    __typename: "cal",
    id: number,
    year: number,
    month: number,
    day: number,
    is_workday: number,
  } | null,
};

export type DeleteConfigsMutationVariables = {
  id: number,
};

export type DeleteConfigsMutation = {
  deleteConfigs?:  {
    __typename: "configs",
    id: number,
    key: string,
    value: string,
  } | null,
};

export type CreateConfigsMutationVariables = {
  createConfigsInput: CreateConfigsInput,
};

export type CreateConfigsMutation = {
  createConfigs?:  {
    __typename: "configs",
    id: number,
    key: string,
    value: string,
  } | null,
};

export type UpdateConfigsMutationVariables = {
  updateConfigsInput: UpdateConfigsInput,
};

export type UpdateConfigsMutation = {
  updateConfigs?:  {
    __typename: "configs",
    id: number,
    key: string,
    value: string,
  } | null,
};

export type DeleteEmp_typesMutationVariables = {
  id: number,
};

export type DeleteEmp_typesMutation = {
  deleteEmp_types?:  {
    __typename: "emp_types",
    id: number,
    emp_type_name: string,
    is_enabled: number,
  } | null,
};

export type CreateEmp_typesMutationVariables = {
  createEmp_typesInput: CreateEmp_typesInput,
};

export type CreateEmp_typesMutation = {
  createEmp_types?:  {
    __typename: "emp_types",
    id: number,
    emp_type_name: string,
    is_enabled: number,
  } | null,
};

export type UpdateEmp_typesMutationVariables = {
  updateEmp_typesInput: UpdateEmp_typesInput,
};

export type UpdateEmp_typesMutation = {
  updateEmp_types?:  {
    __typename: "emp_types",
    id: number,
    emp_type_name: string,
    is_enabled: number,
  } | null,
};

export type DeleteEmployeesMutationVariables = {
  id: number,
};

export type DeleteEmployeesMutation = {
  deleteEmployees?:  {
    __typename: "employees",
    id: number,
    phone: string,
    employee_name: string,
    emp_type_id: number,
    permission_id: number,
    homebase_id: number,
    alias?: string | null,
    created_at: number,
    updated_at: number,
  } | null,
};

export type CreateEmployeesMutationVariables = {
  createEmployeesInput: CreateEmployeesInput,
};

export type CreateEmployeesMutation = {
  createEmployees?:  {
    __typename: "employees",
    id: number,
    phone: string,
    employee_name: string,
    emp_type_id: number,
    permission_id: number,
    homebase_id: number,
    alias?: string | null,
    created_at: number,
    updated_at: number,
  } | null,
};

export type UpdateEmployeesMutationVariables = {
  updateEmployeesInput: UpdateEmployeesInput,
};

export type UpdateEmployeesMutation = {
  updateEmployees?:  {
    __typename: "employees",
    id: number,
    phone: string,
    employee_name: string,
    emp_type_id: number,
    permission_id: number,
    homebase_id: number,
    alias?: string | null,
    created_at: number,
    updated_at: number,
  } | null,
};

export type DeleteHomebasesMutationVariables = {
  id: number,
};

export type DeleteHomebasesMutation = {
  deleteHomebases?:  {
    __typename: "homebases",
    id: number,
    homebase_name: string,
    is_enabled: number,
  } | null,
};

export type CreateHomebasesMutationVariables = {
  createHomebasesInput: CreateHomebasesInput,
};

export type CreateHomebasesMutation = {
  createHomebases?:  {
    __typename: "homebases",
    id: number,
    homebase_name: string,
    is_enabled: number,
  } | null,
};

export type UpdateHomebasesMutationVariables = {
  updateHomebasesInput: UpdateHomebasesInput,
};

export type UpdateHomebasesMutation = {
  updateHomebases?:  {
    __typename: "homebases",
    id: number,
    homebase_name: string,
    is_enabled: number,
  } | null,
};

export type DeleteLocationsMutationVariables = {
  id: number,
};

export type DeleteLocationsMutation = {
  deleteLocations?:  {
    __typename: "locations",
    id: number,
    location_name: string,
    prefcode: number,
    zipcode: number,
    is_enabled: number,
  } | null,
};

export type CreateLocationsMutationVariables = {
  createLocationsInput: CreateLocationsInput,
};

export type CreateLocationsMutation = {
  createLocations?:  {
    __typename: "locations",
    id: number,
    location_name: string,
    prefcode: number,
    zipcode: number,
    is_enabled: number,
  } | null,
};

export type UpdateLocationsMutationVariables = {
  updateLocationsInput: UpdateLocationsInput,
};

export type UpdateLocationsMutation = {
  updateLocations?:  {
    __typename: "locations",
    id: number,
    location_name: string,
    prefcode: number,
    zipcode: number,
    is_enabled: number,
  } | null,
};

export type DeletePerm_locMutationVariables = {
  location_id: number,
};

export type DeletePerm_locMutation = {
  deletePerm_loc?:  {
    __typename: "perm_loc",
    employee_id: number,
    location_id: number,
  } | null,
};

export type CreatePerm_locMutationVariables = {
  createPerm_locInput: CreatePerm_locInput,
};

export type CreatePerm_locMutation = {
  createPerm_loc?:  {
    __typename: "perm_loc",
    employee_id: number,
    location_id: number,
  } | null,
};

export type UpdatePerm_locMutationVariables = {
  updatePerm_locInput: UpdatePerm_locInput,
};

export type UpdatePerm_locMutation = {
  updatePerm_loc?:  {
    __typename: "perm_loc",
    employee_id: number,
    location_id: number,
  } | null,
};

export type DeletePermissionsMutationVariables = {
  id: number,
};

export type DeletePermissionsMutation = {
  deletePermissions?:  {
    __typename: "permissions",
    id: number,
    permission_name: string,
    is_enabled: number,
  } | null,
};

export type CreatePermissionsMutationVariables = {
  createPermissionsInput: CreatePermissionsInput,
};

export type CreatePermissionsMutation = {
  createPermissions?:  {
    __typename: "permissions",
    id: number,
    permission_name: string,
    is_enabled: number,
  } | null,
};

export type UpdatePermissionsMutationVariables = {
  updatePermissionsInput: UpdatePermissionsInput,
};

export type UpdatePermissionsMutation = {
  updatePermissions?:  {
    __typename: "permissions",
    id: number,
    permission_name: string,
    is_enabled: number,
  } | null,
};

export type DeletePerson_typesMutationVariables = {
  id: number,
};

export type DeletePerson_typesMutation = {
  deletePerson_types?:  {
    __typename: "person_types",
    id: number,
    person_type_name: string,
    is_enabled: number,
  } | null,
};

export type CreatePerson_typesMutationVariables = {
  createPerson_typesInput: CreatePerson_typesInput,
};

export type CreatePerson_typesMutation = {
  createPerson_types?:  {
    __typename: "person_types",
    id: number,
    person_type_name: string,
    is_enabled: number,
  } | null,
};

export type UpdatePerson_typesMutationVariables = {
  updatePerson_typesInput: UpdatePerson_typesInput,
};

export type UpdatePerson_typesMutation = {
  updatePerson_types?:  {
    __typename: "person_types",
    id: number,
    person_type_name: string,
    is_enabled: number,
  } | null,
};

export type DeleteReservationsMutationVariables = {
  id: number,
};

export type DeleteReservationsMutation = {
  deleteReservations?:  {
    __typename: "reservations",
    id: number,
    employee_id: number,
    slot_id: number,
    person_name: string,
    person_type_id: number,
    created_at: number,
    updated_at: number,
  } | null,
};

export type CreateReservationsMutationVariables = {
  createReservationsInput: CreateReservationsInput,
};

export type CreateReservationsMutation = {
  createReservations?:  {
    __typename: "reservations",
    id: number,
    employee_id: number,
    slot_id: number,
    person_name: string,
    person_type_id: number,
    created_at: number,
    updated_at: number,
  } | null,
};

export type UpdateReservationsMutationVariables = {
  updateReservationsInput: UpdateReservationsInput,
};

export type UpdateReservationsMutation = {
  updateReservations?:  {
    __typename: "reservations",
    id: number,
    employee_id: number,
    slot_id: number,
    person_name: string,
    person_type_id: number,
    created_at: number,
    updated_at: number,
  } | null,
};

export type DeleteSlotsMutationVariables = {
  id: number,
};

export type DeleteSlotsMutation = {
  deleteSlots?:  {
    __typename: "slots",
    id: number,
    cal_id: number,
    timeframe_id: number,
    location_id: number,
    num_free: number,
    num_init: number,
    is_enabled: number,
    created_at: number,
    updated_at: number,
  } | null,
};

export type CreateSlotsMutationVariables = {
  createSlotsInput: CreateSlotsInput,
};

export type CreateSlotsMutation = {
  createSlots?:  {
    __typename: "slots",
    id: number,
    cal_id: number,
    timeframe_id: number,
    location_id: number,
    num_free: number,
    num_init: number,
    is_enabled: number,
    created_at: number,
    updated_at: number,
  } | null,
};

export type UpdateSlotsMutationVariables = {
  updateSlotsInput: UpdateSlotsInput,
};

export type UpdateSlotsMutation = {
  updateSlots?:  {
    __typename: "slots",
    id: number,
    cal_id: number,
    timeframe_id: number,
    location_id: number,
    num_free: number,
    num_init: number,
    is_enabled: number,
    created_at: number,
    updated_at: number,
  } | null,
};

export type DeleteTimeframesMutationVariables = {
  id: number,
};

export type DeleteTimeframesMutation = {
  deleteTimeframes?:  {
    __typename: "timeframes",
    id: number,
    begin_time: string,
    end_time: string,
    is_enabled: number,
  } | null,
};

export type CreateTimeframesMutationVariables = {
  createTimeframesInput: CreateTimeframesInput,
};

export type CreateTimeframesMutation = {
  createTimeframes?:  {
    __typename: "timeframes",
    id: number,
    begin_time: string,
    end_time: string,
    is_enabled: number,
  } | null,
};

export type UpdateTimeframesMutationVariables = {
  updateTimeframesInput: UpdateTimeframesInput,
};

export type UpdateTimeframesMutation = {
  updateTimeframes?:  {
    __typename: "timeframes",
    id: number,
    begin_time: string,
    end_time: string,
    is_enabled: number,
  } | null,
};

export type DeleteCustomersMutationVariables = {
  id: number,
};

export type DeleteCustomersMutation = {
  deleteCustomers?:  {
    __typename: "Customers",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null,
};

export type CreateCustomersMutationVariables = {
  createCustomersInput: CreateCustomersInput,
};

export type CreateCustomersMutation = {
  createCustomers?:  {
    __typename: "Customers",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null,
};

export type UpdateCustomersMutationVariables = {
  updateCustomersInput: UpdateCustomersInput,
};

export type UpdateCustomersMutation = {
  updateCustomers?:  {
    __typename: "Customers",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null,
};

export type DeleteOrdersMutationVariables = {
  id: number,
};

export type DeleteOrdersMutation = {
  deleteOrders?:  {
    __typename: "Orders",
    id: number,
    customerId: number,
    orderDate?: string | null,
  } | null,
};

export type CreateOrdersMutationVariables = {
  createOrdersInput: CreateOrdersInput,
};

export type CreateOrdersMutation = {
  createOrders?:  {
    __typename: "Orders",
    id: number,
    customerId: number,
    orderDate?: string | null,
  } | null,
};

export type UpdateOrdersMutationVariables = {
  updateOrdersInput: UpdateOrdersInput,
};

export type UpdateOrdersMutation = {
  updateOrders?:  {
    __typename: "Orders",
    id: number,
    customerId: number,
    orderDate?: string | null,
  } | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCalQueryVariables = {
  id: number,
};

export type GetCalQuery = {
  getCal?:  {
    __typename: "cal",
    id: number,
    year: number,
    month: number,
    day: number,
    is_workday: number,
  } | null,
};

export type ListCalsQuery = {
  listCals?:  Array< {
    __typename: "cal",
    id: number,
    year: number,
    month: number,
    day: number,
    is_workday: number,
  } | null > | null,
};

export type GetConfigsQueryVariables = {
  id: number,
};

export type GetConfigsQuery = {
  getConfigs?:  {
    __typename: "configs",
    id: number,
    key: string,
    value: string,
  } | null,
};

export type ListConfigssQuery = {
  listConfigss?:  Array< {
    __typename: "configs",
    id: number,
    key: string,
    value: string,
  } | null > | null,
};

export type GetEmp_typesQueryVariables = {
  id: number,
};

export type GetEmp_typesQuery = {
  getEmp_types?:  {
    __typename: "emp_types",
    id: number,
    emp_type_name: string,
    is_enabled: number,
  } | null,
};

export type ListEmp_typessQuery = {
  listEmp_typess?:  Array< {
    __typename: "emp_types",
    id: number,
    emp_type_name: string,
    is_enabled: number,
  } | null > | null,
};

export type GetEmployeesQueryVariables = {
  id: number,
};

export type GetEmployeesQuery = {
  getEmployees?:  {
    __typename: "employees",
    id: number,
    phone: string,
    employee_name: string,
    emp_type_id: number,
    permission_id: number,
    homebase_id: number,
    alias?: string | null,
    created_at: number,
    updated_at: number,
  } | null,
};

export type ListEmployeessQuery = {
  listEmployeess?:  Array< {
    __typename: "employees",
    id: number,
    phone: string,
    employee_name: string,
    emp_type_id: number,
    permission_id: number,
    homebase_id: number,
    alias?: string | null,
    created_at: number,
    updated_at: number,
  } | null > | null,
};

export type GetHomebasesQueryVariables = {
  id: number,
};

export type GetHomebasesQuery = {
  getHomebases?:  {
    __typename: "homebases",
    id: number,
    homebase_name: string,
    is_enabled: number,
  } | null,
};

export type ListHomebasessQuery = {
  listHomebasess?:  Array< {
    __typename: "homebases",
    id: number,
    homebase_name: string,
    is_enabled: number,
  } | null > | null,
};

export type GetLocationsQueryVariables = {
  id: number,
};

export type GetLocationsQuery = {
  getLocations?:  {
    __typename: "locations",
    id: number,
    location_name: string,
    prefcode: number,
    zipcode: number,
    is_enabled: number,
  } | null,
};

export type ListLocationssQuery = {
  listLocationss?:  Array< {
    __typename: "locations",
    id: number,
    location_name: string,
    prefcode: number,
    zipcode: number,
    is_enabled: number,
  } | null > | null,
};

export type GetPerm_locQueryVariables = {
  location_id: number,
};

export type GetPerm_locQuery = {
  getPerm_loc?:  {
    __typename: "perm_loc",
    employee_id: number,
    location_id: number,
  } | null,
};

export type ListPerm_locsQuery = {
  listPerm_locs?:  Array< {
    __typename: "perm_loc",
    employee_id: number,
    location_id: number,
  } | null > | null,
};

export type GetPermissionsQueryVariables = {
  id: number,
};

export type GetPermissionsQuery = {
  getPermissions?:  {
    __typename: "permissions",
    id: number,
    permission_name: string,
    is_enabled: number,
  } | null,
};

export type ListPermissionssQuery = {
  listPermissionss?:  Array< {
    __typename: "permissions",
    id: number,
    permission_name: string,
    is_enabled: number,
  } | null > | null,
};

export type GetPerson_typesQueryVariables = {
  id: number,
};

export type GetPerson_typesQuery = {
  getPerson_types?:  {
    __typename: "person_types",
    id: number,
    person_type_name: string,
    is_enabled: number,
  } | null,
};

export type ListPerson_typessQuery = {
  listPerson_typess?:  Array< {
    __typename: "person_types",
    id: number,
    person_type_name: string,
    is_enabled: number,
  } | null > | null,
};

export type GetReservationsQueryVariables = {
  id: number,
};

export type GetReservationsQuery = {
  getReservations?:  {
    __typename: "reservations",
    id: number,
    employee_id: number,
    slot_id: number,
    person_name: string,
    person_type_id: number,
    created_at: number,
    updated_at: number,
  } | null,
};

export type ListReservationssQuery = {
  listReservationss?:  Array< {
    __typename: "reservations",
    id: number,
    employee_id: number,
    slot_id: number,
    person_name: string,
    person_type_id: number,
    created_at: number,
    updated_at: number,
  } | null > | null,
};

export type GetSlotsQueryVariables = {
  id: number,
};

export type GetSlotsQuery = {
  getSlots?:  {
    __typename: "slots",
    id: number,
    cal_id: number,
    timeframe_id: number,
    location_id: number,
    num_free: number,
    num_init: number,
    is_enabled: number,
    created_at: number,
    updated_at: number,
  } | null,
};

export type ListSlotssQuery = {
  listSlotss?:  Array< {
    __typename: "slots",
    id: number,
    cal_id: number,
    timeframe_id: number,
    location_id: number,
    num_free: number,
    num_init: number,
    is_enabled: number,
    created_at: number,
    updated_at: number,
  } | null > | null,
};

export type GetTimeframesQueryVariables = {
  id: number,
};

export type GetTimeframesQuery = {
  getTimeframes?:  {
    __typename: "timeframes",
    id: number,
    begin_time: string,
    end_time: string,
    is_enabled: number,
  } | null,
};

export type ListTimeframessQuery = {
  listTimeframess?:  Array< {
    __typename: "timeframes",
    id: number,
    begin_time: string,
    end_time: string,
    is_enabled: number,
  } | null > | null,
};

export type GetCustomersQueryVariables = {
  id: number,
};

export type GetCustomersQuery = {
  getCustomers?:  {
    __typename: "Customers",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null,
};

export type ListCustomerssQuery = {
  listCustomerss?:  Array< {
    __typename: "Customers",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null > | null,
};

export type GetCustomersByEmailQueryVariables = {
  email?: string | null,
};

export type GetCustomersByEmailQuery = {
  getCustomersByEmail?:  {
    __typename: "Customers",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null,
};

export type GetOrdersQueryVariables = {
  id: number,
};

export type GetOrdersQuery = {
  getOrders?:  {
    __typename: "Orders",
    id: number,
    customerId: number,
    orderDate?: string | null,
  } | null,
};

export type ListOrderssQuery = {
  listOrderss?:  Array< {
    __typename: "Orders",
    id: number,
    customerId: number,
    orderDate?: string | null,
  } | null > | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items?:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCalSubscription = {
  onCreateCal?:  {
    __typename: "cal",
    id: number,
    year: number,
    month: number,
    day: number,
    is_workday: number,
  } | null,
};

export type OnCreateConfigsSubscription = {
  onCreateConfigs?:  {
    __typename: "configs",
    id: number,
    key: string,
    value: string,
  } | null,
};

export type OnCreateEmp_typesSubscription = {
  onCreateEmp_types?:  {
    __typename: "emp_types",
    id: number,
    emp_type_name: string,
    is_enabled: number,
  } | null,
};

export type OnCreateEmployeesSubscription = {
  onCreateEmployees?:  {
    __typename: "employees",
    id: number,
    phone: string,
    employee_name: string,
    emp_type_id: number,
    permission_id: number,
    homebase_id: number,
    alias?: string | null,
    created_at: number,
    updated_at: number,
  } | null,
};

export type OnCreateHomebasesSubscription = {
  onCreateHomebases?:  {
    __typename: "homebases",
    id: number,
    homebase_name: string,
    is_enabled: number,
  } | null,
};

export type OnCreateLocationsSubscription = {
  onCreateLocations?:  {
    __typename: "locations",
    id: number,
    location_name: string,
    prefcode: number,
    zipcode: number,
    is_enabled: number,
  } | null,
};

export type OnCreatePerm_locSubscription = {
  onCreatePerm_loc?:  {
    __typename: "perm_loc",
    employee_id: number,
    location_id: number,
  } | null,
};

export type OnCreatePermissionsSubscription = {
  onCreatePermissions?:  {
    __typename: "permissions",
    id: number,
    permission_name: string,
    is_enabled: number,
  } | null,
};

export type OnCreatePerson_typesSubscription = {
  onCreatePerson_types?:  {
    __typename: "person_types",
    id: number,
    person_type_name: string,
    is_enabled: number,
  } | null,
};

export type OnCreateReservationsSubscription = {
  onCreateReservations?:  {
    __typename: "reservations",
    id: number,
    employee_id: number,
    slot_id: number,
    person_name: string,
    person_type_id: number,
    created_at: number,
    updated_at: number,
  } | null,
};

export type OnCreateSlotsSubscription = {
  onCreateSlots?:  {
    __typename: "slots",
    id: number,
    cal_id: number,
    timeframe_id: number,
    location_id: number,
    num_free: number,
    num_init: number,
    is_enabled: number,
    created_at: number,
    updated_at: number,
  } | null,
};

export type OnCreateTimeframesSubscription = {
  onCreateTimeframes?:  {
    __typename: "timeframes",
    id: number,
    begin_time: string,
    end_time: string,
    is_enabled: number,
  } | null,
};

export type OnCreateCustomersSubscription = {
  onCreateCustomers?:  {
    __typename: "Customers",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null,
};

export type OnCreateOrdersSubscription = {
  onCreateOrders?:  {
    __typename: "Orders",
    id: number,
    customerId: number,
    orderDate?: string | null,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
