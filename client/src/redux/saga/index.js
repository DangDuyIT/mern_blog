import { call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostSaga(action) {
  const post = yield call(api.fetchPost);
  console.log("[post]", post);
}

function* mySaga() {
  yield takeLatest(actions.getPost.getPostRequest, fetchPostSaga);
}

//generator
export default mySaga;
