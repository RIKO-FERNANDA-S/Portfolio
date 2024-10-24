/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      'Lilita': ['Lilita One'],
      'Rajdhani': ['Rajdhani'],
      extend: {
        
      }},
    },
    
    plugins: [
      require('daisyui'),
      function ({ addUtilities }) {
        addUtilities({
          '.text-stroke': {
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': 'white',
          },
          '.text-stroke-2': {
            '-webkit-text-stroke-width': '2px',
          },
          '.text-stroke-red': {
            '-webkit-text-stroke-color': 'red',
          },
          // Tambahkan lebih banyak kelas sesuai kebutuhan
        });
      }
    ],
}

