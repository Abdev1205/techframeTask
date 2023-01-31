/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        background:{
          900:"#F7F8FA",
        },
        primary:{
          900:'#3B82F6',
        },
        primary2:{
          900:'rgba(59, 130, 246, 0.1)'
        }
      },
      fontSize: {
        vs: '0.65rem',
        
      },
      translate: {
        full: '200%',
      }
    },
  },
  plugins: [],
}
