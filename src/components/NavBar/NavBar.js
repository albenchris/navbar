import { useState } from 'react';
import { Link } from 'react-router-dom';
import { screenSize } from '../../utils/sizes';
import './navbar.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const subscribe = () => {
        console.log('You have subscribed!');
    }

    const showWindow = () => {
        console.log(window);
    }

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav>
            <h1>NAVIGATIOn</h1>

            <ul className='links mobile-hide'>
                <li><Link>Our mission</Link></li>
                <li><Link>Who we help</Link></li>
                <li><Link>Get involved</Link></li>
                <li><Link>Contact</Link></li>
            </ul>

            <div className='buttons mobile-hide'>
                <button
                    onClick={subscribe}
                >
                    Subscribe
                </button>

                <button
                    onClick={showWindow}
                >
                    Show window
                </button>
            </div>

            <div
                className={menuOpen ? 'burger open' : 'burger'}
                onClick={toggleMenu}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}

export default NavBar;