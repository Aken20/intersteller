import React, { useEffect } from 'react';

const StarField = () => {
  useEffect(() => {
    // Create stars
    const createStars = () => {
      const container = document.querySelector('.star-container');
      if (!container) return;

      // Clear existing stars
      container.innerHTML = '';

      // Add static stars
      for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 4}s`;
        container.appendChild(star);
      }

      // Add shooting stars
      for (let i = 0; i < 3; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.top = `${Math.random() * 100}%`;
        shootingStar.style.animationDelay = `${Math.random() * 8}s`;
        container.appendChild(shootingStar);
      }
    };

    createStars();
    window.addEventListener('resize', createStars);

    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);

  return (
    <>
      <div className="star-container fixed inset-0 pointer-events-none z-0" />
      <div className="nebula z-0" />
    </>
  );
};

export default StarField;