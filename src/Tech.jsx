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
                        <i className="fab fa-react tech "><span className="subtitle">React</span></i>
                        <i className="fab fa-js tech"><span className="subtitle">JavaScript</span></i>
                        <i className="fab fa-python tech"><span className="subtitle">Python</span></i>
                        <i className="fab fa-angular tech"><span className="subtitle">Angular</span></i>
                        
                        
                   
                        <i className="fab fa-html5 tech"><span className="subtitle">HTML5</span></i>
                        <i className="fab fa-css3-alt tech"><span className="subtitle">CSS3</span></i>
                        <i className="fab fa-bootstrap tech"><span className="subtitle">Bootstrap</span></i>
                   
                        <i className="fab fa-github-square tech"><span className="subtitle">Github</span></i>
                        <i className="fab fa-trello tech"><span className="subtitle">Trello</span></i>
                        <i className="fab fa-figma tech"><span className="subtitle">Figma</span></i>
                        
                    </div>
                   
                </div>
            </div>    
            </div>
        </div>
    )
}
