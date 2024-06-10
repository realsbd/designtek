import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const formatDateTimeGMT = (date) => {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true, // Use 12-hour format
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
};


export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "numeric", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};