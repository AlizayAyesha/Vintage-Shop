/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: '#FAFAFA',
        amber_alpha: 'rgba(218, 165, 32, 0.1)', // Assuming alpha version
        papaya_whip: '#FFEFD5',
        jet: '#343434',
        butterscotch: '#F4A460',
        caf_noir: '#4B371C',
        licorice: '#1A1110',
        red: '#FF0000',
      },
      screens: {
        sm: '635px',
        md: '1000px',
        lg: '1200px',
        xl: '1400px',
        xxl: '1600px',
      },
      animation: {
        fadeInDown: 'fadeInDown 0.5s ease-in-out',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        inExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      },
      boxShadow: {
        shadowDark: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
