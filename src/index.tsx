import "core-js";
import "regenerator-runtime/runtime";
import React, { useState, useEffect, useGlobal } from 'reactn';
import * as ReactDOM from "react-dom";
import axios from 'axios';
import { csv2json } from './util/csv2json';
//import App from './app';

const Q_URL = "./data/q.csv";
//const A_URL = "./data/a.csv";
const App: any = () => {

  // load data
  const [qa, setQa] = useGlobal<any>();
  useEffect( () => {
    axios.get(Q_URL).then((res: any) => {
      setQa( csv2json(res.data) );
      setTitle('done');
    });
  }, []);

  const [title, setTitle] = useState<any>('page');
  useEffect(() => {
    if (title) {
      document.title = `App "${ title }"`;
    } else {
      document.title = 'App';
    }
  }, [title]);

  const renderQa = Object.values(qa).map( (qa: any) => {
    return (
      <li key={qa}>
        { console.log(qa) }
        { qa[2] }
      </li>
    );
  });

  return (
    <ul>
      { renderQa }
    </ul>
  );
};

//////

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("app") as HTMLElement
);
