import { find, assign, get } from 'lodash';
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    fetchUsers: null,
    fetchUsersSuccess: ['users'],
    fetchUsersFailure: ['error'],

    createUser: ['name', 'email', 'password'],
    createUserSuccess: ['user'],
    createUserFailure: ['error'],

    fetchUser: ['user_id'],
    fetchUserSuccess: ['user'],
    fetchUserFailure: ['error'],

    updateUser: ['user_id', 'name', 'email', 'password'],
    updateUserSuccess: ['user'],
    updateUserFailure: ['error'],

    deleteUser: ['user_id'],
    deleteUserSuccess: null,
    deleteUserFailure: ['error'],
});


export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    loading: false,
    error: null,
    users: [],
    user: null,
    userToEdit: null,
    userUpdated: null,
    userDeleted: null,
})

const resetState = () => INITIAL_STATE;

export const reducer = createReducer(INITIAL_STATE, {

    // Fetch users actions
    [Types.FETCH_USERS]: (state) => {
        return {
            ...state,
            loading: true,
            error: null,
            user: null,
            userToEdit: null,
        };
    },

    [Types.FETCH_USERS_SUCCESS]: (state, action) => {
        return {
            ...state,
            users: action.users,
            loading: false,
            error: null,
            user: null,
            userToEdit: null,
        };
    },

    [Types.FETCH_USERS_FAILURE]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error,
            user: null,
            userToEdit: null,
        };
    },

    // Create an user
    [Types.CREATE_USER]: (state, action) => {
        return {
            ...state,
            loading : true,
            error: null,
            user: null,
            userToEdit: null,
        };
    },

    [Types.CREATE_USER_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            user: action.user,
            error: null,
            userToEdit: null,
        };
    },

    [Types.CREATE_USER_FAILURE]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error,
            user: null,
            userToEdit: null,
        };
    },

    // Fetch a single user
    [Types.FETCH_USER]: (state) => {
        return {
            ...state,
            loading: true,
            error: null,
            user: null,
            userToEdit: null,
        };
    },

    [Types.FETCH_USER_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: null,
            user: null,
            userToEdit: action.user,
        };
    },

    [Types.FETCH_USER_FAILURE]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error,
            user: null,
            userToEdit: null,
        };
    },

    // Update an user
    [Types.UPDATE_USER]: (state, action) => {
        return {
            ...state,
            loading : true,
            error: null,
            user: null,
            userUpdated: null,
        };
    },

    [Types.UPDATE_USER_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            user: action.user,
            error: null,
            userUpdated: null,
        };
    },

    [Types.UPDATE_USER_FAILURE]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error,
            user: null,
            userUpdated: null,
        };
    },

    // Delete an existing user
    [Types.DELETE_USER]: (state) => {
        return {
            ...state,
            loading: true,
            userDeleted: null,
        };
    },

    [Types.DELETE_USER_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            userDeleted: true,
        };
    },

    [Types.DELETE_USER_FAILURE]: (state, action) => {
        return {
            ...state,
            loading: false,
            userDeleted: null,
            error: action.error,
        };
    },
});
