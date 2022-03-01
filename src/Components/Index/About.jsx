import React from "react";
// import { Link } from "react-router-dom";


function About() {
    return (
        <>
            <div className="w3-row">
                <div className="w3-col l3 w3-container">
                    {/* Safari fix */}<span className="w3-hide-small w3-hide-medium">&nbsp;</span>
                </div>
                <div className="w3-col l6 w3-container">
                    <div className="w3-white w3-border w3-border-grey w3-round-xlarge w3-margin">
                        <div className="w3-container w3-padding">
                            <h1 className="w3-text-blue">About</h1>

                        </div>
                    </div>
                </div>
                <div className="w3-col l3 w3-container">
                </div>
            </div>
        </>
    );
}

export default About;
