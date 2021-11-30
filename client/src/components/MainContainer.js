import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Booking from '../pages/Booking';
import Contact from '../pages/Contact';



export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'Login') {
        return <Login />;
      }
      if (currentPage === 'Booking') {
        return <Booking />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }
  