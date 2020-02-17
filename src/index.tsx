import "core-js";
import "regenerator-runtime/runtime";
import React, { useState, useEffect, useGlobal } from 'reactn';
import * as ReactDOM from "react-dom";
import axios from 'axios';
import { csv2json } from './util/csv2json';
import { Question } from './components/question';
const styles = require('./styles/app.scss');

const Q_URL = "./data/q.csv";

const App: any = () => {

  const [qaList, setQaList] = useGlobal<any>();
  const [initialized, setInitialized] = useState<any>(false);

  useEffect(() => {
    if ( initialized ) {
      document.title = `initialized`;
    }
  }, [initialized]);

  // load data
  useEffect( () => {
    axios.get(Q_URL).then((res: any) => {
      setQaList( csv2json(res.data) );
      setInitialized(true);
    });
  }, [qaList]);


  const renderQ = Object.values(qaList).map( (q: any, index: number) => {
    if (index === 0) return null;
    return (
      <li key={q}>
        { q[2] }
      </li>
    );
  });

  const showNumber = 1;

  return (
    <div className={ styles.app }>
      <h5>Questions</h5>
      <ul>
        { renderQ }
      </ul>
      <hr />
      <Question show={showNumber} />
    </div>
  );
};

//////

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("app") as HTMLElement
);
