import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const SelectField = ({options, onChange, name, label, value}) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object' ? Object.keys(options).map((optionName) => ({
      label: options[optionName].name,
      value: options[optionName]._id
    })) : options;

  const handleChange = (value) => {
    onChange({
      name: 'profession',
      value: {_id: value.value, name: value.label}
    });
  };
  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <Select
        defaultValue={{label: value.name, value: value._id}}
        options={optionsArray}
        className="basic-single"
        classNamePrefix="select"
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};

SelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.object
};

export default SelectField;
