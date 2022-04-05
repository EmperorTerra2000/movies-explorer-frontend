import './AboutMe.css';
import nameCardAvatar from '../../images/name-card-avatar.jpg';
import ElementTitle from '../ElementTitle/ElementTitle';
import NameCard from '../NameCard/NameCard';

function AboutMe() {
  return (
    <section id="aboutMe" className="about-me">
      <div className="about-me__content spacing">
        <ElementTitle titleText="Студент" />
        <NameCard
          data={{
            name: 'Виталий',
            duty: 'Фронтенд-разработчик, 30 лет',
            description: `Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.`,
            avatar: nameCardAvatar,
            fbLink: 'https://facebook.com',
            gitLink: 'https://github.com',
          }}
        />
      </div>
    </section>
  );
}

export default AboutMe;
