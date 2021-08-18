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

    const subscribe = () => {
        console.log('You have subscribed!');
    }

    const showWindow = () => {
        console.log(window);
    }

    const NavLinks = () => {
        if (mediaWidth <= tablet) return <MobileLinks showWindow={showWindow} subscribe={subscribe} />;
        if (mediaWidth > tablet) return <DesktopLinks showWindow={showWindow} subscribe={subscribe} />;

        // =================== THIS DOESN'T WORK PROPERLY (will revisit) ============================
        // switch (mediaWidth) {
        //     case mediaWidth >= mobile: return <MobileLinks />;
        //     case mediaWidth >= tablet && mediaWidth < laptop: return <MobileLinks />;
        //     case mediaWidth >= laptop && mediaWidth > desktop: return <DesktopLinks />;
        //     default: return <MobileLinks />;
        // }
        // ==========================================================================================
    }

    return (
        <nav>
            <h1>NAVIGATIOn</h1>

            <NavLinks />

        </nav>
    );
}

export default NavBar;