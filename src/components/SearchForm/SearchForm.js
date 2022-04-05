import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="search-form">
      <div className="search-form__content spacing spacing_type_movies">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <div className="search-form__block-inputs">
            <div className="search-form__item">
              <input
                className="search-form__input"
                name="movieTitle"
                type="text"
                placeholder="Фильм"
                required
              />
            </div>
            <button type="submit" className="search-form__submit hover hover_type_button"></button>
          </div>
          <FilterCheckbox />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
