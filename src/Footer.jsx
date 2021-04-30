import React from 'react'
import '../src/css/footer.css';

const Footer = () => {
    return (
    
        <footer className="footer container">
            <div className="row align-items-start">
                <div className="col-sm-1 col-md-4">
                    <a className="item"  aria-current="page" href="#">Home</a>
                </div>
                <div className="col-sm-8 col-md-4">
                    <a className="item"  href="#aboutMe">Full Stack Developer: Marigen Rivero</a>
                </div>
                <div className="col-sm-2 col-md-4">
                    <a className="item" href="https://www.linkedin.com/in/riveromj/"><i className="fab fa-linkedin-in"/></a>
                    <a className="item" href="https://github.com/riveromj"><i className="fab fa-github"/></a>
                </div>     
            </div>
        </footer>
          
       
    )
}



export default Footer