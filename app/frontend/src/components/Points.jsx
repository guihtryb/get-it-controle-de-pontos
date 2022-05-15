import React from 'react';
import { getUserPoints } from '../utilis';

import '../styles/components/Points.css';

function Points() {
  return (
    <div
      className="user-points-container"
    >
      <span>Seus pontos:</span>
      <span data-testid="user-points">{getUserPoints()}</span>
    </div>
  );
}

export default Points;
