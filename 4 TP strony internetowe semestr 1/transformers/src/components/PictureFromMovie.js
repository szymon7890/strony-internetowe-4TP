import React from 'react';
import './PictureFromMovie.css';

const PictureFromMovie = () => {
    return (
        <section id="pictureFromMovie" className="hidden">
            <div id="descriptionPicture">
                <p>Zdjęcia z filmu</p>
            </div>
            <div className="grid-item-picture">
                <img src="../assets/images/grid1.jpg" alt="Cars" />
            </div>
            <div className="grid-item-picture">
                <img src="../assets/images/grid2.jpg" alt="Sam and Optimus Prime" />
            </div>
            <div className="grid-item-picture">
                <img src="../assets/images/grid3.jpg" alt="Sam" />
            </div>
        </section>
    );
};

export default PictureFromMovie;
