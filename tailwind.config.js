/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1A3A',
          mid:     '#132250',
          deep:    '#070F22',
          light:   '#1A2F5E',
        },
        red: {
          DEFAULT: '#0f2066',
          light:   '#E84040',
          dark:    '#B01F1F',
        },
        gold: {
          DEFAULT: '#C8A84B',
          light:   '#E8C96A',
          dark:    '#A88830',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          dark:    '#EDE8DF',
        },
      },
      fontFamily: {
        head:  ['"Bebas Neue"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
        body:  ['"DM Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.18em',
        widest3: '0.22em',
      },
      animation: {
        'marquee':     'marquee 22s linear infinite',
        'pulse-dot':   'pulseDot 2s ease-in-out infinite',
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
        'fade-up':     'fadeUp 0.35s ease forwards',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%,100%': { opacity: 1 },
          '50%':     { opacity: 0.3 },
        },
        scrollLine: {
          '0%':   { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%':  { transform: 'scaleY(1)', transformOrigin: 'top' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-navy': `
          linear-gradient(rgba(200,168,75,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,168,75,0.05) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '56px 56px',
      },
    },
  },
  plugins: [],
}
