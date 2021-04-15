import React, {useEffect} from 'react';

import Typed from 'typed.js';

import '../src/css/home.css';

import About from './About';
import { Contact } from './Contact';
import Navbar from './Navbar';
import { Projects } from './Projects';
import { Tech } from './Tech';

export const Home = () => {

    const greetings= '<Hello World/>'

    useEffect(() => {
        new Typed('.typed',{
            strings: ['Team Work','Create Solutions','to learn new technologies','to share ideas','to travel','to dance'],
        
            //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
            typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
            startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
            backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
            smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
            shuffle: false, // Alterar el orden en el que escribe las palabras.
            backDelay: 3000, // Tiempo de espera despues de que termina de escribir una palabra.
            loop: true, // Repetir el array de strings
            loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
           // showCursor: false, // Mostrar cursor palpitanto
            //cursorChar: '|', // Caracter para el cursor
            contentType: 'html', // 'html' o 'null' para texto sin formato
        });
    
    }, [])
    return (
        <div>
            <div className="content-fluid">
                <Navbar/>
                <div className="d">
                    <div className="hello">
                        <p>{greetings}</p>
                        <span className='my-name'>I'm </span> <span className="name">Marigen Rivero.</span>
                        <br/> <span  className='my-name'>Full-Stack Developer.</span>
                        <br/>
                        <span className="my-name">I like <span className="typed text"></span></span>
                    </div>
                </div>
                <About/>
                <Tech/>
                <Projects/>
                <Contact/>
            
            </div>
        </div>
    )
}
