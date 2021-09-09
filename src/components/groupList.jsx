import React from 'react';
import PropTypes from 'prop-types';

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem
}) => {
  const items1 = {...items};
  console.log(items1, typeof items === 'object');
  return (
    <ul className="list-group">
      {Object.keys(items1).map((item) => (
        <li
          key={items1[item][valueProperty]}
          onClick={() => onItemSelect(items1[item])}
          role="button"
          className={
            'list-group-item' + (items1[item] === selectedItem ? ' active' : '')
          }
        >
          {items1[item][contentProperty]}
        </li>
      ))}
    </ul>
  );
};

GroupList.defaultProps = {
  valueProperty: '_id',
  contentProperty: 'name'
};

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object
};

export default GroupList;
