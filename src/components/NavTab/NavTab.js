import './NavTab.css';

function NavTab() {
  return (
    <div className="nav-tab">
      <nav className="nav-tab__content">
        <a href="#aboutProject" className="nav-tab__link hover hover_type_button">
          О проекте
        </a>
        <a href="#techs" className="nav-tab__link hover hover_type_button">
          Технологии
        </a>
        <a href="#aboutMe" className="nav-tab__link hover hover_type_button">
          Студент
        </a>
      </nav>
    </div>
  );
}

export default NavTab;
