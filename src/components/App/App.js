import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';

function App() {
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);

  const handleNavMenuClick = () => {
    setIsNavMenuOpen(true);
  };

  const closeNavMenu = () => {
    setIsNavMenuOpen(false);
  };

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header onNavMenu={handleNavMenuClick} isOpen={isNavMenuOpen} onClose={closeNavMenu} />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header onNavMenu={handleNavMenuClick} isOpen={isNavMenuOpen} onClose={closeNavMenu} />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header onNavMenu={handleNavMenuClick} isOpen={isNavMenuOpen} onClose={closeNavMenu} />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header onNavMenu={handleNavMenuClick} isOpen={isNavMenuOpen} onClose={closeNavMenu} />
          <Profile />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
