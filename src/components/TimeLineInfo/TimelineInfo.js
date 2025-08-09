import React from 'react';
import './TimelineInfo.css';

function TimelineInfo({ startDate, endDate, stats }) {
  return (
    <div className="timeline-info">
      <p>
        <strong>Period:</strong> {startDate.toLocaleDateString('en-US')} - {endDate.toLocaleDateString('en-US')}
      </p>
      <p>
        <strong>Total items:</strong> {stats.totalItems} | <strong>Lanes:</strong> {stats.totalLanes}
      </p>
    </div>
  );
}

export default TimelineInfo;
