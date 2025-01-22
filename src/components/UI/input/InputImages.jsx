import React from 'react'
import { useId, useState } from 'react';
import classes from './InputImages.module.css'

const InputImages = React.forwardRef(({ setFiles, ...props }, ref) => {
    const id = useId();

    const [drag, setDrag] = useState(false)

    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler(e) {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        console.log(files)
        setDrag(false)
        setFiles([...files]);
    }

    return (
        <div className={classes.inputImages}>
            <label htmlFor={id}
                onDragStart={e => dragStartHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragOver={e => dragStartHandler(e)}
                onDrop={e => onDropHandler(e)}>
            </label>
            <input ref={ref} id={id} name="inputImages" {...props} />
        </div>
    )
})

export default InputImages