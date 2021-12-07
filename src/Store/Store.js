import AuthReducer from '../Reduccers/AuthReducer';
import { combineReducers, compose, createStore } from 'redux';

const reduccer = combineReducers({
  auth: AuthReducer,
});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reduccer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
