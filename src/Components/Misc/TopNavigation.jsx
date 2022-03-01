import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTabIndex } from 'react-tabindex';

function TopNavigation() {
    const tabIndex = useTabIndex();
    const [showMenu, setShowMenu] = useState(false);

    function onHamburgerClick() {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <div className={`w3-indigo w3-top`} style={{height:"70px",}}>
                {showMenu && <div className="w3-sidebar w3-bar-block  w3-card w3-animate-right" style={{width:"200px",right:"0"}}>
                    <button onClick={onHamburgerClick}
                          className="w3-bar-item w3-large"
                           tabIndex={tabIndex}>Close &times;</button>

                   <Link to="/introduction" className="w3-bar-item w3-button w3-text-black" tabIndex={tabIndex} onClick={onHamburgerClick}>
                       <i className="fa fa-video-camera" aria-hidden="true"></i>&nbsp;Introduction
                   </Link>
                   <Link to="/training" className="w3-bar-item w3-button w3-text-black" tabIndex={tabIndex} onClick={onHamburgerClick}>
                       <i className="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp;Training
                   </Link>
                   <Link to="/about" className="w3-bar-item w3-button w3-text-black" tabIndex={tabIndex} onClick={onHamburgerClick}>
                       <i className="fa fa-user-circle-o" aria-hidden="true"></i>&nbsp;About
                   </Link>
                </div>}

                <div className="w3-bar w3-xxlarge">
                    <Link to={"/"}
                   className="w3-bar-item"
                       style={{textDecoration:"none"}}
                    tabIndex={tabIndex}>
                        <div className="w3-hide-small">
                             <i className="fa fa-medkit" aria-hidden="true"></i>
                            &nbsp;What is Urology?
                        </div>
                    </Link>
                    <button onClick={onHamburgerClick}
                          className="w3-bar-item w3-button w3-right"
                           disabled={showMenu}
                           tabIndex={tabIndex}>&#9776;</button>
                </div>
            </div>
        </>
    );
}

export default TopNavigation;
