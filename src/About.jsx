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
                <p className="text1">I have a degree in software engineering. Since I started my career, my goal has always been to keep my skills and knowledge up to date while I enjoy working with people, sharing ideas and knowledge in order to understand their needs and be able to meet their expectations.</p>
                <p className="text1">I am a committed and innovative person. New opportunities excite me, I enjoy the creative process and using my unlimited imagination to generate infinite ideas when looking for alternative solutions. It is a unique experience when I come up with the best way to do something that seemed impossible.</p>
                <p className="text1">My passion for technology is how to simplify life in everyday tasks. That is why my goal as a professional is to optimise processes and procedures for whoever I work for.</p>
                <div className="cv">
                   <a href='https://drive.google.com/file/d/1CC4NUTMG8D2wEbfKIFWKCnBJ8OzKQzA2/view?usp=sharing'  target="_blank"><button type="button" className="btn btn-cv">Download CV</button></a> 
                </div>
                
            </div>
        </div>
    )
}



export default About
