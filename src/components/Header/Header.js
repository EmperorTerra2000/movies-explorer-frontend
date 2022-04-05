import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';

function Header({ onNavMenu, isOpen, onClose }) {
  const location = useLocation();
  const selectorsHeader = location.pathname !== '/' ? 'header header_type_bg-inherit' : 'header';

  return (
    <header className={selectorsHeader}>
      <div className="header__content spacing spacing_type_header-and-footer">
        <Logo />
        <Navigation
          onNavMenu={onNavMenu}
          isOpen={isOpen}
          onClose={onClose}
          locationPath={location.pathname}
        />
      </div>
    </header>
  );
}

export default Header;
