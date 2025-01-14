import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phenomenon } from '../types';

interface PhenomenonPageProps {
  phenomenon: Phenomenon;
}

const PhenomenonImage: React.FC<{ image: string; title: string }> = ({ image, title }) => (
  <div className="w-1/2 flex items-center justify-center">
    <img src={image} alt={title} className="max-w-full h-auto" />
  </div>
);

const PhenomenonPage: React.FC<PhenomenonPageProps> = ({ phenomenon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16 flex">
      <div className="h-[50vh] relative flex items-center justify-center w-1/2">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 opacity-50" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 20 }}
          className="phenomenon-title mb-4"
        >
          {phenomenon.title}
        </motion.h1>
      </div>

      <div ref={ref} className="max-w-4xl mx-auto px-4 py-16 w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="prose max-w-none phenomenon-title"
        >
          <div className="mb-12">
            <h2 className="phenomenon-overview mb-4">Overview</h2>
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
              <h3 className="phenomenon-section-title mb-4">{section.title}</h3>
              <p className="text-gray-300">{section.content}</p>
            </motion.div>
          ))}

          <div className="mt-12">
            <h3 className="phenomenon-section-title mb-4">Further Reading</h3>
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

      {phenomenon.image && (
        <PhenomenonImage image={phenomenon.image} title={phenomenon.title} />
      )}
    </div>
  );
};

export default PhenomenonPage;