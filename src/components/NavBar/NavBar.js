import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    const subscribe = () => {
        console.log('You have subscribed!');
    }

    return (
        <nav>
            <h1>NAVIGATIOn</h1>

            <ul className='nav-links'>
                <li><Link>Our mission</Link></li>
                <li><Link>Who we help</Link></li>
                <li><Link>Get involved</Link></li>
                <li><Link>Contact</Link></li>
            </ul>

            <div>
                <button onClick={subscribe}>Subscribe</button>
            </div>
        </nav>
    );
}

export default NavBar;