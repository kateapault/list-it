import React from 'react';
import Toggle from './Toggle'

const AlphabetOptionsBar = props => {

    return(
        <div className="options-bar">
            <div>Options:</div>
            <Toggle label="Exclude 'J', 'Q', 'X', 'Z'" id="one"/>
            <Toggle label="Weight by letter frequency" id="two"/>
        </div>
    )
};

export default AlphabetOptionsBar;