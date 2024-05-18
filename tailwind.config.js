import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  fontFamily : {

    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
    Marchiel : ['Marchiel','serif']
    

  },
  plugins: [],
});