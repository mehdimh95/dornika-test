/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-blue': '#388AEA',
        'pale-blue-green': '#E8F4FF',
        'fade-gray': '#D6D6D6',
      },
    },
  },
  plugins: [],
};
