import './Navbar.css';
import { useState } from 'react';
import OuterNavbar from './OuterNavbar';
import InnerNavbar from './InnerNavbar';

function Navbar() {
    const [menuVisibility, setMenuVisibility] = useState('false');

    const navbarClassName = `navbar ${
        menuVisibility ? 'closed' : 'opened'
    } bg-black p-s`;

    return (
        <header className={navbarClassName}>
            <OuterNavbar
                menuVisibility={menuVisibility}
                setMenuVisibility={setMenuVisibility}
            />
            <InnerNavbar />
        </header>
    );
}

export default Navbar;
