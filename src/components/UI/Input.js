import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* Using the spread operator I make sure that any other key value pair I receive in this input object are added as props to input. For eg: if I have {type: 'text'}, the spread operator adds the type prop to the input*/}
    </div>
  );
});

export default Input;
