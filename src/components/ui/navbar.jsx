import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Navbar = () => {
  const {pathname} = useLocation();
  const links = [
    {
      title: 'Main',
      path: '/'
    },
    {
      title: 'Login',
      path: '/login'
    },
    {
      title: 'Users',
      path: '/users'
    }
  ];

  return (
    <ul className="nav nav-pills">
      {links.map((link) => (
        <li key={link.title} className="nav-item">
          <Link className={link.path === pathname ? 'nav-link active' : 'nav-link'} to={link.path}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
