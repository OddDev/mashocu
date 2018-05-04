import React, { Component } from 'react'
import './ModifierIndicator.css'
import { Modifier } from '../modifier/Modifier';

export class ModifierIndicator extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        // Review - Avoid things bloating the state object like this example?
        window.addEventListener('keydown', event => this.setState({ [event.key]: true }))
        window.addEventListener('keyup', event => this.setState({ [event.key]: false }))
    }

    render() {
        return (
            <div className="modifier-container">
                <Modifier isPressed={this.state.Alt} label="⌥ Option"></Modifier>
                <Modifier isPressed={this.state.Control} label="˄ Control">˄ Control</Modifier>
                <Modifier isPressed={this.state.Meta} label="⌘ Command"></Modifier>
            </div>
        )
    }
}