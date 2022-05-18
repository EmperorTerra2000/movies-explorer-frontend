import './FilterCheckbox.css';

function FilterCheckbox({ filterRef }) {
  return (
    <div className="filter-checkbox">
      <input
        ref={filterRef}
        className="filter-checkbox__input"
        type="checkbox"
        id="checkboxInput"></input>
      <label className="filter-checkbox__label" htmlFor="checkboxInput">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
