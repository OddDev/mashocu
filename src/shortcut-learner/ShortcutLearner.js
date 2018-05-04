import React, { Component } from 'react'
import './ShortcutLearner.css'

export class ShortcutLearner extends Component {

    componentDidMount() {
        // Review - are global events (like key pressing in this case) applied like that?
        window.addEventListener('keyup', keyEvent => {
            if (keyEvent.key === this.props.targetCharacter) {
                this.props.onSuccess()
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.props.targetCharacter}</h1>
                <h2>{this.props.targetShortcut.join(' + ')}</h2>
            </div>
        )
    }
}