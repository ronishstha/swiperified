import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export const cn = (...args) => {
  return twMerge(clsx(args));
};

export const isItemActive = (index, currentIndex) => {
  return index === currentIndex;
};
