import React from 'react'
import './input.css'
export default function Input(props) {
    let inputElement = null
    let classes = "input input-element"
    if (props.config.error && props.config.error === true) {
        classes += " error"
    }
    if (props.elementType === "input") {
        inputElement = <input className={classes} {...props.config} onBlur={props.onInputBlur} onChange={props.onInputChange} />
    } else if (props.elementType === "textarea") {
        inputElement = <textarea className="input input-element" {...props.config} onChange={props.onInputChange} />
    } else if (props.elementType === "select") {
        inputElement = <select {...props.config} onChange={props.onInputChange}>
            {props.config.options.map((option, id) => {
                return (<option key={id} value={option}>{option}</option>)
            })}
        </select>
    }


    return (
        <div>
            <label className="Label">{props.config.label}</label>
            {inputElement}
        </div>
    )
}
