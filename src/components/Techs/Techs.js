import './Techs.css';
import ElementTitle from '../ElementTitle/ElementTitle';
import ElementTech from '../ElementTech/ElementTech';

function Techs({ namesTechElements }) {
  return (
    <section id="techs" className="techs">
      <div className="techs__content spacing">
        <ElementTitle titleText="Технологии" />
        <div className="techs__block-text">
          <h3 className="techs__title">7 технологий</h3>
          <p className="techs__text">
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
        </div>
        <div className="techs__list-elements">
          {namesTechElements.map((item, i) => (
            <ElementTech key={i} text={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Techs;
