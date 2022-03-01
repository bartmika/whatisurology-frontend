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

                            <strong>01 - What Is Urology - INTRODUCTION</strong>
                            <YoutubeEmbed embedId="cEMcnE3MQ6w" />

                            <strong>02 - What Is Urology - BLEND OF SURGERY AND MEDICINE</strong>
                            <YoutubeEmbed embedId="4_XMrQi1nAY" />

                            <strong>03 - What Is Urology - TECHNOLOGY</strong>
                            <YoutubeEmbed embedId="e_zszjLYO_I" />

                            <strong>04 - What Is Urology - SCOPE OF UROLOGY</strong>
                            <YoutubeEmbed embedId="aWCNQzUhbWQ" />

                            <strong>05 - What Is Urology - UROLOGY ELECTIVES FOR EVERYONE</strong>
                            <YoutubeEmbed embedId="ClcuM0vWWbY" />

                            <strong>06 - What Is Urology - ADVICE</strong>
                            <YoutubeEmbed embedId="NrSXyocjw64" />

                            <strong>07 - What Is Urology - GETTING EXPOSURE</strong>
                            <YoutubeEmbed embedId="vyhkozYlI5E" />

                            <strong>08 - What Is Urology - TYPICAL DAY OF THE RESIDENT</strong>
                            <YoutubeEmbed embedId="AE2UDNktKos" />

                            <strong>09 - What Is Urology - JOB SATISFACTION</strong>
                            <YoutubeEmbed embedId="YGNPHbvkQx0" />

                            <strong>10 - What Is Urology - LIFESTYLE OF A UROLOGIST</strong>
                            <YoutubeEmbed embedId="3nXGodYAbAI" />

                            <strong>11 - What Is Urology - RESEARCH</strong>
                            <YoutubeEmbed embedId="f5ZsF14ZM6w" />

                            <strong>12 - What Is Urology - UROLOGICAL PERSONALITY</strong>
                            <YoutubeEmbed embedId="lQNSL-Im8Ac" />
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
