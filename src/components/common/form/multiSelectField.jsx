import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {getQualityColor} from '../../../utils/get-quality-color';

const MultiSelectField = ({options, onChange, name, label, value}) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object' ? Object.keys(options).map((optionName) => ({
      label: options[optionName].name,
      value: options[optionName]._id
    })) : options;

  const defaultValue = value.map(option => {
    return {
      label: option.name,
      value: option._id
    };
  });

  const handleChange = (value) => {
    const t = value.map(v => {
      return {
        name: v.label,
        _id: v.value,
        color: getQualityColor(v.label)
      };
    });
    onChange({name, value: t});
  };
  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <Select
        isMulti
        closeMenuOnSelect={false}
        defaultValue={defaultValue}
        options={optionsArray}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};

MultiSelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.array
};

export default MultiSelectField;
