import React from 'react'
import "./Field.css"
function Field(props) {
    return (
        <div className='field'>
            <div className="field-icon">
            <i className={props.icon_class}></i>
            </div>
            <h2>{props.title}</h2>
            <div className="field-text">
                <p>{props.text}</p>
            </div>
        </div>)
}

export default Field
