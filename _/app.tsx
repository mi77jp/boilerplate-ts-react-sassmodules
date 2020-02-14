import * as React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Stage from './containers/stage';
import Button from './components/button';

const styles = require('./styles/app.scss');

export default class App extends React.Component {
  public render() {
    return (
      <div className={styles.app}>
        <HashRouter>
          <Switch>
            <Route path='/' exact>
              <Stage />
            </Route>
            <Route path='/result/:number'>
              <Button />
            </Route>
            <Redirect to={'/'} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
