import './NavTab.css';

function NavTab() {
  return (
    <section className="nav-tab">
      <nav className="nav-tab__content spacing">
        <a href="#aboutProject" className="nav-tab__link hover hover_type_link">
          О проекте
        </a>
        <a href="#techs" className="nav-tab__link hover hover_type_link">
          Технологии
        </a>
        <a href="#aboutMe" className="nav-tab__link hover hover_type_link">
          Студент
        </a>
      </nav>
    </section>
  );
}

export default NavTab;
