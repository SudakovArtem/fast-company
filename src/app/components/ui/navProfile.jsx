import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const NavProfile = props => {
  const [isOpen, setOpen] = useState(false);
  const { currentUser } = useAuth();
  const toggleMenu = () => {
    setOpen(prevState => !prevState);
  };
  return (
    <div className="dropdown" onClick={toggleMenu}>
      <div className="btn dropdown-toggle d-flex align-items-center">
        <div className="me-2">{currentUser.name}</div>
        <img
          className="img-responsive rounded-circle"
          src={currentUser.image}
          alt="img"
          height="40"
        />
      </div>
      <div className={"w-100 dropdown-menu " + (isOpen ? "show" : "")}>
        <Link to={`/users/${currentUser._id}`} className="dropdown-item">Profile</Link>
        <Link to='/logout' className="dropdown-item">Log Out</Link>
      </div>
    </div>
  );
};

export default NavProfile;
