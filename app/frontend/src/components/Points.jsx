import React from 'react';
import '../styles/components/Points.css'

const Points = () => {
  return (
    <div
      className="user-points-container"
    >
      <span>Seus pontos:</span>
      <span data-testid="user-points">pontos</span>
    </div>
  );
};

export default Points;
