import React from 'react';

import AlphabetDice from './AlphabetDice'
import AlphabetOptionsBar from './AlphabetOptionsBar'

class AlphabetDicePage extends React.Component {
    state = {
        letter: 'A',
        clickEffectActive: false,
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
        return(
            <div className="main">
                <div className="top-row">
                    <div className="title left-column">Click to roll</div>
                    <div className="right-column"></div>
                </div>
                <div className="bottom-row">
                    <div className="left-column"><AlphabetDice /></div>
                    <div className="right-column"><AlphabetOptionsBar /></div>
                </div>
            </div>
        );
    }
};

export default AlphabetDicePage;