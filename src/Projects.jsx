import React from 'react'

import '../src/css/projects.css';


export const Projects = () => {
    return (
        <div>
             <div className="projects">
            <a name="proyects">
            <h2 className="title-p">Projects</h2></a>
            <p className="text-work">Look at the links</p>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card-p">
                        <a href="https://foodie-app-frontend-hfjkaebju-riveromj.vercel.app/" target="_blank">
                            <img src="https://res.cloudinary.com/dp1f6cr63/image/upload/v1618389713/Imagen_presentaci%C3%B3n_acpgla.jpg" className="card-img-project" alt="foodie"/>
                        </a>
                        <div className="card-body-p">
                            <h5 className="card-title">The Foodie Club</h5>
                            <p className="card-text-p">Application to share recipes</p>
                        </div>
                        </div>
                    </div>


                    <div className="col-lg-4">
                        <div className="card-p">
                            <a href="https://riveromj.github.io/Random_Card/" target="_blank">
                                <img src="https://res.cloudinary.com/dp1f6cr63/image/upload/v1618389692/random_card_2_els2at.png" className="card-img-project" alt="random-card"/>
                            </a>
                            <div className="card-body-p">
                                <h5 className="card-title">Random Card</h5>
                                <p className="card-text-p">Refresh the page to get a new card</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4">
                        <div className="card-p">
                            <a href="https://riveromj.github.io/Traffic/" target="_blank">
                                <img src="https://res.cloudinary.com/dp1f6cr63/image/upload/v1618396393/traffic_2_h3gmnv.png" className="card-img-project" alt="traffic"/>
                            </a>
                            <div className="card-body-p">
                                <h5 className="card-title">Traffic Light</h5>
                                <p className="card-text-p">Touch the light and change</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    )
}
