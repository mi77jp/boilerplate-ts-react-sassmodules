import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider as ReduxProvider  } from 'react-redux';
import store from './modules/store';
import App from './app';

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("app") as HTMLElement
);
