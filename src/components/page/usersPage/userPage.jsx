import React, {useEffect, useState} from 'react';
import QualitiesList from '../../common/qualities/qualitiesList';
import {useHistory, useParams} from 'react-router-dom';
import api from '../../../api';
import UserEdit from '../userEdit/';

const UserPage = () => {
  const {userId} = useParams();
  const {edit} = useParams();
  const history = useHistory();
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, []);

  if (edit) {
    return user ? <UserEdit user={user}/> : <h1>loading...</h1>;
  } else {
    return (
      <div>
        {user ? <>
          <h1>{user.name}</h1>
          <h2>Профессия: {user.profession.name}</h2>
          <QualitiesList qualities={user.qualities}/>
          <p>completedMeetings: {user.completedMeetings}</p>
          <h2>Rate: {user.rate}</h2>
          <button onClick={() => history.push(`/users/${userId}/edit`)}>Изменить</button>
        </> : <h1>loading...</h1>}
      </div>
    );
  }
};

export default UserPage;
