import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import PhenomenonPage from './pages/PhenomenonPage';
import StarField from './components/StarField';
import { phenomena } from './data/phenomena';

function App() {
  return (
    <Router>
      <div className="min-h-screen cosmic-bg relative">
        <StarField />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {phenomena.map((phenomenon) => (
              <Route
                key={phenomenon.id}
                path={`/${phenomenon.id}`}
                element={<PhenomenonPage phenomenon={phenomenon} />}
              />
            ))}
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;