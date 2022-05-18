import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({ onNavMenu, isOpen, onClose, loggedIn }) {
  return (
    <header className="header">
      <div className="header__content spacing spacing_type_header-and-footer">
        <Logo />
        <Navigation onNavMenu={onNavMenu} isOpen={isOpen} onClose={onClose} loggedIn={loggedIn} />
      </div>
    </header>
  );
}

export default Header;
