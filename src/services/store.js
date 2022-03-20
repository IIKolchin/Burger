import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/index";
import { loadState, saveState } from "../utils/localStorage";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const persistedState = loadState();
export const store = createStore(rootReducer, persistedState, enhancer);



store.subscribe(() => {
  saveState(store.getState())
})




