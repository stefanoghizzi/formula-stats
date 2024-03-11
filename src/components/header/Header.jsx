import './Header.css';
import { useState } from 'react';
import HeaderHead from './HeaderHead';
import HeaderMain from './HeaderMain';

function Header() {
    const [menuVisibility, setMenuVisibility] = useState('false');

    const headerClassName = `header ${
        menuVisibility ? 'closed' : 'opened'
    } bg-black p-s`;

    return (
        <header className={headerClassName}>
            <HeaderHead
                menuVisibility={menuVisibility}
                setMenuVisibility={setMenuVisibility}
            />
            <HeaderMain />
        </header>
    );
}

export default Header;
