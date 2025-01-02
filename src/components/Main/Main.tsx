import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../../pages/Home';

const Main = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default Main;
