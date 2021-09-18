import React, {useEffect, useState} from 'react';
import QualitiesList from './qualitiesList';
import {useHistory, useParams} from 'react-router-dom';
import api from '../api';

const User = () => {
  const {userId} = useParams();
  const history = useHistory();
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, []);

  return (
    <div>
      {user ? <>
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities}/>
        <p>completedMeetings: {user.completedMeetings}</p>
        <h2>Rate: {user.rate}</h2>
        <button onClick={() => history.push('/users')}>Все пользователи</button>
      </> : <h1>loading...</h1>}
    </div>
  );
};

export default User;
