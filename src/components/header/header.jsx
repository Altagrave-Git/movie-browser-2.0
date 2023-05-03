import React, { useEffect } from "react";
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

  useEffect (() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    }
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, [])

  return (
    <header ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <Link to="/" >Movie Browser</Link>
        </div>
        <ul className="header__nav">
          {
            headerNav.map((nav, index) => (
              <li key={index} className={index === active ? "active" : ""}>
                <Link to={nav.path}>{nav.label}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </header>
  );
}

export default Header;