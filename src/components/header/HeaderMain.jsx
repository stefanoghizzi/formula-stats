import './HeaderMain.css';

function HeaderMain() {
    const menuItems = ['Home', 'Calendar', 'Circuits', 'Drivers', 'About'];
    const listmenuItems = menuItems.map((element) => (
        <span className="pt-m pb-xs">{element}</span>
    ));

    return (
        <div className="header-main dflex-fdc roboto-regular color-white font-l">
            {listmenuItems}
        </div>
    );
}

export default HeaderMain;
