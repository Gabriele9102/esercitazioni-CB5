import './header.scss';


const img = "./src/assets/fire.png"

export const Header = () => {

    const menuEls = [
        { ref: 'Home', href: '#home'}, 
        { ref: 'Info', href: '#info'}, 
        { ref: 'Contact us', href: '#contact_us'}
    ];

    return <header className="Headers">
        <div className="containerH">
            
                <div className="logo"><img src={img} alt="img" /></div>
                    <nav className="nav">
                        <ul className="menu">
                            {
                                menuEls.map(function (menuEl) {

                                    return (
                                        <li className="menuEl">
                                            <a href={menuEl.href}>{menuEl.ref}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
    </header>
}