import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { Route } from 'react-router-dom';

function MoviesCardList() {
  const chanceRequest = Math.random() > 0.5;

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__content spacing spacing_type_movies">
        {chanceRequest ? (
          <>
            <div className="movies-card-list__list">
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
            </div>
            <Route exact path="/movies">
              <button className="movies-card-list__still hover hover_type_button">Ещё</button>
            </Route>
          </>
        ) : (
          <Preloader />
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
