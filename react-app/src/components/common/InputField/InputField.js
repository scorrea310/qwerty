const InputField = ({
  label,
  type,
  id,
  size,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className={`form-row form-row-${size}`}>
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error ? 'error-field' : null}
      />
    </div>
  );
};

InputField.defaultProps = {
  label: null,
  type: 'text',
  placeholder: null,
  error: null,
};

export default InputField;
