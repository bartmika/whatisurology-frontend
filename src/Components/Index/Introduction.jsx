import React from "react";
// import { Link } from "react-router-dom";
import YoutubeEmbed from "../YoutubeEmbed";


function Introduction() {
    return (
        <>
            <div className="w3-row">
                <div className="w3-col l3 w3-container">
                    {/* Safari fix */}<span className="w3-hide-small w3-hide-medium">&nbsp;</span>
                </div>
                <div className="w3-col l6 w3-container">
                    <div className="w3-white w3-border w3-border-grey w3-round-xlarge w3-margin">
                        <div className="w3-container w3-padding">
                            {/* https://www.youtube.com/playlist?list=PLxY-SR74mq6F4128UaMhNk0gH8dtcP0Ql */}
                            <h1 className="w3-text-blue">What is Urology?</h1>

                            <h3>01 INTRODUCTION</h3>
                            <YoutubeEmbed embedId="cEMcnE3MQ6w" />
                            <br />

                            <h3>02 BLEND OF SURGERY AND MEDICINE</h3>
                            <YoutubeEmbed embedId="4_XMrQi1nAY" />
                            <br />

                            <h3>03 - What Is Urology - TECHNOLOGY</h3>
                            <YoutubeEmbed embedId="e_zszjLYO_I" />
                            <br />

                            <h3>04 - What Is Urology - SCOPE OF UROLOGY</h3>
                            <YoutubeEmbed embedId="aWCNQzUhbWQ" />
                            <br />

                            <h3>05 - What Is Urology - UROLOGY ELECTIVES FOR EVERYONE</h3>
                            <YoutubeEmbed embedId="ClcuM0vWWbY" />
                            <br />

                            <h3>06 - What Is Urology - ADVICE</h3>
                            <YoutubeEmbed embedId="NrSXyocjw64" />
                            <br />

                            <h3>07 - What Is Urology - GETTING EXPOSURE</h3>
                            <YoutubeEmbed embedId="vyhkozYlI5E" />
                            <br />

                            <h3>08 - What Is Urology - TYPICAL DAY OF THE RESIDENT</h3>
                            <YoutubeEmbed embedId="AE2UDNktKos" />
                            <br />

                            <h3>09 - What Is Urology - JOB SATISFACTION</h3>
                            <YoutubeEmbed embedId="YGNPHbvkQx0" />
                            <br />

                            <h3>10 - What Is Urology - LIFESTYLE OF A UROLOGIST</h3>
                            <YoutubeEmbed embedId="3nXGodYAbAI" />
                            <br />

                            <h3>11 - What Is Urology - RESEARCH</h3>
                            <YoutubeEmbed embedId="f5ZsF14ZM6w" />
                            <br />

                            <h3>12 - What Is Urology - UROLOGICAL PERSONALITY</h3>
                            <YoutubeEmbed embedId="lQNSL-Im8Ac" />
                            <br />
                        </div>
                    </div>
                </div>
                <div className="w3-col l3 w3-container">
                </div>
            </div>
        </>
    );
}

export default Introduction;
