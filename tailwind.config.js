import tailwindScrollbarHide from 'tailwind-scrollbar-hide'

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      darkGray: 'var(--dark)', 
      background: 'var(--background)',
      foreground: 'var(--foreground)',
    },
  },
};
export const plugins = [
  tailwindScrollbarHide,
];