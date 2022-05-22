import './App.css';
import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import MainApi from '../../utils/MainApi';
import { getContent } from '../../utils/Auth';

function App() {
  const mainApi = new MainApi({
    url: 'https://api.movies.students.nomoredomains.xyz',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  const history = useHistory();
  const [savedCardsMovies, setSavedCardsMovies] = React.useState([]); // стейт сохр-ых фильмов поступающих из api
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loggedInProtected, setLoggedInProtected] = React.useState('start');
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false); // стейт меню бургера
  const [currentUser, setCurrentUser] = React.useState({}); // данные текущего пользователя
  const [okRequestProfile, setOkRequestProfile] = React.useState(false); // успешен ли был запрос по изм-ию профиля

  React.useEffect(() => {
    tokenCheck();
  }, []);

  // функция проверка токена
  function tokenCheck() {
    //если у пользователя есть токен в LocalStorage,
    //эта функция проверит, действующий ли он или нет
    const token = localStorage.getItem('token');

    if (token) {
      //проверим токен
      getContent(token)
        .then((res) => {
          if (res) {
            //авторизуем пользователя
            handleLogin();
            // history.push('/movies');
          }
        })
        .catch((err) => {
          console.log(err);
          handleSignOut();
          //удаляем токен из локалстореджа если он не валидный
          localStorage.removeItem('token');
        });
    } else {
      handleSignOut();
    }
  }

  // событие удаление карточки из списка сохраненных
  const handleCardDelete = (id) => {
    mainApi
      .deleteMovie(id)
      .then((deletedCard) => {
        setSavedCardsMovies((state) => state.filter((c) => c._id !== deletedCard.data._id));
      })
      .catch((err) => console.log(err));
  };

  // событие при нажатии на лайк
  const handleCardLike = (card) => {
    mainApi
      .addMovie(card)
      .then((addCard) => {
        setSavedCardsMovies((state) => [...state, addCard.data]);
      })
      .catch((err) => console.log(err));
  };

  const handleChangeInfoMe = (data) => {
    mainApi
      .changeInfoMe(data)
      .then((user) => {
        setCurrentUser({
          name: user.data.name,
          email: user.data.email,
        });

        setOkRequestProfile(true);

        setTimeout(() => setOkRequestProfile(false), 4000);
      })
      .catch((err) => console.log(err));
  };

  function handleLogin() {
    setLoggedInProtected(true);
    setLoggedIn(true);
  }

  function handleSignOut() {
    setLoggedIn(false);
    setLoggedInProtected(false);
  }

  const handleNavMenuClick = () => {
    setIsNavMenuOpen(true);
  };

  const closeNavMenu = () => {
    setIsNavMenuOpen(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Header
              loggedIn={loggedIn}
              onNavMenu={handleNavMenuClick}
              isOpen={isNavMenuOpen}
              onClose={closeNavMenu}
            />
            <Main />
            <Footer />
          </Route>
          <Route path="/movies">
            <Header
              loggedIn={loggedIn}
              onNavMenu={handleNavMenuClick}
              isOpen={isNavMenuOpen}
              onClose={closeNavMenu}
            />
            <ProtectedRoute
              path="/movies"
              loggedIn={loggedIn}
              loggedInProtected={loggedInProtected}
              component={Movies}
              setCurrentUser={setCurrentUser}
              tokenCheck={tokenCheck}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              savedCardsMovies={savedCardsMovies}
              setSavedCardsMovies={setSavedCardsMovies}
            />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header
              loggedIn={loggedIn}
              onNavMenu={handleNavMenuClick}
              isOpen={isNavMenuOpen}
              onClose={closeNavMenu}
            />
            <ProtectedRoute
              path="/saved-movies"
              onCardDelete={handleCardDelete}
              loggedInProtected={loggedInProtected}
              loggedIn={loggedIn}
              component={SavedMovies}
              tokenCheck={tokenCheck}
              savedCardsMovies={savedCardsMovies}
              setSavedCardsMovies={setSavedCardsMovies}
            />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header
              loggedIn={loggedIn}
              onNavMenu={handleNavMenuClick}
              isOpen={isNavMenuOpen}
              onClose={closeNavMenu}
            />
            <ProtectedRoute
              path="/profile"
              okRequestProfile={okRequestProfile}
              loggedInProtected={loggedInProtected}
              onSignOut={handleSignOut}
              onChangeInfoMe={handleChangeInfoMe}
              loggedIn={loggedIn}
              component={Profile}
              history={history}
            />
          </Route>
          <Route path="/signup">
            <Register
              loggedIn={loggedIn}
              history={history}
              tokenCheck={tokenCheck}
              handleLogin={handleLogin}
            />
          </Route>
          <Route path="/signin">
            <Login
              tokenCheck={tokenCheck}
              loggedIn={loggedIn}
              history={history}
              handleLogin={handleLogin}
            />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
