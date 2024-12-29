import React from 'react'

const MySelect = ({option, defaultValue, value, onChange}) => {
  return (
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
  )
}

export default MySelect