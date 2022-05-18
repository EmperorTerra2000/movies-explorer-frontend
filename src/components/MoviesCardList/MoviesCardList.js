import './MoviesCardList.css';

import React from 'react';
import { useLocation, Route } from 'react-router-dom';
import moviesSearch from '../../utils/MoviesSearch';

import FoundMoviesCards from '../FoundMoviesCards/FoundMoviesCards';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {
  const location = useLocation();
  // фильмы найденные по ключевому слову после сабмита поисковика
  const [foundListCardsMovies, setFoundListCardsMovies] = React.useState([]);
  const [foundListCardsSavedMovies, setFoundListCardsSavedMovies] = React.useState([]);

  React.useEffect(() => {
    let cards;
    setFoundListCardsSavedMovies(props.savedCardsMovies);
    // если в поисковике есть ключевое слово, то...
    if (props.valueForm) {
      if (location.pathname === '/movies') {
        // происходит логика поиска фильмов по ключевому слову, после найденные фильмы
        // присваиваются в переменную
        cards = moviesSearch(props.listCards, {
          filterForm: props.filterForm,
          valueForm: props.valueForm,
        });
        setFoundListCardsMovies(cards);
      } else if (location.pathname === '/saved-movies') {
        cards = moviesSearch(props.savedCardsMovies, {
          filterForm: props.filterForm,
          valueForm: props.valueForm,
        });
        setFoundListCardsSavedMovies(cards);
      }
    }
  }, [props.valueForm, props.listCards, props.savedCardsMovies, props.filterForm]);

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__content spacing spacing_type_movies">
        {!props.isPreloader ? (
          <>
            <div className="movies-card-list__list">
              <Route path="/movies">
                <FoundMoviesCards
                  cards={foundListCardsMovies}
                  onCardLike={props.onCardLike}
                  savedCards={props.savedCardsMovies}
                  onCardDelete={props.onCardDelete}
                  numberRenderCards={props.numberRenderCards}
                />
              </Route>
              <Route path="/saved-movies">
                <FoundMoviesCards
                  cards={foundListCardsSavedMovies}
                  onCardLike={props.onCardLike}
                  onCardDelete={props.onCardDelete}
                  numberRenderCards={props.numberRenderCards}
                />
              </Route>
            </div>
            <Route exact path="/movies">
              {foundListCardsMovies.length > props.numberRenderCards && (
                <button
                  onClick={props.onRenderClick}
                  className="movies-card-list__still hover hover_type_button">
                  Ещё
                </button>
              )}
            </Route>
          </>
        ) : !props.isErrorApi ? (
          <Preloader />
        ) : (
          <p className="movies-card-list__error-message">
            Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер
            недоступен. Подождите немного и попробуйте ещё раз
          </p>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
