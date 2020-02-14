//import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from 'typescript-fsa';
import { AppState } from '../../modules/store';
import { actions } from '../../modules/actions';
import { InputComponent } from '../../components/input';

//const styles = require('./index.scss');

export interface Actions {
  updateValue: (v: string) => Action<string>;
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.state);
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
  return {
    updateValue: (v: string) => dispatch(actions.updateValue(v)),
  };
}

/* todo
export default class Stage extends React.Component {
  componentDidMount () {
    //const { dispatch } = this.props;
    //dispatch( actions.fetchQuestions() )
  }
  render () {
    return (<InputComponent {...this.props} />);
  }
}*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputComponent);
