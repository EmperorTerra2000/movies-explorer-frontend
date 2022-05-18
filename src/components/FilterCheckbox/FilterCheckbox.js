import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <input className="filter-checkbox__input" type="checkbox" id="checkboxInput"></input>
      <label className="filter-checkbox__label" htmlFor="checkboxInput">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
