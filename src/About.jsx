import React from 'react'
import '../src/css/about.css';

const About = () => {
    return (
        <div className="about-content">
            <a name="aboutMe"></a>
            <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <img className="card-img-top" src="https://res.cloudinary.com/dp1f6cr63/image/upload/v1617448439/perfil_wnqbir.jpg" alt="My-profile"/>
                <div className="card-body">
                    <h3 className="card-text">Let's get in touch</h3>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/riveromj/"><i className="fab fa-linkedin-in"/></a>
                        <a href="https://github.com/riveromj"><i className="fab fa-github"/></a>
                        <a><i className="far fa-envelope"/></a>
                </div>
                </div>
            </div>
            <div className="about col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                
                <h2 className="title">About Me!</h2>
                <p className="text1">I graduated from the Andres Bello Catholic University of Caracas-Venezuela. I am a computer engineer. I am constantly learning, I like challenges. I like to work in a team and share ideas and knowledge.I am committed and innovative.</p>
                <p className="text1">The power of imagination is infinite and unlimited, when we imagine we generate ideas, we create and find solutions. It is a unique experience. When we achieve something that seemed impossible.</p>
                <p className="text1">My passion for technology is enjoying the creation of each project, meeting and working with great people. New experiences excite me and I feel happy when I achieve my goals.</p>
                <div className="cv">
                   <a href='https://drive.google.com/file/d/1CC4NUTMG8D2wEbfKIFWKCnBJ8OzKQzA2/view?usp=sharing'  target="_blank"><button type="button" className="btn btn-cv">Download CV</button></a> 
                </div>
                
            </div>
        </div>
    )
}



export default About
