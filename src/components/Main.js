import React from 'react';

import AlphabetDice from './AlphabetDice'

class Main extends React.Component {
    render(){
        switch (this.props.page) {
            case 'roll-letter':
                return(
                    <div className="main">
                        <div className="title">Click to roll</div>
                        <AlphabetDice />
                    </div>
                )
            case 'downloads':
                return(
                    <div className="main">
                        <div>(downloads) This page isn't done yet!</div>
                    </div>
                )
            case 'play-online':
                return(
                    <div className="main">
                        <div>(play online) This page isn't done yet!</div>
                    </div>
                )
            case 'coming-soon':
                return(
                    <div className="main">
                        <div>(coming soon) This page isn't done yet!</div>
                    </div>
                )
        }
    }
};

export default Main;