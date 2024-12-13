import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import {
  fetchOrders,
  fetchOrdersSuccess,
  fetchOrdersFail,
  createOrder,
  createOrderSuccess,
  createOrderFail,
} from "./index";
import { fetchAllOrders, createNewOrder } from "api/order"; 

function* handleFetchOrders() {
  yield takeLatest(fetchOrders.type, function* () {
    try {
      const response = yield call(fetchAllOrders); 
      yield put(fetchOrdersSuccess(response.data));
    } catch (error) {
      yield put(fetchOrdersFail(error.response?.data || error.message));
    }
  });
}

function* handleCreateOrder() {
  yield takeLatest(createOrder.type, function* ({ payload }) {
    try {
      const response = yield call(createNewOrder, payload);
      yield put(createOrderSuccess(response.data));
    } catch (error) {
      yield put(createOrderFail(error.response?.data || error.message));
    }
  });
}

export default function* orderSaga() {
  yield all([fork(handleFetchOrders), fork(handleCreateOrder)]);
}
