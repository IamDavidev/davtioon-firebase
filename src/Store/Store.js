import AuthReducer from '../Utils/AuthReducer';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

const reduccer = combineReducers({
  auth: AuthReducer,
});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reduccer,
  composeEnhancers(applyMiddleware(thunk))
);
