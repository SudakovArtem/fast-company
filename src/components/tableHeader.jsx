import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({
  onSort,
  selectedSort,
  columns
}) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort((selectedSort) => ({
        ...selectedSort,
        order: selectedSort.order === 'asc' ? 'desc' : 'asc'
      }));
    } else {
      onSort({
        path: item,
        order: 'asc'
      });
    }
  };

  return (
    <thead>
    <tr>
      {Object.keys(columns).map((column) => (
        <th onClick={columns[column].path ? () => handleSort(columns[column].path) : undefined} key={column}
            scope="col"
            {...{role: columns[column].path && 'button'}}>
          {columns[column].name}
          {selectedSort.path === columns[column].path && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            {selectedSort.order === 'asc' ? <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/> : <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>}
          </svg>}
        </th>
      ))}
    </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired
};

export default TableHeader;
