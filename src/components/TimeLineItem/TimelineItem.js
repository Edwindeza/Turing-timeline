import React from 'react';
import { calculateItemPosition } from '../../utils/dateUtils.js';
import './TimelineItem.css';

function TimelineItem({ item, startDate, totalDays }) {
  const position = calculateItemPosition(item, startDate, totalDays);

  return (
    <div 
      className="timeline-item"
      style={{
        left: `${position.left}%`,
        width: `${position.width}%`,
      }}
      title={`${item.name} (${item.start} - ${item.end})`}
    >
      <div className="timeline-item-content">
        <p className="timeline-item-name">{item.name}</p>
        <p className="timeline-item-dates">
          <span>{item.start} - {item.end}</span>
        </p>
      </div>
    </div>
  );
}

export default TimelineItem;
