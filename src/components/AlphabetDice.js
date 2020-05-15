import React from 'react'

class AlphabetDice extends React.Component{
    state = {
        letter: 'A',
        clickEffectActive: false,
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