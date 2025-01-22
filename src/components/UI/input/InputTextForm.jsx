import React from 'react'
import classes from './InputTextForm.module.css'

const InputTextForm = React.forwardRef((props, ref) => {
    return (
      <textarea ref={ref} className={classes.inputTextForm} {...props} />
    )
  });

export default InputTextForm