import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { phenomena } from '../data/phenomena';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold cosmic-text mb-6">
            Explore the Cosmos
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8">
            Journey through space and time, from black holes to quantum realms
          </p>
          <Link
            to="/black-holes"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 
                     text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105
                     shadow-lg hover:shadow-purple-500/50"
          >
            Begin Your Journey
          </Link>
        </motion.div>
      </div>

      {/* Featured Phenomena */}
      <div ref={ref} className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-4xl font-bold cosmic-text text-center mb-12"
        >
          Cosmic Phenomena
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phenomena.slice(0, 6).map((phenomenon, index) => (
            <motion.div
              key={phenomenon.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="phenomenon-card rounded-lg overflow-hidden"
            >
              <Link to={`/${phenomenon.id}`}>
                <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500 opacity-75 hover:opacity-100 transition-opacity" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{phenomenon.title}</h3>
                  <p className="text-blue-200">{phenomenon.shortDescription}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;