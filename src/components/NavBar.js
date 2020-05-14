import React from 'react';

function NavBar(props) {

    return(
        <div className="nav-bar">
            <div className="nav-button" onClick={()=>props.changePage('roll-letter')}><div>Roll Letter</div></div>
            <div className="nav-button" onClick={()=>props.changePage('downloads')}><div>Downloads</div></div>
            <div className="nav-button" onClick={()=>props.changePage('play-online')}>Play Along Online</div>
            <div className="nav-button" onClick={()=>props.changePage('coming-soon')}>Coming Soon</div>
        </div>
    )
};

export default NavBar;