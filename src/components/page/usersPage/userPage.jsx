import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import api from '../../../api';
import UserEdit from '../userEdit/';
import UserInfo from './userInfo';

const UserPage = () => {
  const {userId} = useParams();
  const {edit} = useParams();
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, []);

  if (edit) {
    return user ? <UserEdit user={user}/> : <h1>loading...</h1>;
  } else {
    return user ? <UserInfo user={user}/> : <h1>loading...</h1>;
  }
};

export default UserPage;
