import React from 'react';
import Toggle from './Toggle'

const AlphabetOptionsBar = props => {

    return(
        <div className="options-bar">
            <div>Options:</div>
            <Toggle label="Weight by letter frequency"/>
        </div>
    )
};

export default AlphabetOptionsBar;