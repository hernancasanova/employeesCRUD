import { takeLatest, put, call, select } from 'redux-saga/effects';
import UserActions, { UserTypes } from '../Redux/UserRedux';

/**
 * Get the entuty account transactions
 * @param Api    api
 * @param Action action
 */
export function * getUsers(api, action) {
    try {
        const response = yield call(api.getUserCollection);
        if (!response.ok) {
            throw new Error(`Error getting users`);
        }
        console.log("Data: ",response);
        yield put(UserActions.fetchUsersSuccess(response.data.data.users));
    } catch (e) {
        yield put(UserActions.fetchUsersFailure('Something went wrong when getting transactions.'));
    }
}

export function * createUser(api, action) {
    const { name, email, password } = action;

    try {
        const response = yield call(api.postUserCollection, name, email, password);

        if (!response.ok) {
            throw new Error('Error creating user');
        }

        yield put(UserActions.createUserSuccess(response.data.data.user));
    } catch (e) {
        yield put(UserActions.createUserFailure(e.message));
    }
}

export function * getUser(api, action) {
    try {
        const response = yield call(api.getUserResource, action.user_id);
        if (!response.ok) {
            throw new Error(`Error getting users`);
        }

        yield put(UserActions.fetchUserSuccess(response.data.data.user));
    } catch (e) {
        yield put(UserActions.fetchUserFailure('Something went wrong when getting user.'));
    }
}

export function * updateUser(api, action) {
    const { user_id, name, email, password } = action;

    try {
        const response = yield call(api.patchUserResource, user_id, name, email, password);

        if (!response.ok) {
            throw new Error('Error updating user');
        }

        yield put(UserActions.updateUserSuccess(response.data.data.user));
    } catch (e) {
        yield put(UserActions.updateUserFailure(e.message));
    }
}

export function * deleteUser(api, action) {
    try {
        const response = yield call(api.deleteUserResource, action.user_id);
        if (!response.ok) {
            throw new Error(`Error getting users`);
        }

        yield put(UserActions.deleteUserSuccess(response.data.data.user));
    } catch (e) {
        yield put(UserActions.deleteUserFailure('Something went wrong when getting user.'));
    }
}

export function * watchUsers(api) {
    yield takeLatest(UserTypes.FETCH_USERS, getUsers, api);
    yield takeLatest(UserTypes.CREATE_USER, createUser, api);
    yield takeLatest(UserTypes.FETCH_USER, getUser, api);
    yield takeLatest(UserTypes.UPDATE_USER, updateUser, api);
    yield takeLatest(UserTypes.DELETE_USER, deleteUser, api);
}
