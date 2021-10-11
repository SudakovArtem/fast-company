import React from 'react';
import PropTypes from 'prop-types';

const SearchField = ({
  value,
  onChange,
  placeholder
}) => {
  return (
    <div className="mb-4">
      <input className="form-control form-control-lg" type="text" name="search" value={value} onChange={onChange} placeholder={placeholder}/>
    </div>
  );
};

SearchField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default SearchField;
