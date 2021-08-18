import { Link } from 'react-router-dom';

const DesktopLinks = ({ showWindow, subscribe }) => {

    return (
        <>
            <ul className='desktop-links'>
                <li><Link>Our mission</Link></li>
                <li><Link>Who we help</Link></li>
                <li><Link>Get involved</Link></li>
                <li><Link>Contact</Link></li>
            </ul>

            <div>
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
};

export default DesktopLinks;