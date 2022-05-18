import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <div className="profile__content spacing">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <ul className="profile__list-info">
          <li className="profile__item-info">
            <p className="profile__key-info">Имя</p>
            <p className="profile__value-info">Виталий</p>
          </li>
          <li className="profile__item-info">
            <p className="profile__key-info">E-mail</p>
            <p className="profile__value-info">pochta@yandex.ru</p>
          </li>
        </ul>
        <div className="profile__control">
          <p className="profile__item-control hover hover_type_link">Редактировать</p>
          <p className="profile__item-control profile__item-control_colors_red hover hover_type_link">
            Выйти из аккаунта
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
