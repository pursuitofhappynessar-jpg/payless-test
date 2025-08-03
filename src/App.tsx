import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookNow from './pages/BookNow';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-outfit">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookNow />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;