import React from 'react'
import classes from './EditButton.module.css'

const EditButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.editButton}>
        {children}
    </button>
  )
}

export default EditButton