import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from 'react-router-dom';

import Stage from "./components/stage/";
const styles = require('./styles/global.scss');

ReactDOM.render(
  <div className={ styles.global } >
    <HashRouter>
      <Switch>
        <Route path='/' exact>
          <Stage name="Home" />
        </Route>
        <Route path='/result'>
          <Stage name="Result" />
        </Route>
      </Switch>
    </HashRouter>
  </div>,
  document.getElementById("app"),
);
