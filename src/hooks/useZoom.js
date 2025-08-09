import { useState, useCallback } from 'react';

export function useZoom() {
  const [zoomLevel, setZoomLevel] = useState(1);

  const zoomIn = useCallback(() => {
    setZoomLevel(prevZoom => Math.min(prevZoom * 1.5, 5));
  }, []);

  const zoomOut = useCallback(() => {
    setZoomLevel(prevZoom => Math.max(prevZoom / 1.5, 0.2));
  }, []);

  const resetZoom = useCallback(() => {
    setZoomLevel(1);
  }, []);

  const handleWheelZoom = useCallback((event) => {
    const delta = event.deltaY;
    const zoomFactor = 1.05;
    
    if (delta < 0) {
      setZoomLevel(prevZoom => Math.min(prevZoom * zoomFactor, 5));
    } else {
      setZoomLevel(prevZoom => Math.max(prevZoom / zoomFactor, 0.2));
    }
  }, []);

  return {
    zoomLevel,
    zoomIn,
    zoomOut,
    resetZoom,
    handleWheelZoom
  };
}
