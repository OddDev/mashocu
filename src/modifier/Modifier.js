import React from 'react'
import './Modifier.css'

export const Modifier = props => (
    <div className={`modifier ${props.isPressed ? 'active' : 'inactive'}`}>
        {props.label}
    </div>
)
