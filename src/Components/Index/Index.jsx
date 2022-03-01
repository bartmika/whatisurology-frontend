import React from "react";
import { Link } from "react-router-dom";


function Index() {
    return (
        <>
            <div className="w3-row">
                <div className="w3-col l3 w3-container">
                    {/* Safari fix */}<span className="w3-hide-small w3-hide-medium">&nbsp;</span>
                </div>
                <div className="w3-col l6 w3-container">
                    <div className="w3-white w3-border w3-border-grey w3-round-xlarge w3-margin">
                        <div className="w3-container w3-padding">
                            <h1 className="w3-text-blue">Welcome</h1>
                            <p>Welcome to our app, select from the menu to navigate through the app.</p>
                            <p>To begin, please click from below:</p>
                            <p>

                            <Link className="w3-btn w3-blue w3-round-xlarge" to="/introduction">Introduction&nbsp;<i className="fa fa-chevron-right w3-tiny"></i></Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link className="w3-btn w3-green w3-round-xlarge" to="/training">Training&nbsp;<i className="fa fa-chevron-right w3-tiny"></i></Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w3-col l3 w3-container">
                </div>
            </div>
        </>
    );
}

export default Index;
