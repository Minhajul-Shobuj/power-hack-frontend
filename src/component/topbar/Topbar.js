import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
import avatar from "../../images/shobuj.png";
import { Button } from "react-bootstrap";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <span className="logo">Simple Login/Register App</span>
        <div className="topRight">
          <div className="notificationContainer"></div>
          <div className="notificationContainer">
            <Link to="/login">
              <Button variant="primary">Login</Button>
            </Link>
            <Link to="/profile">
              <Button variant="secondary">Register</Button>
            </Link>
            <Button variant="success">Profile</Button>

            <img src={avatar} alt="avatar" className="topAvatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
