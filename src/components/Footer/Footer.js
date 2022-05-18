import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content spacing spacing_type_header-and-footer">
        <p className="footer__organizations">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__block">
          <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
          <ul className="footer__list-contacts">
            <li className="footer__item-contact">
              <a
                href="https://practicum.yandex.ru/"
                className="footer__link-contact hover hover_type_link">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__item-contact">
              <a href="https://github.com" className="footer__link-contact hover hover_type_link">
                Github
              </a>
            </li>
            <li className="footer__item-contact">
              <a href="https://facebook.com" className="footer__link-contact hover hover_type_link">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
