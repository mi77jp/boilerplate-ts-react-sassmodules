import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {reducer, State} from './states/states';

export type AppState = {
  state: State
};

const store = createStore(
  combineReducers<AppState>({
    state: reducer
  }),
  applyMiddleware(logger)
);

export default store;
