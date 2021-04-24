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
                <p className="text1">I have a degree in software engineering. Since I started my career my goal always has been keeping my skills and knowledge up to date, while I enjoy working with people sharing ideas and knowledge, in order to understand their needs, and being able to satisfied their expectations.</p>
                <p className="text1">I am committed and innovative person. So, new opportunities exited me, I enjoy the creative process, using my unlimited imagination, generating infinitive ideas looking for alternative solutions. It is a unique experience when I achieve to the best way something that seemed impossible.</p>
                <p className="text1">My passion for technology is how it simplify life in everyday tasks, so my goal as a professional is optimising processes and procedures for whoever I worked for.</p>
                <div className="cv">
                   <a href='https://drive.google.com/file/d/1CC4NUTMG8D2wEbfKIFWKCnBJ8OzKQzA2/view?usp=sharing'  target="_blank"><button type="button" className="btn btn-cv">Download CV</button></a> 
                </div>
                
            </div>
        </div>
    )
}



export default About
