import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

import * as reducers from "./reducers";

export const store = createStore(
  combineReducers({
    ...reducers
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
  applyMiddleware(thunk)
);

