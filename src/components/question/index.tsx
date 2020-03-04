import React, { useGlobal } from 'reactn';
import { useForm } from 'react-hook-form'
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

  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log('onSubmit: ' + data) }

  console.log(watch('example'));

  return (
    <div className={ wrapperClassNames }>
      {
        //console.log(question)
      }
      <h4>{ props.show }番目の質問</h4>
      <p>{ question }</p>

      <hr />

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          name="example"
          defaultValue=""
          ref={register} />
        <hr />

        <input
          name="exampleRequired"
          ref={register({ required: true })} />
        <hr />

        <input
          name="age"
          type="number"
          ref={register({ min: 18, max: 99 })} />
        <hr />

        <p >{errors.exampleRequired && <span>This field is required</span>}</p>
        <p >{errors.age             && <span>age must be number between 18 to 99.</span>}</p>

        <input type="submit" value="submit" />
       </form>
    </div>
  );
};
