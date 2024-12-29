import React from 'react'
import classes from './InputSelection.module.css'

const InputSelection = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} className={classes.inputSelection} {...props} />
  )
});

export default InputSelection