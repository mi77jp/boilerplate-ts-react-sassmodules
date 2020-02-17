import React, { useGlobal } from 'reactn';
import classNames from 'classnames';
const styles = require('./index.scss');

export interface QuestionProps {
  show: number;
}

export const Question: React.FC<QuestionProps> = props => {
  const [qaList] = useGlobal<any>();
  const question = qaList[props.show];

  const wrapperClassNames: any = classNames(
    styles.question,
    styles.active
  );

  return (
    <div className={ wrapperClassNames }>
      { console.log(question) }
      <h4>{ props.show }番目の質問</h4>
      <p>{ question }</p>
    </div>
  );
};
