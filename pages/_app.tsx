import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { motion } from "framer-motion";
import { NextFontWithVariable } from "@next/font/dist/types";
import { useContext, useState } from "react";
import PhotoIndexContext from "../components/Common/photoIndexContext";

const switzer: NextFontWithVariable = localFont({
  src: "./Switzer-Variable.woff2",
  style: "normal",
  variable: "--font-switzer",
  display: "swap",
  weight: "100 900",
});
const switzerItalic: NextFontWithVariable = localFont({
  src: "./Switzer-VariableItalic.woff2",
  style: "italic",
  variable: "--font-switzer-italic",
  display: "swap",
  weight: "100 900",
});
const bespokeSlab: NextFontWithVariable = localFont({
  src: "./BespokeSlab-Variable.woff2",
  style: "normal",
  variable: "--font-bespokeSlab",
  display: "swap",
  weight: "100 900",
});
const bespokeSlabItalic: NextFontWithVariable = localFont({
  src: "./BespokeSlab-VariableItalic.woff2",
  style: "italic",
  variable: "--font-bespokeSlab-italic",
  display: "swap",
  weight: "100 900",
});
const technor: NextFontWithVariable = localFont({
  src: "./Technor-Variable.woff2",
  style: "normal",
  variable: "--font-technor",
  display: "swap",
  weight: "100 900",
});

export default function App({ Component, pageProps }: AppProps) {
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <PhotoIndexContext.Provider value={{ photoIndex, setPhotoIndex }}>
      <motion.main
        className={`
      ${switzer.variable} 
      ${switzerItalic.variable} 
      ${bespokeSlab.variable} 
      ${bespokeSlabItalic.variable} 
      ${technor.variable}  
      h-full w-screen font-sans bg-light text-dark`}
      >
        <Component {...pageProps} />
      </motion.main>
    </PhotoIndexContext.Provider>
  );
}
