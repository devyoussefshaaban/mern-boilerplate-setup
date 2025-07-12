import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";
import commonReducer from "./reducers/commonReducer";

// Root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
});

// Redux DevTools setup
const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Store creation
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk as any))
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
