import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
import Bookmark from './bookmark';
import QualitiesList from './qualitiesList';
import Table from './table';

const UsersTable = ({
  users,
  onSort,
  selectedSort,
  onMark,
  onDelete
}) => {
  const columns = {
    name: {
      name: 'Имя',
      path: 'name'
    },
    qualities: {
      name: 'Качества',
      component: (user) => <QualitiesList qualities={user.qualities}/>
    },
    profession: {
      name: 'Профессия',
      path: 'profession.name'
    },
    completedMeetings: {
      name: 'Встретился, раз',
      path: 'completedMeetings'
    },
    rate: {
      name: 'Оценка',
      path: 'rate'
    },
    bookmark: {
      name: 'Избранное',
      path: 'bookmark',
      component: (user) => <Bookmark checked={user.bookmark} onMark={onMark} id={user._id}/>
    },
    delete: {
      component: (user) => <button type="button" className="btn btn-danger" onClick={onDelete.bind(null, user._id)}>delete</button>
    }
  };

  return (
    <Table>
      <TableHeader {...{onSort, selectedSort, columns}} />
      <TableBody {...{columns, data: users}} />
    </Table>
  );
};

UsersTable.propTypes = {
  users: PropTypes.array,
  onSort: PropTypes.func,
  selectedSort: PropTypes.object,
  onMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default UsersTable;
