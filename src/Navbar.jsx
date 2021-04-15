import React from 'react'
import '../src/css/navbar.css';

const Navbar = () => {
    return (
    
           <nav className="navbar navbar-expand-md sticky-top navbar-dark menu">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo01" > 
                <div className="navbar-nav text-center ms-auto">
                    <a className="nav-item nav-link"  aria-current="page" href="#">Home</a>
                    <a className="nav-item nav-link" dropdown-toggle href="#aboutMe">About</a>
                    <a className="nav-item nav-link" href="#Tech">Tech-Stack</a>
                    <a className="nav-item nav-link" href="#proyects">Projects</a>
                    <a className="nav-item nav-link" href="#contact" >Contact</a>
                </div>
            </div>
            
            </nav> 
       
    )
}



export default Navbar
