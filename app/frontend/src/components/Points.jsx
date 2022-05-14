import React from 'react';
import '../styles/components/Points.css'
import { getUserPoints } from '../utilis';

const Points = () => {
  return (
    <div
      className="user-points-container"
    >
      <span>Seus pontos:</span>
      <span data-testid="user-points">{getUserPoints()}</span>
    </div>
  );
};

export default Points;
