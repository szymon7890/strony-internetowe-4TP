import React from 'react';
import './Footer.css';
/*
import facebook-icon from '../assets/images/icons/facebook-icon.png'; // Poprawiona nazwa zmiennej
import twitter-icon from '../assets/images/icons/twitter-icon.png'; // Poprawiona nazwa zmiennej
import instagram-icon from '../assets/images/icons/instagram-icon.png'; // Poprawiona nazwa zmiennej
import youtube-icon from '../assets/images/icons/youtube-icon.png'; // Poprawiona nazwa zmiennej
*/
const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src="../assets/images/TransformersLogo.jpg" alt="Transformers Logo" />
                </div>
                <div className="footer-contact">
                    <p>&copy; 2024 Reklama Filmu Transformers. Wszelkie prawa zastrzeżone.</p>
                    <p>Kontakt: <a href="mailto:info@transformersmovie.com">info@transformersmovie.com</a></p>
                    <p>Telefon: +48 123 456 789</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="/kontakt">Kontakt</a></li>
                        <li><a href="/polityka-prywatnosci">Polityka prywatności</a></li>
                        <li><a href="/regulamin">Regulamin</a></li>
                        <li><a href="/o-nas">O nas</a></li>
                    </ul>
                </div>
                <div className="footer-social-media">
                    <a href="https://www.facebook.com/transformers" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><img src="../assets/images/icons/facebook-icon.png" alt="Facebook" /></a>
                    <a href="https://twitter.com/transformers" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><img src="../assets/images/icons/twitter-icon.png" alt="Twitter" /></a>
                    <a href="https://www.instagram.com/transformersofficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src="../assets/images/icons/instagram-icon.png" alt="Instagram" /></a>
                    <a href="https://www.youtube.com/@TransformersOfficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><img src="../assets/images/icons/youtube-icon.png" alt="YouTube" /></a>
                </div>
                <div className="footer-newsletter">
                    <form action="/subscribe" method="post">
                        <label htmlFor="newsletter-email">Subskrybuj nasz newsletter:</label>
                        <input type="email" id="newsletter-email" name="email" placeholder="Twój e-mail" required />
                        <button type="submit">Subskrybuj</button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
