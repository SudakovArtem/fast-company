import React from 'react';
import PropTypes from 'prop-types';

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem
}) => {
  const itemsObject = {...items};
  return (
    <ul className="list-group">
      {Object.keys(itemsObject).map((item) => (
        <li
          key={itemsObject[item][valueProperty]}
          onClick={() => onItemSelect(itemsObject[item])}
          role="button"
          className={
            'list-group-item' + (itemsObject[item] === selectedItem ? ' active' : '')
          }
        >
          {itemsObject[item][contentProperty]}
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
