import React, { useState } from "react";
import "./Nav.css";
import NetflixLogo from "../../images/logo.png";
import Avatar from "../../images/avatar.png";
import SearchLogo from "../../images/search-icon.svg";
import BellLogo from "../../images/bell-logo.svg";

function Nav() {
  const [show, setShow] = useState(false);
  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
    return () => {
      window.pageYOffset = null;
    };
  };

  return (
    <div
      className={
        show
          ? "bg-black nav flex fixed top-0 justify-between w-full p-5 h-20 z-1"
          : "nav flex fixed top-0 justify-between w-full p-5 h-20 z-1"
      }
    >
      <div className="flex">
        <img
          className="nav__logo w-40 object-contain left-0"
          src={NetflixLogo}
          alt="Netflix-logo"
        />
        <h1 className="nav__text">Home</h1>
        <h1 className="nav__text">TV Shows</h1>
        <h1 className="nav__text">Movies</h1>
        <h1 className="nav__text">New and Popular</h1>
        <h1 className="nav__text">My List</h1>
      </div>
      <div className="flex right-10">
        <img
          src={SearchLogo}
          alt=""
          className="nav__search w-8 m-2 object-contain"
        />
        <img
          src={BellLogo}
          alt=""
          className="nav__bell w-8 m-2 object-contain"
        />
        <img
          className="nav__avatar w-8 m-2 object-contain"
          src={Avatar}
          alt="Netflix-avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
