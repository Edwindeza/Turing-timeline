import React from 'react';
import './TimelineAxis.css';

function TimelineAxis({ timeMarkers, timelineWidth }) {
  return (
    <div className="timeline-axis" style={{ width: `${timelineWidth}px` }}>
      {timeMarkers.map((marker, index) => (
        <div 
          key={index}
          className="time-marker"
          style={{ left: `${marker.position}%` }}
        >
          <div className="time-marker-line"></div>
          <div className="time-marker-label">
            {marker.date.toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
              day: marker.date.getDate() !== 1 ? 'numeric' : undefined
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimelineAxis;
