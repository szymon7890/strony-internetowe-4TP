import React from 'react';
import './Trailer.css';
import OptimusPrime from '../assets/images/OptimusPrime.png'; // Poprawiona nazwa zmiennej
import Megatron from '../assets/images/megatron.jpg'; // Poprawiona nazwa zmiennej

const Trailer = () => {
    return (
        <section id="trailer" className="trailer">
            <div id="trailerName">
                <p>Zwiastun filmu</p>
            </div>
            <div className="grid-item">
                <img src={OptimusPrime} alt="Optimus Prime" />
            </div>
            <div className="grid-item">
                <iframe 
                    src="https://www.youtube.com/embed/v8ItGrI-Ou0" 
                    title="transformers trailer" 
                    frameBorder="0" 
                    allowFullScreen
                ></iframe>
            </div>
            <div className="grid-item">
                <img src={Megatron} alt="Megatron" />
            </div>
        </section>
    );
};

export default Trailer;
