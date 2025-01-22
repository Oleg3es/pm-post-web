import React from 'react'
import classes from './DeleteButton.module.css'

const DeleteButton = ({children, postToEdit, ...props}) => {

    const rootClasses = [classes.deleteButton]

    if (!postToEdit) {
        rootClasses.push(classes.disable)
    }

    return (
      <button  {...props} className={rootClasses.join(' ')}>
        {children}
      </button>
    )
  }

export default DeleteButton