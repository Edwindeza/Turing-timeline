import React from 'react';
import { useTimeline } from '../../hooks/useTimeline.js';
import { useDateTooltip } from '../../hooks/useDateTooltip.js';
import { useZoom } from '../../hooks/useZoom.js';
import TimelineAxis from '../TimeLineAxis/TimelineAxis.js';
import TimelineLane from '../TimeLineLane/TimelineLane.js';
import TimelineInfo from '../TimeLineInfo/TimelineInfo.js';
import ZoomControls from '../ZoomControls/ZoomControls.js';
import './Timeline.css';

function Timeline({ items }) {
  const { zoomLevel, zoomIn, zoomOut, resetZoom, handleWheelZoom } = useZoom();
  const { lanes, startDate, endDate, totalDays, timeMarkers, timelineWidth, stats } = useTimeline(items, zoomLevel);
  const { tooltip, handleMouseMove, handleMouseLeave } = useDateTooltip(startDate, totalDays, timelineWidth);

  return (
    <div className="timeline-container">
      <h2 className='timeline-title'>Project Timeline</h2>

      <ZoomControls 
        zoomLevel={zoomLevel}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        resetZoom={resetZoom}
      />

      <div 
        className="timeline-content"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheelZoom}
      >
        <TimelineAxis timeMarkers={timeMarkers} timelineWidth={timelineWidth} />

        <div className="timeline-lanes" style={{ width: `${timelineWidth + 95}px` }}>
          {lanes.map((lane, laneIndex) => (
            <TimelineLane
              key={laneIndex}
              lane={lane}
              laneIndex={laneIndex}
              startDate={startDate}
              totalDays={totalDays}
              timelineWidth={timelineWidth}
            />
          ))}
        </div>
      </div>

      <TimelineInfo 
        startDate={startDate}
        endDate={endDate}
        stats={stats}
      />

      {tooltip.visible && (
        <div 
          className="date-tooltip"
          style={{
           left: `${tooltip.x}px`,
          }}
        >
          {tooltip.date && tooltip.date.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}
        </div>
      )}
    </div>
  );
}

export default Timeline;
