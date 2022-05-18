import MoviesCard from '../MoviesCard/MoviesCard';

function FoundMoviesCards({ cards, numberRenderCards, ...props }) {
  if (cards.length === 0) {
    return <p className="movies-card-list__not-found">Ничего не найдено</p>;
  }

  return cards.map((card, i) => {
    if (numberRenderCards && i >= numberRenderCards) return false;
    return <MoviesCard key={card.id || card._id} card={card} {...props} />;
  });
}

export default FoundMoviesCards;
