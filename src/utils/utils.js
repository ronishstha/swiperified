import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export const cn = (...args) => {
  return twMerge(clsx(args));
};

export const isItemActive = (index, currentIndex) => {
  return index === currentIndex;
};

export const getSlideStyle = (
  index,
  currentIndex,
  dragStart,
  dragOffset,
  sliderHeight
) => {
  let baseTranslate = (index - currentIndex) * 100 + 100;
  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;

  if (index === previousIndex) {
    baseTranslate -= 150;
  } else if (index === nextIndex) {
    baseTranslate -= 35;
  } else if (index === currentIndex) {
    baseTranslate -= 95;
  } else if (index < currentIndex) {
    baseTranslate -= 300;
  } else if (index > currentIndex) {
    baseTranslate += 200;
  }

  const dragTranslate =
    dragStart !== null ? (-dragOffset / sliderHeight) * 100 : 0;

  const transform = `translateY(calc(${baseTranslate}% + ${dragTranslate}%))`;
  const transition = dragStart !== null ? "none" : "transform 0.3s ease-out";

  return {
    transform,
    transition,
  };
};
