import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { phenomena } from '../data/phenomena';

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: index * 0.15,
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }),
  hover: {
    y: -12,
    scale: 1.04,
    rotateX: 5,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const categories = {
  'Cosmic Objects': ['black-holes', 'neutron-stars', 'magnetars', 'hypernovae'],
  'Quantum & Space-Time': ['quantum-entanglement', 'time-dilation', 'time-loops', 'spacetime-crystals'],
  'Cosmic Mysteries': ['dark-matter-and-dark-energy', 'cosmic-microwave-background', 'fermi-paradox', 'great-filter'],
  'Advanced Technology': ['dyson-spheres', 'alien-megastructures', 'singularity-engines', 'star-gates', 'quantum-computers'],
  'Space Exploration': ['exoplanets', 'terraforming', 'nanotech-swarms'],
};

const Explore = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-vh-100 bg-black pt-5">
      <div className="container-fluid container-xxl px-4 px-sm-5">
        {Object.entries(categories).map(([category, ids], categoryIndex) => (
          <div key={category} ref={ref} className="py-5">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="display-4 fw-bold cosmic-text mb-5"
            >
              {category}
            </motion.h2>
            <div className="row g-4 g-md-5">
              {ids.map((id, index) => {
                const phenomenon = phenomena.find(p => p.id === id);
                return phenomenon ? (
                  <div key={phenomenon.id} className="col-12 col-md-6 col-lg-4">
                    <motion.div
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      whileHover="hover"
                      className="phenomenon-card card h-100 bg-black bg-opacity-40 rounded-4 overflow-hidden"
                    >
                      <Link to={`/${phenomenon.id}`} className="text-decoration-none">
                        <div className="cosmic-card-gradient ratio ratio-16x9">
                          <motion.div
                            className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ duration: 0.6 }}
                          />
                        </div>
                        <div className="card-body p-4 p-lg-5 position-relative">
                          <h3 className="card-title h2 fw-bold cosmic-title mb-4">
                            {phenomenon.title}
                          </h3>
                          <p className="card-text text-light-emphasis lead">
                            {phenomenon.shortDescription}
                          </p>
                          <div className="position-absolute bottom-0 end-0 p-4 opacity-0 translate-middle-x 
                                      group-hover:opacity-100 group-hover:translate-x-0">
                            <span className="text-primary d-flex align-items-center gap-2">
                              Explore 
                              <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                →
                              </motion.span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore; 