import './InnerNavbar.css';

function InnerNavbar() {
    const menuItems = ['Home', 'Calendar', 'Circuits', 'Drivers', 'About'];
    const listmenuItems = menuItems.map((element) => (
        <span key={element} className="pt-m pb-xs">
            {element}
        </span>
    ));

    return (
        <div className="inner-navbar dflex-fdc roboto-regular color-white font-l">
            {listmenuItems}
        </div>
    );
}

export default InnerNavbar;
