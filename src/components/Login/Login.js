import './Login.css';
import ItemInput from '../ItemInput/ItemInput';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Login() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="sign-in">
      <form className="sign-in__content form form_type_sign-in" onSubmit={handleSubmit}>
        <div className="sign-in__logo">
          <Logo />
        </div>
        <h2 className="sign-in__title">Рады видеть!</h2>
        <div className="sign-in__block-inputs">
          <ItemInput
            nameInput="email"
            idInput="email"
            typeInput="email"
            placeholderInput="Почта"
            textLabel="E-mail"
          />
          <ItemInput
            nameInput="pass"
            idInput="pass"
            typeInput="password"
            placeholderInput="Пароль"
            textLabel="Пароль"
          />
        </div>
        <button type="submit" className="sign-in__submit hover hover_type_link">
          Войти
        </button>
        <Link to="/signup" className="sign-in__link hover hover_type_link">
          Ещё не зарегистрированы? <span className="sign-in__link-span">Регистрация</span>
        </Link>
      </form>
    </div>
  );
}

export default Login;
