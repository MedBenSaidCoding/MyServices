import { all, fork } from "redux-saga/effects";
import offersSaga from "./offersSaga";
import professionalsSaga from "./professionalsSaga";

export function* rootSaga() {
  yield all([fork(offersSaga)]);
  yield all([fork(professionalsSaga)]);
}
