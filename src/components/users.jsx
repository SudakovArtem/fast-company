import React, {useEffect, useState} from 'react';
import SearchStatus from './searchStatus';
import Pagination from './pagination';
import {paginate} from '../utils/paginate';
import api from '../api';
import GroupList from './groupList';
import UsersTable from './usersTable';
import _ from 'lodash';

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const [sortBy, setSortBy] = useState({
    path: 'name',
    order: 'asc'
  });
  const [users, setUsers] = useState();

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  const handleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId));

  const handleMark = (userId) => {
    const usersClone = [...users];
    const currentUser = usersClone.find((user) => user._id === userId);
    currentUser.bookmark = !currentUser.bookmark;
    setUsers(usersClone);
  };

  const handleProfessionSelect = (item) => {
    setSelectedProf(item);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  const pageSize = 8;

  if (users) {
    const filteredUsers = selectedProf ? users.filter(user => JSON.stringify(user.profession) === JSON.stringify(selectedProf)) : users;
    const count = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    const usersCrop = paginate(sortedUsers, currentPage, pageSize);
    const clearFilter = () => setSelectedProf();

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
            <UsersTable
              users={usersCrop}
              onSort={handleSort}
              selectedSort={sortBy}
              onDelete={handleDelete}
              onMark={handleMark}/>
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
  } else {
    return 'loading...';
  }
};

export default Users;
