import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-nav">
      <Link to="/">Streamer</Link>
      <Link to="/"> All Streams</Link>
      <Link to="/streams/new"> Login</Link>
    </div>
  );
};

export default Header;
