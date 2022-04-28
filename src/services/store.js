import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/index";
import { socketMiddleware } from "../services/middleware/socketMiddleware";
import { wsUrl, wsActions, wsUserActions } from "../utils/socket";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(wsUrl, wsActions),
    socketMiddleware(wsUrl, wsUserActions)
  )
);

export const store = createStore(rootReducer, enhancer);
