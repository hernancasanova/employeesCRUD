import { takeLatest, put, call, select } from 'redux-saga/effects';
import EmployeeActions, { EmployeeTypes } from '../Redux/EmployeeRedux';

/**
 * Get the entuty account transactions
 * @param Api    api
 * @param Action action
 */
export function * getEmployees(api, action) {
    console.log('action:' ,action)
    try {
        const response = yield call(api.getEmployeeCollection);
        if (!response.ok) {
            throw new Error(`Error getting users`);
        }
        console.log("Data: ",response);
        yield put(EmployeeActions.fetchEmployeesSuccess(response.data.data.employees));
    } catch (e) {
        yield put(EmployeeActions.fetchEmployeesFailure('Something went wrong when getting transactions.'));
    }
}

export function * createEmployee(api, action) {
    const { first_name, last_name, email, position, address } = action;

    try {
        const response = yield call(api.postEmployeeCollection, first_name, last_name, email, position, address);

        if (!response.ok) {
            throw new Error('Error creating user');
        }

        yield put(EmployeeActions.createEmployeeSuccess(response.data.data.employee));
    } catch (e) {
        yield put(EmployeeActions.createEmployeeFailure(e.message));
    }
}

export function * getEmployee(api, action) {
    try {
        const response = yield call(api.getEmployeeResource, action.employee_id);
        if (!response.ok) {
            throw new Error(`Error getting users`);
        }

        yield put(EmployeeActions.fetchEmployeeSuccess(response.data.data.employee));
    } catch (e) {
        yield put(EmployeeActions.fetchEmployeeFailure('Something went wrong when getting user.'));
    }
}

export function * updateEmployee(api, action) {
    const { employee_id, first_name, last_name, email, position, address } = action;

    try {
        const response = yield call(api.patchEmployeeResource, employee_id, first_name, last_name, email, position, address);

        if (!response.ok) {
            throw new Error('Error updating user');
        }

        yield put(EmployeeActions.updateEmployeeSuccess(response.data.data.employee));
    } catch (e) {
        yield put(EmployeeActions.updateEmployeeFailure(e.message));
    }
}

export function * deleteEmployee(api, action) {
    try {
        const response = yield call(api.deleteEmployeeResource, action.employee_id);
        if (!response.ok) {
            throw new Error(`Error getting users`);
        }

        yield put(EmployeeActions.deleteEmployeeSuccess(response.data.data.employee));
    } catch (e) {
        yield put(EmployeeActions.deleteEmployeeFailure('Something went wrong when getting user.'));
    }
}

export function * watchEmployees(api) {
    yield takeLatest(EmployeeTypes.FETCH_EMPLOYEES, getEmployees, api);
    yield takeLatest(EmployeeTypes.CREATE_EMPLOYEE, createEmployee, api);
    yield takeLatest(EmployeeTypes.FETCH_EMPLOYEE, getEmployee, api);
    yield takeLatest(EmployeeTypes.UPDATE_EMPLOYEE, updateEmployee, api);
    yield takeLatest(EmployeeTypes.DELETE_EMPLOYEE, deleteEmployee, api);
}
