import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { actions } from './actions';

export interface State {
  value: string;
  questions: any;
}

const initialState: State = {
  value: '',
  questions: []
};

export const reducer = reducerWithInitialState(initialState)
  .case(actions.updateValue, (state, value) => {
    return Object.assign({}, state, {value});
  })
  .case(actions.fetchQuestions, (state, questions) => {
    return Object.assign({}, state, {questions});
  });
