import './SavedMovies.css';

import React from 'react';
import MainApi from '../../utils/MainApi';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  const mainApi = new MainApi({
    url: 'https://api.movies.students.nomoredomains.xyz',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  const valueSavedMoviesRef = React.useRef(); // реф, который будет привязан к инпуту поиска фильмов
  const filterSavedMoviesRef = React.useRef(); // реф, привязанный к чекбоксу "короткометражки"

  const [valueForm, setValueForm] = React.useState(''); // стэйт для значения поиска
  const [filterForm, setFilterForm] = React.useState(false); // стейт фильтра "короткометражки"

  React.useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((movies) => {
        props.setSavedCardsMovies(movies.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // сабмит инпута поиска фильмов
  const handleSubmit = (evt) => {
    evt.preventDefault();

    setValueForm(valueSavedMoviesRef.current.value); // сохранить значение инпута в переменную состояния
    setFilterForm(filterSavedMoviesRef.current.checked); // сохранить состояние фильтра в стейт
  };

  return (
    <>
      <SearchForm
        filterRef={filterSavedMoviesRef}
        valueRef={valueSavedMoviesRef}
        handleSubmit={handleSubmit}
      />
      <MoviesCardList
        savedCardsMovies={props.savedCardsMovies}
        onCardDelete={props.onCardDelete}
        valueForm={valueForm}
        filterForm={filterForm}
        setSavedCardsMovies={props.setSavedCardsMovies}
      />
    </>
  );
}

export default SavedMovies;
