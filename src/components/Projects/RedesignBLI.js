import React, { Component } from 'react';
import "../../css/Projects/shared.css";

class RedesignBLI extends Component {
    render() {
        return (
            <div>
                <div className="cover row justify-content-center">
                    <img className="coverImage" src="/images/project1-cover.png" />
                    <div className="col-4 vertical-center">
                        <h6 className="pink-text">PDIS</h6>
                        <h4>Redesign Website of Bureau of Labor Insurance</h4>
                        <h6 className="gray-text">
                            July 2020 - September 2020
                        </h6>
                    </div>
                </div>
                <div className="section">
                    In 10 weeks, we assisted the Bureau of Labor Insurance to redesign its website (e-service platform) based on users’ needs. As our design aims to provide adequate assistance when users encounter difficulties in different stages, our new design scored 85.94 in the final SUS usability testing, which was way higher than the original website’s score of 61.25.
                </div>
                <div className="section">
                    <h6>MY ROLE</h6>
                    <p>
                        Participant in both UX research and UI design                    
                    </p>
                </div>
                <div className="section">
                    <h6>METHOD & TOOL</h6>
                    <p>
                        Methods: User Research, Wireframe, Mockup, Prototype, Usability Testing
                        <br/>
                        Tools: Miro, Figma 
                    </p>
                </div>
                <div className="section">
                    <h6>PROCESS OVERVIEW</h6>
                    <img className="full-width-img" src="/images/Process1.png" />
                </div>
                <div className="section">
                    <h6>DESIGN PROCESS</h6>
                    <p className="bold-text">1. User Reasearch</p>
                    <p className="section-subtitle">Interview</p>
                    <div className="row">
                        <p className="col-6">
                            To find current users of the e-service platform of the Bureau of Labor Insurance, we released questionnaires asking about people’s experience of using the website. We later selected 5 users and conducted semi-structured interviews with them. To include thoughts from our stakeholders into the new design, we also arranged meetings with 4 staff working in the Information Technology Division of the Bureau of Labor Insurance.
                        </p>
                        <img className="full-width-img col-6" src="/images/Test.png" />
                    </div>
                    <p className="section-subtitle">Affinity Diagram</p>
                    <div className="row">
                        <p className="col-6">
                            After interviewing each user and stakeholders, we sorted more than 100 user quotes, derived 25 insights, and generated 3 personas.
                        </p>
                        <img className="full-width-img col-6" src="/images/AffinityDiagram.png" />
                    </div>
                    <p className="section-subtitle">User Types</p>
                    <p>
                        Based on whether these users are familiar with their goal on the website and their degree of attention they pay to their right of labor insurance, we made 3 personas corresponding to each group we want to target.
                    </p>
                    <img className="full-width-img" src="/images/UserVector.png" />
                </div>
            </div>
        )
    }
}

export default RedesignBLI;