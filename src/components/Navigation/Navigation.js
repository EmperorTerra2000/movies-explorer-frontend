import './Navigation.css';
import { Link, Route, Switch, NavLink } from 'react-router-dom';

function Navigation({ onNavMenu, isOpen, locationPath, onClose }) {
  let selectorNavigation = 'navigation';
  let selectorContent = 'navigation__content';
  let selectorListLinks = 'navigation__list-links';
  let selectorItemLink = 'navigation__item-link';
  let selectorLinkElement = 'navigation__link-element hover hover_type_link';
  let selectorAccount = 'navigation__account hover hover_type_link';
  let selectorBurger = 'burger';
  let selectorClose = 'close hover hover_type_button';
  const selectorSignin = 'navigation__signin hover hover_type_button';

  if (locationPath !== '/') {
    selectorNavigation += ' navigation_type_burger';
    selectorContent += ' navigation__content_type_burger';
    selectorListLinks += ' navigation__list-links_type_burger navigation__list-links_margin_right';
    selectorItemLink += ' navigation__item-link_type_burger';
    selectorLinkElement +=
      ' navigation__link-element_type_burger navigation__link-element_colors_black';
    selectorBurger += ' burger_active';
    selectorClose += ' close_active';
  }

  if (isOpen) selectorNavigation += ' navigation_active';

  return (
    <>
      <nav className={selectorNavigation}>
        <div className={selectorContent}>
          <Switch>
            <Route exact path="/">
              <ul className={selectorListLinks}>
                <li className={selectorItemLink}>
                  <Link to="/signup" className={selectorLinkElement}>
                    Регистрация
                  </Link>
                </li>
              </ul>
              <Link to="/signin" className={selectorSignin}>
                Войти
              </Link>
            </Route>
            <Route exact path={['/movies', '/saved-movies', '/profile']}>
              <div className={selectorClose} onClick={onClose}></div>
              <ul className={selectorListLinks}>
                {isOpen && (
                  <li className={selectorItemLink}>
                    <NavLink
                      to="/"
                      exact
                      className={selectorLinkElement}
                      activeClassName="navigation__link-element_active"
                      onClick={onClose}>
                      Главная
                    </NavLink>
                  </li>
                )}
                <li className={selectorItemLink}>
                  <NavLink
                    to="/movies"
                    className={selectorLinkElement}
                    activeClassName="navigation__link-element_active"
                    onClick={onClose}>
                    Фильмы
                  </NavLink>
                </li>
                <li className={selectorItemLink}>
                  <NavLink
                    to="/saved-movies"
                    className={selectorLinkElement}
                    activeClassName="navigation__link-element_active"
                    onClick={onClose}>
                    Сохранённые фильмы
                  </NavLink>
                </li>
              </ul>
              <Link to="/profile" className={selectorAccount} onClick={onClose}>
                Аккаунт
              </Link>
            </Route>
          </Switch>
        </div>
      </nav>
      <div className={selectorBurger} onClick={onNavMenu}></div>
    </>
  );
}

export default Navigation;
