import React from 'react';
import PropTypes from 'prop-types';

const Quality = ({_id, color, name}) => (
  <span
    id={_id}
    style={{marginRight: '0.5rem'}}
    className={`badge bg-${color}`}
  >
    {name}
  </span>
);

Quality.propTypes = {
  _id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Quality;
