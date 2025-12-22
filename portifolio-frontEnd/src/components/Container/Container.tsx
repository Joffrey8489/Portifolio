import { FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Container() {
  const skills = [
    { icon: <FaLaptopCode className="text-blue-500 text-3xl" />, label: "Website Development" },
    { icon: <FaMobileAlt className="text-blue-500 text-3xl" />, label: "App Development" },
    { icon: <FaServer className="text-blue-500 text-3xl" />, label: "IT Consultory" },
    { icon: <FaServer className="text-blue-500 text-3xl" />, label: "System Analysis" },
  ];

  // Typing effect
  const fullText = "I started my software journey from 12th grade where I had the first experience with coding in Pascal. Through that, I learned to love the process of creating from scratch. Then I entered Joaquim Chissano University and this has led me to software development as it fulfills my skills and now I can call myself a Fullstack developer.";
  const [typedText, setTypedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  // Calcular o tempo total da animação dos skills
  const skillAnimationDuration = 0.6; // duração de cada skill
  const skillAnimationDelay = 0.9; // delay entre skills
  const totalSkillTime = skillAnimationDelay * (skills.length - 1) + skillAnimationDuration;

  // Iniciar o typing após os skills
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartTyping(true);
    }, totalSkillTime * 1000); // converter para ms
    return () => clearTimeout(timeout);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!startTyping) return;
    let i = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText[i]);
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 25); // velocidade de escrita
    return () => clearInterval(interval);
  }, [startTyping]);

  return (
    <section className="md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-start gap-12">
        {/* Left side: skills */}
        <div className="space-y-8 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * skillAnimationDelay, duration: skillAnimationDuration }}
              className="flex items-center space-x-20"
            >
              {skill.icon}
              <span className="text-lg font-semibold text-black">{skill.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Right side: about me + stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={startTyping ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <h2 className="text-4xl font-bold text-black">About me</h2>
          <p className="text-black text-l text-justify">
            {typedText}
            {startTyping && <span className="border-r-2 border-black animate-pulse ml-1"></span>}
          </p>

          <div className="grid grid-cols-3 gap-8 mt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-500">20+</p>
              <p className="text-black text-2l">Completed Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-500">95%</p>
              <p className="text-black text-2l">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-500">4+</p>
              <p className="text-black text-2l">Years of Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
