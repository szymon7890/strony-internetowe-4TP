import React from 'react';
import './Header.css'; // Importuj plik CSS

const Header = () => {
    return (
        <header id="header" className="header">
            <div id="navbar">
                <button className="menu-btn" aria-label="Otwórz menu">☰</button>
                <img id="logo" src="./assets/images/TransformersLogo.jpg" alt="logo Transformers" />
                <div className="nav-links" id="nav-links">
                    <a href="#header">Strona Główna</a>
                    <a href="#trailer" className="headerAnchor">Zwiastun</a>
                    <a href="#plot" className="headerAnchor">Fabuła</a>
                    <a href="#pictureFromMovie" className="headerAnchor">Zdjęcia</a>
                    <a href="#filmingLocation" className="headerAnchor">Miejsce kręcenia</a>
                    <a href="#footer">Kontakt</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
