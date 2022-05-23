import React from 'react';
import { useLocation, Route } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {
  const location = useLocation();
  const likeRef = React.useRef();

  let cardId; // идентификатор карточки, сохраненная на нашем сервере
  let isLiked = false;

  if (location.pathname === '/movies') {
    isLiked = props.savedCards.some((item) => {
      if (item.movieId === props.card.id) {
        cardId = item._id;
        return true;
      }
    });
  }

  const selectorsCardLike = isLiked
    ? 'movies-card__like hover hover_type_button movies-card__like_active'
    : 'movies-card__like hover hover_type_button';

  const urlImage =
    location.pathname !== '/saved-movies'
      ? `https://api.nomoreparties.co/${props.card.image.url}`
      : props.card.image;

  const handleDelete = () => {
    props.onCardDelete(props.card._id);
  };

  const handleLiked = () => {
    if (likeRef.current.classList.contains('movies-card__like_active')) {
      props.onCardDelete(cardId);
    } else {
      props.onCardLike(props.card);
    }

    likeRef.current.classList.toggle('movies-card__like_active');
  };

  return (
    <article className="movies-card">
      <div className="movies-card__item">
        <div className="movies-card__text">
          <a
            rel="noreferrer"
            target="_blank"
            className="movies-card__link"
            href={props.card.trailerLink}>
            <h2 className="movies-card__title">{props.card.nameRU}</h2>
            <p className="movies-card__duration">{props.card.duration} мин</p>
          </a>
        </div>
        <Route path="/movies">
          <button ref={likeRef} className={selectorsCardLike} onClick={handleLiked} />
        </Route>
        <Route path="/saved-movies">
          <button className="movies-card__delete hover hover_type_button" onClick={handleDelete} />
        </Route>
      </div>
      <a rel="noreferrer" target="_blank" href={props.card.trailerLink}>
        <img className="movies-card__image" src={urlImage} alt="баннер фильма" />
      </a>
    </article>
  );
}

export default MoviesCard;
