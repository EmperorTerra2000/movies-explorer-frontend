import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import imageCard from '../../images/image-card.jpg';

function MoviesCard() {
  const location = useLocation();
  const [isLiked, setLiked] = React.useState(false);

  const handleLiked = () => {
    setLiked(!isLiked);
  };

  const selectorsCardLike = isLiked
    ? 'movies-card__like movies-card__like_active hover hover_type_button'
    : 'movies-card__like hover hover_type_button';

  return (
    <article className="movies-card">
      <div className="movies-card__item">
        <div className="movies-card__text">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        {location.pathname === '/saved-movies' ? (
          <button className="movies-card__delete hover hover_type_button" />
        ) : (
          <button className={selectorsCardLike} onClick={handleLiked} />
        )}
      </div>
      <img className="movies-card__image" src={imageCard} alt="баннер фильма" />
    </article>
  );
}

export default MoviesCard;
