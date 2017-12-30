import React from 'react'

import '../App.css'



export default class Projects extends React.Component{

    render(){
        return (
            <div>
                <div className="project-wrapper">
                    <h1 className='body_head'>Projects</h1>
                    <p className='about-spacing'>A collection of projects combining multiple of the above technologies</p>
                </div>
                <div className="project-body">
                    <div className="project-img">
                        <div className="ball-up">
                            <h2 className='about-spacing alignment'>Ball Up</h2>
                        </div>
                        <div className="roofstops">
                            <h2 className="about-spacing alignment">roofstops</h2>
                        </div>
                        <div className="reddit-clone">
                            <h2 className="about-spacing alignment">reddit clone</h2>
                        </div>
                        <div className="shoe-locator">
                            <h2 className="about-spacing alignment">shoe locator</h2>
                        </div>
                    </div>
                    <div className="project-desc">
                        <div className="desc">
                            <h4>Description</h4>
                            <p>Mobile App created to allow users to search for nearest basketball courts and create a pick up game event</p>
                            <h4>Technologies</h4>
                            <p><em>React-Native, Heroku, Express, Postgresql, NodeJS, JavaScript, Expo</em></p>
                        </div>
                        <div className="desc">
                        <h4>Description</h4>
                            <p>Allows user to search RoofTop bars within Denver, CO</p>
                            <h4>Technologies</h4>
                            <p><em>React-Native, Heroku, Express, Postgresql, NodeJS, JavaScript, CSS, Expo</em></p>
                        </div>
                        <div className="desc">
                        <h4>Description</h4>
                            <p>CRUD app allows user to create account and post questions to database</p>
                            <h4>Technologies</h4>
                            <p><em>HandleBars, Heroku, Express, Postgresql, NodeJS, JavaScript, CSS</em></p>
                        </div>
                        <div className="desc">
                        <h4>Description</h4>
                            <p>Allows user to locate top 20 shoe store within 20 mile radius. Generates a map of location.</p>
                            <h4>Technologies</h4>
                            <p><em> NodeJS, JavaScript, Firebase, Google Places API, Google Directions API, MapBox, CSS</em></p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}