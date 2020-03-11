import { select, race, fork, take, takeLatest, put, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import StartupActions, {StartupTypes} from '../Redux/StartupRedux';

export function * init() {
    console.debug('init');
    const isAuthenticated = yield select((state) => {
        console.log('state', state)
        return state.auth.isAuthenticated
    });

    if (!isAuthenticated){
        localStorage.clear();
        console.log("go to /login");
    }
    else{
        console.log("go to /");
    }

    yield put(StartupActions.initSuccess());
}

export function * watchInit() {
    yield takeLatest(StartupTypes.INIT, init);
}
