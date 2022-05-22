module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'syne': ['Syne', 'sans-serif'], 
      },
      colors:{
        'primary' : '#16253a',
        'dgray' : '#f0ebe5',
      },
      fontSize:{
        'tiny': '.775rem',
      },
      transitionProperty: {
        'height': 'height',
        'opacity': 'opacity',
        'padding': 'padding',
        'left' : 'left',
      },
      backgroundImage: {
        'prestige': "url('images/prestige.png')",
        'royal': "url('images/royal.png')",
        'imperial': "url('images/imperial.png')",
        'dubai': "url('images/dubai.png')",
        'japan': "url('images/japan.png')",
        'bali': "url('images/bali.png')",
      },
      letterSpacing: {
        'semiultra' : '0.5rem',
        'ultra' : '1rem',
      },
    },
  },
  plugins: [],
}
