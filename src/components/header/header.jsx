import React from "react";
import "./header.scss";
import logo from "../../assets/film-icon.svg";
import { Link, useLocation } from "react-router-dom";

const headerNav = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Movies",
    path: "/movie"
  },
  {
    label: "TV Shows",
    path: "/tv"
  }
];

const Header = () => {
  const { location } = useLocation();
  const headerRef = React.useRef(null);

  const active = headerNav.findIndex((item) => item.path === location);

  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}

export default Header;