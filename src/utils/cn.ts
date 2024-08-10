import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @description A utility function to merge classnames with tailwindcss.
 * cn is a shorthand for clsx and twMerge. It means "classnames".
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default cn;
