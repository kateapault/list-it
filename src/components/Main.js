import React from 'react';

import AlphabetDicePage from './AlphabetDicePage';

class Main extends React.Component {
    render(){
        switch (this.props.page) {
            case 'roll-letter':
                return(
                    <AlphabetDicePage />
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