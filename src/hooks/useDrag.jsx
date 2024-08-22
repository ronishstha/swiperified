import { useEffect, useRef, useState } from "react";

const useDrag = (items) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef(null);

  const handleDragStart = (clientY) => {
    setDragStart(clientY);
  };

  const handleDragMove = (clientY) => {
    if (dragStart === null) return;
    const offset = dragStart - clientY;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (dragOffset > 50 && currentIndex < items - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (dragOffset < -50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    setDragStart(null);
    setDragOffset(0);
  };

  useEffect(() => {
    const slider = sliderRef.current;

    const touchStart = (e) => handleDragStart(e.touches[0].clientY);
    const touchMove = (e) => handleDragMove(e.touches[0].clientY);
    const mouseDown = (e) => handleDragStart(e.clientY);
    const mouseMove = (e) => handleDragMove(e.clientY);

    slider.addEventListener("touchstart", touchStart);
    slider.addEventListener("touchmove", touchMove);
    slider.addEventListener("touchend", handleDragEnd);
    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mousemove", mouseMove);
    slider.addEventListener("mouseup", handleDragEnd);
    slider.addEventListener("mouseleave", handleDragEnd);

    return () => {
      slider.removeEventListener("touchstart", touchStart);
      slider.removeEventListener("touchmove", touchMove);
      slider.removeEventListener("touchend", handleDragEnd);
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mousemove", mouseMove);
      slider.removeEventListener("mouseup", handleDragEnd);
      slider.removeEventListener("mouseleave", handleDragEnd);
    };
  }, [currentIndex, dragStart, dragOffset]);

  return {
    currentIndex,
    dragStart,
    dragOffset,
    sliderRef,
  };
};

export default useDrag;
