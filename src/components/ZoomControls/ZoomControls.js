import React from 'react';
import './ZoomControls.css';

function ZoomControls({ zoomLevel, zoomIn, zoomOut, resetZoom }) {
  return (
    <div className="zoom-controls">
      <button className="zoom-button" onClick={zoomOut} title="Zoom Out (or Mouse Wheel)">
        −
      </button>
      <button className="zoom-reset" onClick={resetZoom} title="Reset Zoom">
        {Math.round(zoomLevel * 100)}%
      </button>
      <button className="zoom-button" onClick={zoomIn} title="Zoom In (or Mouse Wheel)">
        +
      </button>
      <span className="zoom-hint">Mouse wheel to zoom</span>
    </div>
  );
}

export default ZoomControls;
