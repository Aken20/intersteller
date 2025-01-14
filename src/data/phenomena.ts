import { Phenomenon } from '../types';

export const phenomena: Phenomenon[] = [
  {
    id: 'black-holes',
    title: 'Black Holes',
    shortDescription: 'Explore the most mysterious objects in the universe',
    description: 'Black holes are regions of spacetime where gravity is so strong that nothing can escape, not even light.',
    sections: [
      {
        title: 'Event Horizon',
        content: 'The boundary marking the point of no return around a black hole.',
      },
      {
        title: 'Singularity',
        content: 'The infinitely dense point at the center of a black hole.',
      },
      {
        title: 'Hawking Radiation',
        content: 'Theoretical radiation emitted by black holes due to quantum effects.',
      },
    ],
    links: [
      {
        title: 'NASA Black Holes Guide',
        url: 'https://science.nasa.gov/astrophysics/focus-areas/black-holes',
      },
    ],
  },
  {
    id: 'neutron-stars',
    title: 'Neutron Stars',
    shortDescription: 'Dense stellar remnants with extreme properties',
    description: 'Neutron stars are the collapsed cores of massive stars, containing a mass greater than our Sun in a sphere only about 20 kilometers in diameter.',
    sections: [
      {
        title: 'Formation',
        content: 'Created in the aftermath of a massive supernova explosion.',
      },
      {
        title: 'Properties',
        content: 'Incredibly dense, with powerful magnetic fields and rapid rotation.',
      },
    ],
    links: [
      {
        title: 'ESA Neutron Stars',
        url: 'https://www.esa.int/Science_Exploration/Space_Science/Neutron_stars',
      },
    ],
  },
  // Add more phenomena here...
];