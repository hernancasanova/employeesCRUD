import { find, assign, get } from 'lodash';
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    fetchEmployees: null,
    fetchEmployeesSuccess: ['employees'],
    fetchEmployeesFailure: ['error'],

    createEmployee: ['first_name','last_name', 'email', 'position','address'],
    createEmployeeSuccess: ['employee'],
    createEmployeeFailure: ['error'],

    fetchEmployee: ['employee_id'],
    fetchEmployeeSuccess: ['employee'],
    fetchEmployeeFailure: ['error'],

    updateEmployee: ['employee_id', 'first_name','last_name', 'email', 'position', 'address'],
    updateEmployeeSuccess: ['employee'],
    updateEmployeeFailure: ['error'],

    deleteEmployee: ['employee_id'],
    deleteEmployeeSuccess: null,
    deleteEmployeeFailure: ['error'],
});


export const EmployeeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    loading: false,
    error: null,
    employees: [],
    employee: null,
    employeeToEdit: null,
    employeeUpdated: null,
    employeeDeleted: null,
})

const resetState = () => INITIAL_STATE;

export const reducer = createReducer(INITIAL_STATE, {

    // Fetch users actions
    [Types.FETCH_EMPLOYEES]: (state) => {

        return {
            ...state,
            loading: true,
            error: null,
            employee: null,
            employeeToEdit: null,
        };
    },

    [Types.FETCH_EMPLOYEES_SUCCESS]: (state, action) => {
        console.log('redux',action);
        return {
            ...state,
            employees: action.employees,
            loading: false,
            error: null,
            employee: null,
            employeeToEdit: null,
        };
    },

    [Types.FETCH_EMPLOYEES_FAILURE]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error,
            employee: null,
            employeeToEdit: null,
        };
    },

    // Create an user
    [Types.CREATE_EMPLOYEE]: (state, action) => {
        return {
            ...state,
            loading : true,
            error: null,
            employee: null,
            employeeToEdit: null,
        };
    },

    [Types.CREATE_EMPLOYEE_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            employee: action.employee,
            error: null,
            employeeToEdit: null,
        };
    },

    [Types.CREATE_EMPLOYEE_FAILURE]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error,
            employee: null,
            employeeToEdit: null,
        };
    },

    // Fetch a single user
    [Types.FETCH_EMPLOYEE]: (state) => {
        return {
            ...state,
            loading: true,
            error: null,
            employee: null,
            employeeToEdit: null,
        };
    },

    [Types.FETCH_EMPLOYEE_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: null,
            employee: null,
            employeeToEdit: action.employee,
        };
    },

    [Types.FETCH_EMPLOYEE_FAILURE]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error,
            employee: null,
            employeeToEdit: null,
        };
    },

    // Update an user
    [Types.UPDATE_EMPLOYEE]: (state, action) => {
        return {
            ...state,
            loading : true,
            error: null,
            employee: null,
            employeeUpdated: null,
        };
    },

    [Types.UPDATE_EMPLOYEE_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            employee: action.employee,
            error: null,
            employeeUpdated: null,
        };
    },

    [Types.UPDATE_EMPLOYEE_FAILURE]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error,
            employee: null,
            employeeUpdated: null,
        };
    },

    // Delete an existing user
    [Types.DELETE_EMPLOYEE]: (state) => {
        return {
            ...state,
            loading: true,
            employeeDeleted: null,
        };
    },

    [Types.DELETE_EMPLOYEE_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            employeeDeleted: true,
        };
    },

    [Types.DELETE_EMPLOYEE_FAILURE]: (state, action) => {
        return {
            ...state,
            loading: false,
            employeeDeleted: null,
            error: action.error,
        };
    },
});
