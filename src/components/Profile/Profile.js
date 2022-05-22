import './Profile.css';
import React from 'react';
import ItemInput from '../ItemInput/ItemInput';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/FormValidator';

function Profile(props) {
  //подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('user');

  const validationForm = useFormWithValidation({
    name: currentUser.name,
    email: currentUser.email,
  });
  const patternToEmail = '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$';
  const patternToName = '^[а-яёА-ЯЁa-zA-Z-\\s]+$';

  const valueForm = validationForm.values;
  const errorMessage = validationForm.errors;
  const handleChange = validationForm.handleChange;
  const isValid = validationForm.isValid;

  //после загрузки текущего пользователя из API
  //его данные будут использованы в управляемых компонентах
  React.useEffect(() => {
    setName(currentUser.name);
  }, [currentUser]);

  //метод выхода из профиля
  function signOut() {
    props.onSignOut();
    props.history.push('/');
    // удаление из локального хранилища всех переменных
    localStorage.clear();
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, email } = valueForm;

    if (!(name === currentUser.name && email === currentUser.email)) {
      props.onChangeInfoMe({ name, email });
    }
  };

  return (
    <section className="profile">
      <form className="form profile__content spacing" onSubmit={handleSubmit}>
        <h1 className="profile__title">Привет, {name}!</h1>
        <ul className="profile__list-info">
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
            selectorElement="profile"
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
            selectorElement="profile"
          />
        </ul>
        <p
          className={`profile__successful-request ${
            props.okRequestProfile && 'profile__successful-request_active'
          }`}>
          Данные успешно изменены
        </p>
        <div className="profile__control">
          <button
            disabled={!isValid}
            type="submit"
            className={`profile__item-control hover hover_type_link ${
              !isValid && 'profile__item-control_disabled'
            }`}>
            Редактировать
          </button>
          <p
            onClick={signOut}
            className="profile__item-control profile__item-control_colors_red hover hover_type_link">
            Выйти из аккаунта
          </p>
        </div>
      </form>
    </section>
  );
}

export default Profile;
