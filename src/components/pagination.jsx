import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({itemsCount, pageSize, onPageChange, currentPage}) => {
  const count = Math.ceil(itemsCount / pageSize);
  if (count === 1) return null;
  const pages = [];
  for (let i = 1; i <= count; i++) {
    pages.push(i);
  }
  return (
    <nav aria-label="...">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={'page-item' + (page === currentPage ? ' active' : '')}
            aria-current="page"
          >
            <a
                className="page-link"
                style={{cursor: `${(page === currentPage ? 'default' : 'pointer')}`}}
                onClick={onPageChange.bind(null, page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
