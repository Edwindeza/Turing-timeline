import { useState, useCallback, useRef } from 'react';

export function useDateTooltip(startDate, totalDays, timelineWidth) {
  const [tooltip, setTooltip] = useState({ visible: false, date: null, x: 0 });
  const throttleRef = useRef(null);

  const handleMouseMove = useCallback((event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const scrollLeft = event.currentTarget.scrollLeft;

    if (throttleRef.current) {
      clearTimeout(throttleRef.current);
    }

    throttleRef.current = setTimeout(() => {
      const laneLabelsOffset = 95;

      if (x < laneLabelsOffset) {
        setTooltip({ visible: false, date: null, x: 0 });
        return;
      }

      const adjustedX = x - laneLabelsOffset;
      const absoluteX = adjustedX + scrollLeft;

      const percentage = (absoluteX / timelineWidth) * 100;
      const dayOffset = (percentage / 100) * totalDays;
      const currentDate = new Date(startDate);
      currentDate.setDate(currentDate.getDate() + dayOffset);

      const tooltipWidth = 100;
      let tooltipX = x;

      if (adjustedX + tooltipWidth > timelineWidth) {
        tooltipX = x - tooltipWidth;
      }

      setTooltip({
        visible: true,
        date: currentDate,
        x: tooltipX
      });
    }, 8);
  }, [startDate, totalDays, timelineWidth]);

  const handleMouseLeave = useCallback(() => {
    if (throttleRef.current) {
      clearTimeout(throttleRef.current);
    }
    setTooltip({ visible: false, date: null, x: 0 });
  }, []);

  return {
    tooltip,
    handleMouseMove,
    handleMouseLeave
  };
}
