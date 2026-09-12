/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#fde5db',
        'bg-alt': '#fadfc9',
        surface: '#ffffff',
        'text-primary': '#a16c37',
        'text-secondary': '#a3692d',
        'text-body': '#9a6f42',
        'text-dark': '#5c3a1e',
        'accent-gold': '#c9974f',
        ink: '#3d2712',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      boxShadow: {
        'brand-sm': '0 4px 12px rgba(161, 108, 55, 0.08)',
        'brand': '0 10px 25px -5px rgba(161, 108, 55, 0.12), 0 8px 10px -6px rgba(161, 108, 55, 0.08)',
        'brand-lg': '0 20px 35px -10px rgba(161, 108, 55, 0.18), 0 10px 15px -5px rgba(161, 108, 55, 0.1)',
        'polaroid': '0 14px 30px -6px rgba(92, 58, 30, 0.16), 0 6px 14px -4px rgba(92, 58, 30, 0.1)',
      },
    },
  },
  plugins: [],
};
