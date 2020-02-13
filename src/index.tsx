import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";

import Stage from "./components/stage/";
const styles = require('./styles/global.scss');

ReactDOM.render(
  <div className={ styles.global } >
    <Stage name="Max" />
  </div>,
  document.getElementById("app"),
);
