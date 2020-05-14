import React from 'react'

class AlphabetDice extends React.Component{
    state = {
        letter: 'A',
    }

    rollDie = () => {
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        this.setState({letter: alphabet[Math.floor(Math.random()*26)]})
    }
    render(){
        return (
            <div onClick={this.rollDie} className="dice">
                <div className="hexagon-front"/>
                <div className="letter hexagon-middle">{this.state.letter}</div>
                <div className="hexagon-back"/>
            </div>
        )
    }
};

export default AlphabetDice;