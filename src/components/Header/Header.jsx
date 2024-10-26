import React, { useEffect, useRef } from "react";
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#schedule",
    display: "Schedule",
  },
  {
    path: "#classes",
    display: "Classes",
  },
  {
    path: "#pricing-plan",
    display: "Pricing",
  },
];

const Header = ({ toggleTheme, isDarkMode }) => {
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/* ============ Logo ============ */}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="Fit Body Logo" />
            </div>
            <h2>Fit Body</h2>
          </div>

          {/* ============ navigation menu ============ */}
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="nav__item" key={index}>
                  <a onClick={handleClick} href={item.path}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ============== nav right =============== */}
          <div className="nav__right">
            <button className="register__btn">Register</button>
            {/* Dark/Light Mode Toggle */}
            <button onClick={toggleTheme} className="ml-4">
              {isDarkMode ? (
                <i className="ri-sun-line text-yellow-400 text-2xl"></i> // Light mode icon
              ) : (
                <i className="ri-moon-line text-2xl text-indigo-500"></i> // Dark mode icon
              )}
            </button>

            <span className="mobile__menu">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
