import React from 'react';
import Users from './layouts/users';
import {Route} from 'react-router-dom';
import Main from './layouts/main';
import Login from './layouts/login';
import Navbar from './components/ui/navbar';
import UserPage from './components/page/usersPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Route path='/' exact component={Main}/>
      <Route path="/users/:userId?" exact component={Users} />
      <Route path='/login/:type?' component={Login}/>
      <Route path='/users/:userId/:edit' exact component={UserPage}/>
    </>
  );
};

export default App;
