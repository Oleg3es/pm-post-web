import React from 'react'
import classes from './SaveButton.module.css'

const SaveButton = ({children, ...props}) => {
    return (
      <button {...props} className={classes.saveButton}>
        {children}
      </button>
    )
  }

export default SaveButton