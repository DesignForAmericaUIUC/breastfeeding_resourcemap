import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

// import monitorReducersEnhancer from "./enhancers/monitorReducers";
// import loggerMiddleware from "./middleware/logger";
import rootReducer from "./rootReducer";

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware]; // loggerMiddleware
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer]; // monitorReducersEnhancer
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
