import React from 'react'
import classes from './MySelect.module.css'

const MySelect = ({ option, defaultValue, value, onChange }) => {
  return (
    <div className={classes.selectWrapper}>
      <select
        name=""
        id=""
        value={value}
        onChange={event => onChange(event.target.value)}>
        <option disabled value="">{defaultValue}</option>
        {option.map(option =>
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        )}
      </select>
      <div className={classes.selectArrow}></div>
    </div>
  )
}

export default MySelect