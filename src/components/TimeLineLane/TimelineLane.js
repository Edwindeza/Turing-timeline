import React from 'react';
import TimelineItem from '../TimeLineItem/TimelineItem';
import './TimelineLane.css';

function TimelineLane({ lane, laneIndex, startDate, totalDays, timelineWidth }) {
  return (
    <div className="timeline-lane">
      <div className="lane-label">Lane {laneIndex + 1}</div>
      <div className="lane-content" style={{ width: `${timelineWidth + 95}px` }}>
        {lane.map((item) => (
          <TimelineItem
            key={item.id}
            item={item}
            startDate={startDate}
            totalDays={totalDays}
          />
        ))}
      </div>
    </div>
  );
}

export default TimelineLane;
