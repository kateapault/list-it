import React from 'react';

import NavBar from './NavBar'

function Header(props) {
    return(
        <div className="header">
            <div className="site-title">List-It</div>
            {/* <NavBar changePage={props.changePage}/> */}
            <div className="disclaimer"><div className="rotated">definitely not scattergories</div></div>
        </div>
    )
};

export default Header;