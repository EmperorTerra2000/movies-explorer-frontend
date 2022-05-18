import './Register.css';
import ItemInput from '../ItemInput/ItemInput';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Register() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="sign-up">
      <form className="sign-up__content form form_type_sign-up" onSubmit={handleSubmit}>
        <div className="sign-up__logo">
          <Logo />
        </div>
        <h2 className="sign-up__title">Добро пожаловать!</h2>
        <div className="sign-up__block-inputs">
          <ItemInput
            nameInput="name"
            idInput="name"
            typeInput="text"
            placeholderInput="Имя"
            textLabel="Имя"
          />
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
        <button type="submit" className="sign-up__submit hover hover_type_button">
          Зарегистрироваться
        </button>
        <Link to="/signin" className="sign-up__link hover hover_type_link">
          Уже зарегистрированы? <span className="sign-up__link-span">Войти</span>
        </Link>
      </form>
    </div>
  );
}

export default Register;
