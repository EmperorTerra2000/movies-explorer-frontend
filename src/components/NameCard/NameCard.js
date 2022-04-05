import './NameCard.css';

function NameCard({ data: { name, duty, description, avatar, fbLink, gitLink } }) {
  return (
    <article className="name-card">
      <div className="name-card__block-text">
        <h3 className="name-card__name">{name}</h3>
        <p className="name-card__duty">{duty}</p>
        <p className="name-card__description">{description}</p>
        <ul className="name-card__list-resources">
          <li className="name-card__item-resource">
            <a href={fbLink} className="name-card__link-resource hover hover_type_link">
              Facebook
            </a>
          </li>
          <li className="name-card__item-resource">
            <a href={gitLink} className="name-card__link-resource hover hover_type_link">
              Github
            </a>
          </li>
        </ul>
      </div>
      <img src={avatar} className="name-card__avatar" alt="аватар пользователя" />
    </article>
  );
}

export default NameCard;
