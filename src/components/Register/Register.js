import './Register.css';
import { useState } from 'react';

import * as auth from '../../utils/Auth';
import { useFormWithValidation } from '../../utils/FormValidator';
import ItemInput from '../ItemInput/ItemInput';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Register(props) {
  const [errorServer, setErrorServer] = useState('');

  const validationForm = useFormWithValidation({
    name: '',
    email: '',
    password: '',
  });
  const valueForm = validationForm.values;
  const resetForm = validationForm.resetForm;
  const errorMessage = validationForm.errors;
  const handleChange = validationForm.handleChange;
  const isValid = validationForm.isValid;

  const patternToEmail = '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$';
  const patternToName = '^[а-яёА-ЯЁa-zA-Z-\\s]+$';

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, email, password } = valueForm;

    auth
      .register(name, email, password)
      .then((data) => {
        resetForm();
        setErrorServer('');
        props.history.push('/signin');
      })
      .catch((err) => {
        resetForm();
        if (!err.message) setErrorServer(err);
      });
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
            valueInpit={valueForm.name}
            onChange={handleChange}
            idInput="name"
            typeInput="text"
            placeholderInput="Имя"
            textLabel="Имя"
            errorMessage={errorMessage.name}
            pattern={patternToName}
          />
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
          className={`sign-up__submit hover hover_type_button ${
            !isValid && 'sign-up__submit_disabled'
          }`}>
          Зарегистрироваться
        </button>
        {errorServer && <span className="sign-up__error">{errorServer || ''}</span>}
        <Link to="/signin" className="sign-up__link hover hover_type_link">
          Уже зарегистрированы? <span className="sign-up__link-span">Войти</span>
        </Link>
      </form>
    </div>
  );
}

export default Register;
