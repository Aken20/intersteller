import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phenomenon } from '../types';

interface PhenomenonPageProps {
  phenomenon: Phenomenon;
}

const PhenomenonPage: React.FC<PhenomenonPageProps> = ({ phenomenon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      <div className="h-[50vh] relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 opacity-50" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-white text-center z-10"
        >
          {phenomenon.title}
        </motion.h1>
      </div>

      <div ref={ref} className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="prose prose-invert max-w-none"
        >
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-gray-300 text-lg">{phenomenon.description}</p>
          </div>

          {phenomenon.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
              <p className="text-gray-300">{section.content}</p>
            </motion.div>
          ))}

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Further Reading</h3>
            <ul className="list-disc pl-5">
              {phenomenon.links.map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PhenomenonPage;