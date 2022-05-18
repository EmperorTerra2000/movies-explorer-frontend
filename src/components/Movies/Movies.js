import './Movies.css';

import React from 'react';
import MainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
  const mainApi = new MainApi({
    url: 'https://api.movies.students.nomoredomains.xyz',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  const valueMoviesRef = React.useRef(); // реф, привязанный к инпуту поиска фильмов
  const filterRef = React.useRef(); // реф, привязанный к чекбоксу "короткометражки"
  const sizeWidthScreenRef = React.useRef(); // реф-переменная, отслеживающая ширину монитора

  const [valueForm, setValueForm] = React.useState(''); // стэйт для значения поиска
  const [filterForm, setFilterForm] = React.useState(false); // стейт фильтра "короткометражки"
  const [listCards, setListCards] = React.useState([]); // стэйт карточек со всеми фильмами
  const [isPreloader, setIsPreloader] = React.useState(false); // состояние прелоадера
  const [isErrorApi, setIsErrorApi] = React.useState(false); // ошибка запроса на сервер
  const [numberRenderCards, setNumberRenderCards] = React.useState(); // кол-во отрендеренных карточек

  React.useEffect(() => {
    const valueSearch = localStorage.getItem('valueSearchMovies'); // взятие значения инпута поиска
    const filterSearch = localStorage.getItem('filterSearchMovies'); // взятие состояния фильтра поиска
    const listCardsMovies = JSON.parse(localStorage.getItem('listCardsMovies')); // взятие списка всех фильмов

    props.tokenCheck(); // проверка токена

    sizeWidthScreenRef.current = window.innerWidth;
    installSizeScreen(sizeWidthScreenRef.current); // определение размера экрана

    // если значение инпута поиска не пусто, то
    if (valueSearch) {
      valueMoviesRef.current.value = valueSearch; // вставить в инпут ранее сохраненное значение
      filterRef.current.checked = filterSearch === 'true';

      setListCards(listCardsMovies);
      setValueForm(valueSearch);
      setFilterForm(filterSearch === 'true');
    }

    mainApi
      .getUserInfo()
      .then((userData) => {
        props.setCurrentUser(userData.data[0]);
      })
      .catch((err) => console.log(err));

    mainApi
      .getSavedMovies()
      .then((movies) => {
        props.setSavedCardsMovies(movies.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // слушатель изменения окна браузера
  window.onresize = (event) => {
    sizeWidthScreenRef.current = event.currentTarget.innerWidth;
    installSizeScreen(event.currentTarget.innerWidth);
  };

  // сабмит инпута поиска фильмов
  const handleSubmit = (evt) => {
    evt.preventDefault();

    setIsPreloader(true); // включение прелоадера

    setValueForm(valueMoviesRef.current.value); // сохранить значение инпута в переменную состояния
    setFilterForm(filterRef.current.checked); // сохранить состояние фильтра в стейт

    localStorage.setItem('filterSearchMovies', filterRef.current.checked); // сохранение состояния фильтра в локалсторадж
    localStorage.setItem('valueSearchMovies', valueMoviesRef.current.value); // сохранение значения инпута в локалсторадж

    moviesApi
      .getMovies()
      .then((data) => {
        setListCards(data);
        localStorage.setItem('listCardsMovies', JSON.stringify(data));
        setIsPreloader(false); // выключение прелоадера
      })
      .catch((err) => {
        console.log(err);
        setIsErrorApi(true);
      });
  };

  // инициализация кол-ва отрендеренных карточек в зависимости от
  // разрешения экрана
  const installSizeScreen = (innerWidth) => {
    if (innerWidth >= 1200) setNumberRenderCards(12);
    else if (innerWidth >= 768) setNumberRenderCards(8);
    else setNumberRenderCards(5);
  };

  // событие при нажатии на кнопку "ещё"
  const hundleRenderClick = () => {
    if (sizeWidthScreenRef.current >= 1200) setNumberRenderCards(numberRenderCards + 3);
    else if (sizeWidthScreenRef.current >= 768) setNumberRenderCards(numberRenderCards + 2);
    else setNumberRenderCards(numberRenderCards + 2);
  };

  return (
    <>
      <SearchForm filterRef={filterRef} valueRef={valueMoviesRef} handleSubmit={handleSubmit} />
      <MoviesCardList
        savedCardsMovies={props.savedCardsMovies}
        valueForm={valueForm}
        filterForm={filterForm}
        listCards={listCards}
        onCardLike={props.onCardLike}
        onCardDelete={props.onCardDelete}
        isPreloader={isPreloader}
        isErrorApi={isErrorApi}
        onRenderClick={hundleRenderClick}
        numberRenderCards={numberRenderCards}
      />
    </>
  );
}

export default Movies;
