import React from 'react'
import PostFilter from '../../PostFilter'
import classes from './Sidebar.module.css'
import mainLogo from '../../../img/RM_logo 1.png'

const Sidebar = ({ filter, setFilter, active, setActive }) => {

    const rootClasses = [classes.sidebar]
    if (active) {
        rootClasses.push(classes.active)
    }
    console.log(rootClasses)

    return (
        <div className={rootClasses.join(' ')} onClick={() => setActive(false)}>
            <div onClick={(e) => e.stopPropagation()}>
                <div className={classes.sidebarContainer}>
                    <div className={classes.sidebarCloseButtonWrapper}>
                        <div className={classes.sidebarCloseButton} onClick={() => setActive(false)}></div>
                    </div>
                    <div className={classes.sidebarLogo}>
                        <img src={mainLogo} alt="logo" width={120} height={39} loading='lazy'/>
                    </div>
                    <div className={classes.sidebarInputWrapper}>
                        <PostFilter
                            filter={filter}
                            setFilter={setFilter}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar