import React from 'react';
import User from "./user";
import SearchStatus from "./searchStatus";

const Users = ({titles, users, ...rest}) => {
  return (
    <>
      <SearchStatus number={users.length} />
      {
        users.length ?
          <table className="table">
            <thead>
              <tr>
                {titles.map(title => <th key={title} scope="col">{title}</th>)}
              </tr>
            </thead>
            <tbody>
              {users.map(user => <User key={user._id} {...user} {...rest}/>)}
            </tbody>
          </table>
          : null
      }
    </>
  );
};

export default Users;
