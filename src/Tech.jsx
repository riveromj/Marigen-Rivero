import React from 'react'

import '../src/css/tech.css';


export const Tech = () => {
    return (
        <div>
            <div className="tecnologies">
            <a name="Tech"></a>
            <h2 className="title">Tech-Stack</h2>
            <div className="container">
				<div className="row first-line d-flex justify-content-sm-center justify" id="tecno">

                    <div className="tecno col-12 col-12-l col-md-10 col-sm-10">
                        <i className="fab fa-react tech"></i>
                        <i className="fab fa-js tech"></i>
                        <i className="fab fa-python tech"></i>
                   
                        <i className="fab fa-html5 tech"></i>
                        <i className="fab fa-css3-alt tech"></i>
                        <i className="fab fa-bootstrap tech"></i>
                   
                        <i className="fab fa-github-square tech"></i>
                        <i className="fab fa-trello tech"></i>
                        <i className="fab fa-figma tech"></i>
                    </div>
                   
                </div>
            </div>    
            </div>
        </div>
    )
}
