import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  return (
    <section className="search-form">
      <div className="search-form__content spacing spacing_type_movies">
        <form className="search-form__form" onSubmit={props.handleSubmit}>
          <div className="search-form__block-inputs">
            <div className="search-form__item">
              <input
                ref={props.valueRef}
                className="search-form__input"
                name="movieTitle"
                type="text"
                placeholder="Фильм"
              />
            </div>
            <button type="submit" className="search-form__submit hover hover_type_button"></button>
          </div>
          <FilterCheckbox filterRef={props.filterRef} />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
