import * as React from 'react';
import { Actions } from '../../containers/stage';
import { State } from '../../states/states';

type Props = State & Actions;

export const InputComponent: React.SFC<Props> = (props: Props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="value"
        value={props.value}
        onChange={(e) => props.updateValue(e.target.value)}/>
    </div>
  );
};
