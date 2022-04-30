import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/index";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { wsUrl } from "../utils/socket";
import { wsActions, wsUserActions } from "../services/actions/wsActions"


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(wsUrl, wsActions),
    socketMiddleware(wsUrl, wsUserActions)
  )
);

export const store = createStore(rootReducer, enhancer);
