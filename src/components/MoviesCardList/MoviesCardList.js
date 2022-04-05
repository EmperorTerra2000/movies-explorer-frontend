import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

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
            </div>
            <button className="movies-card-list__still hover hover_type_button">Ещё</button>
          </>
        ) : (
          <Preloader />
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
