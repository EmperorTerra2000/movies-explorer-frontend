import './AboutProject.css';
import ElementTitle from '../ElementTitle/ElementTitle';
import BlockText from '../BlockText/BLockText';

function AboutProject() {
  return (
    <section id="aboutProject" className="about-project">
      <div className="about-project__content spacing">
        <ElementTitle titleText="О проекте" />
        <div className="about-project__list-blocks">
          <BlockText
            data={{
              title: 'Дипломный проект включал 5 этапов',
              text: `Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
              доработки.`,
            }}
          />
          <BlockText
            data={{
              title: 'На выполнение диплома ушло 5 недель',
              text: `У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
              успешно защититься.`,
            }}
          />
        </div>
        <div className="about-project__block-progress">
          <div className="about-project__progress">
            <div className="about-project__deadline">1 неделя</div>
            <p className="about-project__text">Back-end</p>
          </div>
          <div className="about-project__progress">
            <div className="about-project__deadline">4 недели</div>
            <p className="about-project__text">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
