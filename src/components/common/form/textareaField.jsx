import React from 'react';
import PropTypes from 'prop-types';

const TextareaField = ({label, name, value, onChange, error, rows}) => {
  const getInputClasses = () => {
    return 'form-control ' + (error ? 'is-invalid' : '');
  };
  const handleChange = ({target}) => {
    onChange({name: target.name, value: target.value});
  };
  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <div className="input-group has-validation">
        <textarea
          className={getInputClasses()}
          id={name}
          name={name}
          value={value}
          rows={rows}
          onChange={handleChange}/>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

TextareaField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  rows: PropTypes.number
};

export default TextareaField;
