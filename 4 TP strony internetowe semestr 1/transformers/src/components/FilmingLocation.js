import React from 'react';
import './FilmingLocation.css';

const FilmingLocation = () => {
    return (
        <section id="filmingLocation" className="hidden">
            <div id="country">
                <p>Miejsce kręcenia</p>
            </div>
            <div className="background-container-country">
                <div className="text-container-movie">
                    <p>MIEJSCE KRĘCENIA</p>
                    <p>Film kręcono w:</p>
                    <ul>
                      <li>Backlot (Universal Studios, Universal City, Kalifornia, USA),</li>
                      <li>Bostonie (Massachusetts, USA),</li>
                      <li>Broadwayu i 8 ulicy (Downtown, Los Angeles, Kalifornia, USA),</li>
                      <li>Detroit (Michigan, USA),</li>
                      <li>Bazie Sił Powietrznych Edwards (Kalifornia, USA),</li>
                      <li>Suchym Jeziorze El Mirage (San Bernardino County, Kalifornia, USA),</li>
                      <li>Bazie Sił Powietrznych Holloman (Alamogordo, Nowy Meksyk, USA),</li>
                      <li>Hoover Dam (na granicy Arizony i Nevady, USA),</li>
                      <li>Bazie Sił Powietrznych Kirtland (Albuquerque, Nowy Meksyk, USA),</li>
                      <li>Los Angeles (Kalifornia, USA),</li>
                      <li>Rialto (autostrada stanowa Route 210, Kalifornia, USA),</li>
                      <li>USS Shoup (San Diego, Kalifornia, USA),</li>
                      <li>Parku Narodowym Valley of Fire (Overton, Nevada, USA),</li>
                      <li>Waszyngtonie (USA),</li>
                      <li>White Sands Missile Range (niedaleko Alamogordo, Nowy Meksyk, USA).</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FilmingLocation;