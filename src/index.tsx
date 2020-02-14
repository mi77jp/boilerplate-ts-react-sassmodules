import "core-js";
import "regenerator-runtime/runtime";
import React, { useState, useEffect, useGlobal } from 'reactn';
import * as ReactDOM from "react-dom";
import axios from 'axios';
import { csv2json } from './util/csv2json';
//import App from './app';

const QAS_URL = "./data.csv";
const App: any = () => {

  const [qas, setQas] = useState({});
  useEffect( () => {
    axios.get(QAS_URL).then((res: any) => {
      setQas( csv2json(res.data) );
      setTitle('done');
    });
  }, [setQas]);

  const [title, setTitle] = useGlobal<any>('page');
  useEffect(() => {
    if (title) {
      document.title = `App "${ title }"`;
    } else {
      document.title = 'App';
    }
  }, [title]);

  const renderQa = Object.values(qas).map( (qa: any) => {
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
