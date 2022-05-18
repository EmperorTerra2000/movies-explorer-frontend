import './Login.css';
import { useState } from 'react';

import * as auth from '../../utils/Auth';
import { useFormWithValidation } from '../../utils/FormValidator';
import ItemInput from '../ItemInput/ItemInput';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Login(props) {
  const [errorServer, setErrorServer] = useState([]);

  const validationForm = useFormWithValidation({
    email: '',
    password: '',
  });
  const valueForm = validationForm.values;
  const resetForm = validationForm.resetForm;
  const errorMessage = validationForm.errors;
  const handleChange = validationForm.handleChange;
  const isValid = validationForm.isValid;

  const patternToEmail = '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$';

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = valueForm;

    auth
      .authorization(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          resetForm();
          setErrorServer([]);
          props.handleLogin();
          props.tokenCheck();
          props.history.push('/movies');
        }
      })
      .catch((err) => {
        resetForm();
        if (!err.message) setErrorServer(err);
      });
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
            valueInpit={valueForm.email}
            onChange={handleChange}
            idInput="email"
            typeInput="email"
            placeholderInput="Почта"
            textLabel="E-mail"
            errorMessage={errorMessage.email}
            pattern={patternToEmail}
          />
          <ItemInput
            nameInput="password"
            valueInpit={valueForm.password}
            onChange={handleChange}
            idInput="password"
            typeInput="password"
            placeholderInput="Пароль"
            textLabel="Пароль"
            errorMessage={errorMessage.password}
          />
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className={`sign-in__submit hover hover_type_button ${
            !isValid && 'sign-in__submit_disabled'
          }`}>
          Войти
        </button>
        {errorServer && <span className="sign-in__error">{errorServer || ''}</span>}
        <Link to="/signup" className="sign-in__link hover hover_type_link">
          Ещё не зарегистрированы? <span className="sign-in__link-span">Регистрация</span>
        </Link>
      </form>
    </div>
  );
}

export default Login;
