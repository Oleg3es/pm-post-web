import React from 'react'
import classes from './BurgerButton.module.css'

const BurgerButton = ({onClick}) => {
    return (
        <div onClick={onClick} className={classes.burgerButton}>
            <span />
        </div>
    )
}

export default BurgerButton