import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__content spacing">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list-projects">
          <li className="portfolio__item-project">
            <a href="https://github.com" className="portfolio__link hover hover_type_link">
              Статичный сайт
            </a>
          </li>
          <li className="portfolio__item-project">
            <a href="https://github.com" className="portfolio__link hover hover_type_link">
              Адаптивный сайт
            </a>
          </li>
          <li className="portfolio__item-project">
            <a href="https://github.com" className="portfolio__link hover hover_type_link">
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
