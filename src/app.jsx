import React, {useState} from 'react';
import api from './api';
import Users from './components/users';

const App = () => {
  const initialState = api.users.fetchAll().map((user) => ({
    ...user,
    bookmark: Math.random() < 0.5
  }));
  const titles = [
    'Имя',
    'Качества',
    'Профессия',
    'Встретился',
    'Оценка',
    'Избранное',
    ''
  ];
  const [users, setUsers] = useState(initialState);

  const handleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId));

  const handleMark = (userId) => {
    const usersClone = [...users];
    const currentUser = usersClone.find((user) => user._id === userId);
    currentUser.bookmark = !currentUser.bookmark;
    setUsers(usersClone);
  };

  return (
    <Users
      titles={titles}
      users={users}
      onDelete={handleDelete}
      onMark={handleMark}
    />
  );
};

export default App;
