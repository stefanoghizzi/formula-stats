import './Header.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.svg';
import helmet from '../../assets/helmet.svg';

function Header() {
    return (
        <header className="header dflex-jcsb-aic bg-black padding-s">
            <div className="dflex-jcc-aic">
                <img className="logo" src={logo} alt="Formula stats logo" />
                <span className="title color-white exo-extrabold margin-s">
                    Formula Stats
                </span>
            </div>
            <div className="dflex-jcc-aic">
                <img
                    className="helmet margin-m"
                    src={helmet}
                    alt="Formula stats logo"
                />
                <img className="menu" src={menu} alt="Formula stats logo" />
            </div>
        </header>
    );
}

export default Header;
