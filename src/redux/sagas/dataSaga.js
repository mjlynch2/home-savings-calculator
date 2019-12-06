import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* setValues(action) {
    try {
        yield axios.post('/api/amounts', action.payload)
        yield getAmount();
    } catch (error) {
        console.log('Error in post', error);
    }
}

function* getAmount() {
    try {
        const response = yield axios.get('/api/amounts');
        yield put({type: 'SET_AMOUNT', payload: response.data})
    } catch (error) {
        console.log('Error in get', error);
    }
}

function* dataSaga() {
  yield takeLatest("SET_VALUES", setValues);
  yield takeLatest("GET_AMOUNT", getAmount);
}

export default dataSaga;