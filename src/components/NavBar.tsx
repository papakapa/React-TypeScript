import React from "react";


const NavBar : React.FC = () => {
  return (
      <nav>
          <div className="nav-wrapper 1de9b6 teal accent-3 px1">
              <a href="/" className="brand-logo">React-TS</a>
              <ul className="right hide-on-med-and-down">
                  <li><a href="/">Info</a></li>
                  <li><a href="/">List</a></li>
              </ul>
          </div>
      </nav>
  );
};

export default NavBar;