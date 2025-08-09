import { useMemo } from 'react';
import { assignLanes } from '../utils/laneUtils.js';
import { calculateDateRange, generateTimeMarkers } from '../utils/dateUtils.js';
import { calculateTimelineWidth } from '../utils/layoutUtils.js';

export function useTimeline(items, zoomLevel = 1) {
  const timelineData = useMemo(() => {
    const lanes = assignLanes(items);
    const { startDate, endDate, extendedEndDate, totalDays } = calculateDateRange(items);
    const timeMarkers = generateTimeMarkers(startDate, extendedEndDate, totalDays, zoomLevel);
    const timelineWidth = calculateTimelineWidth(totalDays, zoomLevel);
    
    return {
      lanes,
      startDate,
      endDate,
      totalDays,
      timeMarkers,
      timelineWidth,
      stats: {
        totalItems: items.length,
        totalLanes: lanes.length
      }
    };
  }, [items, zoomLevel]);

  return timelineData;
}
