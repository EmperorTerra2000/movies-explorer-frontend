import './ItemInput.css';

function ItemInput({ nameInput, idInput, typeInput, placeholderInput, textLabel }) {
  return (
    <div className="item-input">
      <label htmlFor={idInput} className="item-input__label">
        {textLabel}
      </label>
      <input
        id={idInput}
        name={nameInput}
        className="item-input__input"
        type={typeInput}
        placeholder={placeholderInput}
        minLength="2"
        maxLength="30"
        required
      />
    </div>
  );
}

export default ItemInput;
