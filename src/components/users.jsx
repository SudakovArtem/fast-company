import React, {useState} from 'react';
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const handleDelete = (userId) => setUsers(users.filter(user => user._id !== userId))
  const renderPhrase = (number) =>
      <span className={`badge bg-${users.length ? 'primary' : 'danger'}`}>
          {number
              ? `${number} человек тусанет с тобой сегодня`
              : 'никто с тобой не тусанет'}
      </span>
  return (
    <>
      <h2>
        {renderPhrase(users.length)}
      </h2>
      {
        users.length ?
          <table className="table">
            <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился ряз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
              {users.map(user => {
                return (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>
                      {user.qualities.map(quality => {
                        return <span
                            key={quality._id}
                            style={{marginRight: '0.5rem'}}
                            className={`badge bg-${quality.color}`}>{quality.name}
                        </span>
                      })}
                    </td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}/5</td>
                    <td>
                      <button
                          type="button"
                          className="btn btn-danger"
                          onClick={handleDelete.bind(null, user._id)}>
                        delete
                      </button>
                    </td>
                  </tr>)
              })}
            </tbody>
          </table>
          : null
      }
    </>
  );
};

export default Users;
