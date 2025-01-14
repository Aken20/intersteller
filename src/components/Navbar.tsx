import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { phenomena } from '../data/phenomena';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Cosmic Explorer
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {phenomena.slice(0, 5).map((item) => (
              <Link
                key={item.id}
                to={`/${item.id}`}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium
                         hover:bg-purple-900/50 transition-all duration-200"
              >
                {item.title}
              </Link>
            ))}
            <div className="relative group">
              <button
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium
                         hover:bg-purple-900/50 transition-all duration-200"
                onClick={() => setIsOpen(!isOpen)}
              >
                More
              </button>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black/90 ring-1 ring-black ring-opacity-5"
                >
                  <div className="py-1 grid grid-cols-1 gap-1">
                    {phenomena.slice(5).map((item) => (
                      <Link
                        key={item.id}
                        to={`/${item.id}`}
                        className="text-gray-300 hover:text-white block px-4 py-2 text-sm
                                 hover:bg-purple-900/50 transition-all duration-200"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;