const moviesSearch = (cards, parameters) => {
  const maxDuration = parameters.filterForm ? 40 : false;

  if (!parameters.valueForm) {
    return cards;
  }

  return cards.filter((item) => {
    const nameFilm = item.nameRU.toLowerCase();
    const isCorrectName =
      nameFilm.indexOf(parameters.valueForm.toLowerCase()) !== -1 ? true : false;
    const isCorrectDuration = item.duration < maxDuration;

    if (maxDuration) {
      return isCorrectName && isCorrectDuration;
    }

    return isCorrectName;
  });
};

export default moviesSearch;
