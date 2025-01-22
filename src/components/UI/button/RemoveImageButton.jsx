import React from 'react'
import classes from './RemoveImageButton.module.css'

const removeImageButton = ({ onRemove, index, ...props}) => {
  return (
    <button className={classes.removeButtonImage} {...props} onClick={() => onRemove(index)}>
      
    </button>
  )
}

export default removeImageButton