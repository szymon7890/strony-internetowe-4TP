import React from 'react';
import './Hero.css';
import backgroundImage from '../assets/images/transformersBackgound.jpg'; // Import obrazka

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* Treść sekcji hero */}
        </section>
    );
};

export default Hero;
