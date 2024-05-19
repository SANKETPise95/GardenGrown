import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E9EFC0",
    },
    fontFamily : {
       abc:['Poetsen One', 'sans-serif'],
       figtree: ['Figtree', 'sans-serif'],
       roboto:['Roboto', 'sans-serif'],
       new:['Poetsen One', 'sans-serif'],
       new1:['PT Sans' , 'sans-serif'],
    },
  },
  fontFamily : {

    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
   
    
    
    

  },
  plugins: [],
},
});