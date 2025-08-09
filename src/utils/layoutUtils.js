export function calculateTimelineWidth(totalDays, zoomLevel = 1) {
  const baseDayWidth = 15;
  const dayWidth = baseDayWidth * zoomLevel;
  const calculatedWidth = (totalDays * dayWidth);
  
  if (zoomLevel >= 1) {
    return Math.max(800, calculatedWidth);
  } else {
    return Math.max(300, calculatedWidth);
  }
}
