export function calculateDateRange(items) {
  const allDates = items.flatMap(item => [new Date(item.start), new Date(item.end)]);
  const startDate = new Date(Math.min(...allDates));
  const originalEndDate = new Date(Math.max(...allDates));
  const extendedEndDate = new Date(originalEndDate);
  
  extendedEndDate.setDate(extendedEndDate.getDate() + 3);
  const totalDays = Math.ceil((extendedEndDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
  return {
    startDate,
    endDate: originalEndDate,
    extendedEndDate,
    totalDays
  };
}

export function generateTimeMarkers(startDate, extendedEndDate, totalDays, zoomLevel = 1) {
  const markers = [];
  const current = new Date(startDate);

  let stepType, stepValue;
  
  if (zoomLevel >= 3) {
    stepType = 'week';
    stepValue = 1;
  } else if (zoomLevel >= 1.5) {
    stepType = 'month';
    stepValue = 1;
  } else if (zoomLevel >= 0.7) {
    stepType = 'month';
    stepValue = 1;
  } else {
    stepType = 'month';
    stepValue = zoomLevel < 0.5 ? 3 : 2;
  }

  while (current <= extendedEndDate) {
    const position = ((current - startDate) / (1000 * 60 * 60 * 24)) / totalDays * 100;
    markers.push({
      date: new Date(current),
      position: position
    });

    if (stepType === 'week') {
      current.setDate(current.getDate() + 7);
    } else {
      current.setMonth(current.getMonth() + stepValue);
      current.setDate(1);
    }
  }

  return markers;
}

export function calculateItemPosition(item, startDate, totalDays) {
  const itemStart = new Date(item.start);
  const itemEnd = new Date(item.end);
  const itemDuration = Math.max(1, Math.ceil((itemEnd - itemStart) / (1000 * 60 * 60 * 24)) + 1);

  const startOffset = Math.ceil((itemStart - startDate) / (1000 * 60 * 60 * 24));
  
  const leftPercent = (startOffset / totalDays) * 100;
  const widthPercent = Math.max((itemDuration / totalDays) * 100, 8);

  return {
    left: leftPercent,
    width: widthPercent
  };
}
