import './ItemInput.css';

function ItemInput({
  nameInput,
  valueInpit,
  idInput,
  typeInput,
  placeholderInput,
  textLabel,
  onChange,
  errorMessage,
  pattern,
  selectorElement,
}) {
  return (
    <div
      className={`item-input ${(selectorElement && 'item-input_type_' + selectorElement) || ''}`}>
      <label
        htmlFor={idInput}
        className={`item-input__label ${
          (selectorElement && 'item-input__label_type_' + selectorElement) || ''
        }`}>
        {textLabel}
      </label>
      <input
        id={idInput}
        name={nameInput}
        value={valueInpit || ''}
        onChange={onChange}
        className={`item-input__input ${errorMessage && 'item-input__input_error'} ${
          (selectorElement && 'item-input__input_type_' + selectorElement) || ''
        }`}
        type={typeInput}
        placeholder={placeholderInput}
        minLength="2"
        maxLength="30"
        pattern={pattern}
        required
      />
      {errorMessage && (
        <span
          className={`item-input__error ${
            (selectorElement && 'item-input__error_type_' + selectorElement) || ''
          }`}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default ItemInput;
