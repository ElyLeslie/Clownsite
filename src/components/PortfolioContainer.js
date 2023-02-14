import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Header from './Header'
import Footer from './Footer'
import "../styles/Section.css"
import actualBG from "../utils/pexels-roberto-nickson-2775196.jpg"

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');


  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
      }
      if (currentPage === 'Contact') {
    return <Contact />;}
    return;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="h-100 w-100 d-inline-block" style={{backgroundImage: "url(https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg)", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", overflow: "scroll"}}>
      <header>
        <Header/>
      </header>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className='d-flex w-100 makeCenter flex-wrap'>
      {renderPage()}
      </div>
      
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
