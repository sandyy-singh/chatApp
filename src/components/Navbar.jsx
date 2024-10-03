import React from "react";
import "../style/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">My chat</span>
      <div className="user">
        <img
          src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
          alt=""
        />
        <span>sandeep</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
