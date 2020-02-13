import * as React from 'react';
import Stage from './containers/stage';
import { HashRouter, Route, Switch } from 'react-router-dom';
//import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path='/' exact>
              <Stage />
            </Route>
            <Route path='/result'>
              ...Result
            </Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
