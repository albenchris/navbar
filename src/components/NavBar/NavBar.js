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
        if (mediaWidth <= tablet) return <MobileLinks/>;
        if (mediaWidth > tablet) return <DesktopLinks />;

        // =================== THIS DOESN'T WORK PROPERLY (will revisit) ============================
        // switch (mediaWidth) {
        //     case mediaWidth >= mobile: return <MobileLinks />;
        //     case mediaWidth >= tablet && mediaWidth < laptop: return <MobileLinks />;
        //     case mediaWidth >= laptop && mediaWidth > desktop: return <DesktopLinks />;
        //     default: return <MobileLinks />;
        // }
        // ==========================================================================================
    }

    const subscribe = () => {
        console.log('You have subscribed!');
    }

    return (
        <nav>
            <h1>NAVIGATIOn</h1>

            {NavLinks()}

        </nav>
    );
}

export default NavBar;