import React from 'react';
import './styles/NavTabs.css';


const styles = {
  navbarStyle: {
    background: 'green',
    justifyContent: 'flex-end',
    display: 'flex',
  },
};



function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
       <p>Tournament Royale</p>
    <ul style={styles.navbarStyle} className="nav nav-tabs">

      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#booking"
          onClick={() => handlePageChange('Booking')}
          className={currentPage === 'Booking' ? 'nav-link active' : 'nav-link'}
        >
          Booking
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
         Login
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;