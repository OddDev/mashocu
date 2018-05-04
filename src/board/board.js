import React, { Component } from 'react'
import { ShortcutLearner } from '../shortcut-learner/ShortcutLearner';
import { ModifierIndicator } from '../modifier-indicator/ModifierIndicator';
import LessonsAPI from '../api';

// TODO '~' doesn't work yet

export class Board extends Component {
    constructor(props) {
        super(props)
        // Determining the very first character information to use as a start
        const startCharacterTuple = LessonsAPI.get(parseInt(this.props.match.params.index, 10))
        this.state = {
            currentCharacter: startCharacterTuple[0],
            currentShortcut: startCharacterTuple[1],
        }
    }

    updateBoard() {
        // Review - Is routing actually done like that? 
        // If yes, why does the component not update after calling this? The constructor seems not to be called again. (*1
        // If no, how's it supposed to be done?
        this.props.history.push(`/practice/${parseInt(this.props.match.params.index, 10) + 1}`)
        // Review - *1) If that is the common case, is it correct to handle the state like shown here or is this commonly done in a lifecycle method? And if yes, which one? 
        const nextCharacterTuple = LessonsAPI.get(parseInt(this.props.match.params.index, 10))
        this.setState({
            currentCharacter: nextCharacterTuple[0],
            currentShortcut: nextCharacterTuple[1],
        })
    }

    render() {
        return (
            <div>
                <ShortcutLearner targetCharacter={this.state.currentCharacter} targetShortcut={this.state.currentShortcut} onSuccess={this.updateBoard.bind(this)}></ShortcutLearner>
                <ModifierIndicator></ModifierIndicator>
            </div>
        )
    }
}