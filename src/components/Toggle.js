import React from 'react';

const Toggle = props => {
    return(
        <div className="toggle">
            <div className="toggle-label">{props.label}</div>
            <input type="checkbox" className="hide-me" id={props.id}/>
            <label className="switch" for={props.id}>
                <div className="slider"></div>
            </label>
        </div>
    )
};

export default Toggle;