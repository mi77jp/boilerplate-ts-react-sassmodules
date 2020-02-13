import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const actions = {
  updateValue: actionCreator<string>('ACTIONS_UPDATE_VALUE')
};
