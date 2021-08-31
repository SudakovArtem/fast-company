import React, {useState} from 'react';
import User from './user';
import SearchStatus from './searchStatus';
import Pagination from './pagination';
import {paginate} from '../utils/paginate';
import PropTypes from 'prop-types';

const Users = ({titles, users: allUsers, ...rest}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const count = allUsers.length;
  const pageSize = 4;
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    console.log(currentPage);
  };
  const users = paginate(allUsers, currentPage, pageSize);

  return (
    <>
      <SearchStatus number={count} />
      {count
        ? (
        <table className="table">
          <thead>
            <tr>
              {titles.map((title) => (
                <th key={title} scope="col">
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User key={user._id} {...user} {...rest} />
            ))}
          </tbody>
        </table>
          )
        : null}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

Users.propTypes = {
  titles: PropTypes.array.isRequired,
  users: PropTypes.number.isRequired
};

export default Users;
