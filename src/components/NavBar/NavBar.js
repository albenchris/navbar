import { Link } from 'react-router-dom';

import { screenSize } from '../../utils/sizes';
import DesktopLinks from './menus/DesktopLinks';
import MobileLinks from './menus/MobileLinks';
import './navbar.css';

const NavBar = () => {
    // console.log(window);
    const {
        mobile,
        tablet,
        laptop,
        desktop
    } = screenSize;

    const mediaWidth = window.innerWidth;

    const NavLinks = () => {
        if (mediaWidth < tablet) return <MobileLinks/>;

        // switch (mediaWidth) {
        //     case mediaWidth <= mobile:
        //         console.log(`media: ${mediaWidth} < mobile: ${mobile}`);
        //         return <MobileLinks />;

        //     case mediaWidth <= tablet && mediaWidth > mobile:
        //         console.log(`media: ${mediaWidth} < tablet: ${tablet}`);
        //         return <MobileLinks />;

        //     case mediaWidth <= laptop && mediaWidth > tablet:
        //         console.log(`media: ${mediaWidth} < laptop: ${laptop}`);
        //         return <DesktopLinks />;

        //     default:
        //         console.log(`media: ${mediaWidth} < desktop: ${desktop}`);
        //         return <DesktopLinks />;
        // }
    }

    const subscribe = () => {
        console.log('You have subscribed!');
    }

    return (
        <nav>
            <h1>NAVIGATIOn</h1>

            {NavLinks()}

            <div>
                <button onClick={subscribe}>Subscribe</button>
            </div>
        </nav>
    );
}

export default NavBar;