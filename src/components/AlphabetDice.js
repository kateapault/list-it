import React from 'react'

class AlphabetDice extends React.Component{
    state = {
        letter: 'A',
        clickEffectActive: false,
    }

    loadingA = () => {
        this.setState({ letter: '+'})
    }

    loadingB = () => {
        this.setState({letter: 'x'})
    }

    depressButtonEffect = () => {
        this.setState({
            letter: '--',
            clickEffectActive: true
        })
    }

    buttonReleaseEffect = () => {
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        this.setState({
            letter: alphabet[Math.floor(Math.random()*26)],
            clickEffectActive: false
        })
    }

    rollDie = () => {
        this.depressButtonEffect()
        setTimeout(this.buttonReleaseEffect,750)
    }

    render(){

        let diceClass
        if (this.state.clickEffectActive) {
            diceClass = "dice-active"
        } else {
            diceClass = "dice"
        }

        return (
            <div onClick={this.rollDie} className={diceClass}>
                <div className="hexagon-front"/>
                <div className="letter hexagon-middle">{this.state.letter}</div>
                <div className="hexagon-back"/>
            </div>
        )
    }
};

export default AlphabetDice;