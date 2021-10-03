import React from "react";
import GoogleFonts, { Font } from "react-google-font-loader";
import "./styles/global.scss";

const fonts: Font[] = [
  {
    font: "Caveat",
    weights: [400],
  },
  {
    font: "Caveat Brush",
    weights: [400],
  },
];

function App() {
  return (
    <>
      <GoogleFonts fonts={fonts} />
      <h1>Rick</h1>
    </>
  );
}

export default App;
