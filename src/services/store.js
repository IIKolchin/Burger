import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/index";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, routerMiddleware(history))
);

export const store = createStore(rootReducer(history), enhancer);
