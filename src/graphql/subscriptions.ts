/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCal = /* GraphQL */ `
  subscription OnCreateCal {
    onCreateCal {
      id
      year
      month
      day
      is_workday
    }
  }
`;
export const onCreateConfigs = /* GraphQL */ `
  subscription OnCreateConfigs {
    onCreateConfigs {
      id
      key
      value
    }
  }
`;
export const onCreateEmp_types = /* GraphQL */ `
  subscription OnCreateEmp_types {
    onCreateEmp_types {
      id
      emp_type_name
      is_enabled
    }
  }
`;
export const onCreateEmployees = /* GraphQL */ `
  subscription OnCreateEmployees {
    onCreateEmployees {
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
export const onCreateHomebases = /* GraphQL */ `
  subscription OnCreateHomebases {
    onCreateHomebases {
      id
      homebase_name
      is_enabled
    }
  }
`;
export const onCreateLocations = /* GraphQL */ `
  subscription OnCreateLocations {
    onCreateLocations {
      id
      location_name
      prefcode
      zipcode
      is_enabled
    }
  }
`;
export const onCreatePerm_loc = /* GraphQL */ `
  subscription OnCreatePerm_loc {
    onCreatePerm_loc {
      employee_id
      location_id
    }
  }
`;
export const onCreatePermissions = /* GraphQL */ `
  subscription OnCreatePermissions {
    onCreatePermissions {
      id
      permission_name
      is_enabled
    }
  }
`;
export const onCreatePerson_types = /* GraphQL */ `
  subscription OnCreatePerson_types {
    onCreatePerson_types {
      id
      person_type_name
      is_enabled
    }
  }
`;
export const onCreateReservations = /* GraphQL */ `
  subscription OnCreateReservations {
    onCreateReservations {
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
export const onCreateSlots = /* GraphQL */ `
  subscription OnCreateSlots {
    onCreateSlots {
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
export const onCreateTimeframes = /* GraphQL */ `
  subscription OnCreateTimeframes {
    onCreateTimeframes {
      id
      begin_time
      end_time
      is_enabled
    }
  }
`;
export const onCreateCustomers = /* GraphQL */ `
  subscription OnCreateCustomers {
    onCreateCustomers {
      id
      name
      phone
      email
    }
  }
`;
export const onCreateOrders = /* GraphQL */ `
  subscription OnCreateOrders {
    onCreateOrders {
      id
      customerId
      orderDate
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
