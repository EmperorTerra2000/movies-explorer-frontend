import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h3 className="not-found__title">404</h3>
        <p className="not-found__text">Страница не найдена</p>
        <Link to="/" className="not-found__to-main">
          Назад
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
