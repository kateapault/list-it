import React from 'react';

const Toggle = props => {
    return(
        <div className="toggle">
            <div className="toggle-label">{props.label}</div>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
        </div>
    )
};

export default Toggle;