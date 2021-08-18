import { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileLinks = ({ showWindow, subscribe }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menu = (
        <>
            <ul className='links'>
                <li><Link>Our mission</Link></li>
                <li><Link>Who we help</Link></li>
                <li><Link>Get involved</Link></li>
                <li><Link>Contact</Link></li>
            </ul>

            <div className='buttons'>
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
        </>
    );

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <div
                // className='burger'
                className={menuOpen ? 'burger open' : 'burger closed'}
                onClick={toggleMenu}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* {menuOpen && menu} */}
        </>
    );
};

export default MobileLinks;