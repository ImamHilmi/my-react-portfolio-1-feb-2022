import React from 'react';
import "./Topbar.scss";
import { Person, Mail } from '@mui/icons-material';

const Topbar = ({ setMenuOpen, menuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">My Portfolio</a>
          <div className="itemContainer">
            <Person className="icon" />
            <a href="https://api.whatsapp.com/send?phone=6285157455371&amp;text=Hello%20,I%20wanna%20ask%20something%20about%20this%20website.%20Can%20you%20help%20me?%0D%0A%0AName%3A%20%0D%0AQuestion%3A%20%0D%0AEmail%3A%20" className="linkWA" target="_blank" rel="noopener">+62 851 - 5745 - 5371</a>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>imam.hilmi253@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Topbar;
