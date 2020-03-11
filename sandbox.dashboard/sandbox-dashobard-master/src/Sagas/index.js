import { fork } from 'redux-saga/effects'
import { watchUsers } from './UserSagas';
import { watchEmployees } from './EmployeeSagas';
import API from '../Services/Api'

const api = API.create(process.env.REACT_APP_API_URL);

export default function * root () {
    yield fork(watchUsers, api);
    yield fork(watchEmployees, api);
}
