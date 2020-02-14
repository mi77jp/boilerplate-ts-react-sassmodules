import React, { useState } from 'react';

const styles = require('./index.scss');

const Button = () => {
  const [count, setCount] = useState(100);

  return (
    <div>
      <p>{count}</p>
      <button
        className={ styles.button }
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Button;
