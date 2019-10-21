import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";

import partsReducer from "./reducers";
import partsSaga from "./sagas/partsSagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(partsReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(partsSaga);
export default store;