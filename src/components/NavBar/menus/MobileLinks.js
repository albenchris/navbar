import { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileLinks = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menu =
        <>
            <ul className='mobile-links'>
                <li><Link>Our mission</Link></li>
                <li><Link>Who we help</Link></li>
                <li><Link>Get involved</Link></li>
                <li><Link>Contact</Link></li>
            </ul>

            <button
            // onClick={subscribe}
            >Subscribe</button>
        </>


    return (
        <>
            <div
                className='burger'
            // className={menuOpen ? 'burger open' : 'burger closed'}
            // onClick={setMenuOpen(!menuOpen)}
            >
                <div className='line-one'></div>
                <div className='line-two'></div>
                <div className='line-three'></div>
            </div>

            {menuOpen &&
                menu
            }
        </>
    );
};

export default MobileLinks;