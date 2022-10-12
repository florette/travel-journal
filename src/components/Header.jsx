import logo from "../assets/logo.svg";

function Header() {
    return (
        <header className="header">
            <img src={logo} className="site-logo" alt="logo" />
        </header>
    );
}

export default Header;
