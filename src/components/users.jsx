import React, {useEffect, useState} from 'react';
import User from './user';
import SearchStatus from './searchStatus';
import Pagination from './pagination';
import {paginate} from '../utils/paginate';
import PropTypes from 'prop-types';
import api from '../api';
import GroupList from './groupList';

const Users = ({
  titles,
  users: allUsers,
  ...rest
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const pageSize = 4;
  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  const handleProfessionSelect = (item) => {
    setSelectedProf(item);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const filteredUsers = selectedProf ? allUsers.filter(user => JSON.stringify(user.profession) === JSON.stringify(selectedProf)) : allUsers;
  const count = filteredUsers.length;
  const users = paginate(filteredUsers, currentPage, pageSize);
  const clearFilter = () => {
    setSelectedProf();
  };

  return (
    <div className="d-flex">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            items={professions}
            selectedItem={selectedProf}
            onItemSelect={handleProfessionSelect}
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Очистить
          </button>
        </div>
      )}
      <div className="d-flex flex-column flex-grow-1 p-3">
        <SearchStatus number={count}/>
        {count ? (
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
        ) : null}
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

Users.propTypes = {
  titles: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired
};

export default Users;
