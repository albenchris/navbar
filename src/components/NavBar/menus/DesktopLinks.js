import { Link } from 'react-router-dom';

const DesktopLinks = () => {
    return (
        <ul className='desktop-links'>
            <li><Link>Our mission</Link></li>
            <li><Link>Who we help</Link></li>
            <li><Link>Get involved</Link></li>
            <li><Link>Contact</Link></li>
        </ul>
    );
};

export default DesktopLinks;