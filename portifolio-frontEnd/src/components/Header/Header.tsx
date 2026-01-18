import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/dsc.jpg";
import img3 from "../../assets/eu_na_school.png";
import Carousel from "../Carousel/Carousel";

export default function Header() {
  const images = [img1, img3];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="w-[80%] min-h-[50vh] mx-auto flex flex-col md:flex-row items-center justify-center mt-6 py-8">
      {/* Coluna esquerda - imagem */}
      <div className="relative w-[240px] h-[300px] rounded-full overflow-hidden shadow-xl flex-shrink-0">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 rounded-full ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            alt="slide"
          />
        ))}
      </div>

      {/* Coluna direita - texto */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.6 }}
        className="flex flex-col mt-10 md:mt-0 md:ml-12 justify-center md:text-left text-gray-900 dark:text-gray-100 w-full md:w-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.8 }}
          className="text-4xl text-center font-extrabold tracking-tight leading-snug"
        >
          Hey there,<br /> my name is
          <span className="block text-blue-900 text-5xl dark:text-indigo-400 mt-1">
            Joffrey Sewane
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.8 }}
          className="mt-6 text-lg text-center font-semibold"
        >
          Software Engineer &
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.8 }}
          className="mt-2 text-lg text-center text-red-900 opacity-90"
        >
          Devloper
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.8 }}
          className="mt-4"
        >
          <Carousel />
        </motion.div>
      </motion.div>
    </header>
  );
}
