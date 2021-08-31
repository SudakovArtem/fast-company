import React from 'react';
import PropTypes from 'prop-types';

const SearchStatus = ({number}) => {
  const prettify = (num) => {
    const n = num.toString();
    const last = n.slice(-1);
    if (n === '11' || n === '12' || n === '13' || n === '14') {
      return (
        n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ').replace(/^0+/, '') +
        '  человек тусанут с тобой сегодня '
      );
    } else {
      if (last === '1') {
        return (
          n
            .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')
            .replace(/^0+/, '') + '  человек тусанет с тобой сегодня '
        );
      } else if (last === '2' || last === '3' || last === '4') {
        return (
          n
            .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')
            .replace(/^0+/, '') + '  человека тусанут с тобой сегодня'
        );
      } else {
        return (
          n
            .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')
            .replace(/^0+/, '') + '  человек тусанут с тобой сегодня '
        );
      }
    }
  };

  return (
    <h2>
      <span className={`badge bg-${number ? 'primary' : 'danger'}`}>
        {number ? prettify(number) : 'никто с тобой не тусанет'}
      </span>
    </h2>
  );
};

SearchStatus.propTypes = {
  number: PropTypes.number.isRequired
};

export default SearchStatus;
