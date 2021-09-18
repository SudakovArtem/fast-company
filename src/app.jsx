import React from 'react';
import Users from './layouts/users';
import {Route} from 'react-router-dom';
import Main from './layouts/main';
import Login from './layouts/login';
import Navbar from './components/navbar';
import User from './components/user';

const App = () => {
  return (
    <>
      <Navbar />
      <Route path='/' exact component={Main}/>
      <Route path='/users' exact component={Users}/>
      <Route path='/login' component={Login}/>
      <Route path='/users/:userId' component={User}/>
    </>
  );
};

export default App;
