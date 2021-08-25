import React, {useState} from 'react';
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const prettify = (num) => {
    let n = num.toString();
    let last = n.slice(-1);
    if (n === `11` || n === `12` || n === `13` || n === `14`) {
      return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1` + ` `).replace(/^0+/, ``) + `  человек тусанут с тобой сегодня `;
    } else {
      if (last === `1`) {
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1` + ` `).replace(/^0+/, ``) + `  человек тусанет с тобой сегодня `;
      } else if (last === `2` || last === `3` || last === `4`) {
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1` + ` `).replace(/^0+/, ``) + `  человека тусанет с тобой сегодня`;
      } else {
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1` + ` `).replace(/^0+/, ``) + `  человек тусанут с тобой сегодня `;
      }
    }
  };

  const handleDelete = (userId) => setUsers(users.filter(user => user._id !== userId))

  const renderPhrase = (number) =>
      <span className={`badge bg-${users.length ? 'primary' : 'danger'}`}>
          {number
              ? prettify(number)
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
