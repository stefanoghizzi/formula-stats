import './OuterNavbar.css';
import logo from '../../assets/library/logo.png';
import helmet from '../../assets/library/helmet.svg';
import menu from '../../assets/library/menu.svg';
import close from '../../assets/library/close.svg';

function OuterNavbar({ menuVisibility, setMenuVisibility }) {
    const menuIcon = menuVisibility ? menu : close;

    let handleClick = () => {
        setMenuVisibility(!menuVisibility);
    };

    return (
        <div className="outer-navbar dflex-jcsb-aic">
            <div className="dflex-jcc-aic">
                <img className="logo" src={logo} alt="Formula stats logo" />
                <span className="title color-white exo-extrabold ml-xs">
                    Formula Stats
                </span>
            </div>
            <div className="dflex-jcc-aic">
                <img className="helmet" src={helmet} alt="Formula stats logo" />
                <img
                    className="menu ml-s"
                    src={menuIcon}
                    alt="Formula stats logo"
                    onClick={handleClick}
                />
            </div>
        </div>
    );
}

export default OuterNavbar;
