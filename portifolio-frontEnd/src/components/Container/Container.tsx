import {
  FaLaptopCode,
  FaMobileAlt,
  FaCogs,
  FaUsersCog,
  FaBolt,
  FaUsers,
  FaCode,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Container() {


  const fullText =
    "I started my software journey from 12th grade where I had the first experience with coding in Pascal. Through that, I learned to love the process of creating from scratch. Then I entered Joaquim Chissano University and this has led me to software development as it fulfills my skills and now I can call myself a Fullstack developer.";

  const [typedText, setTypedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  const skillAnimationDuration = 0.6;
  const skillAnimationDelay = 0.2;
  const skills = [
    {
      icon: <FaLaptopCode />,
      label: "Website Development",
      description: "Modern, responsive and high-performance web applications.",
    },
    {
      icon: <FaMobileAlt />,
      label: "App Development",
      description: "Cross-platform mobile applications with great UX.",
    },
    {
      icon: <FaCogs />,
      label: "Systems Analysis",
      description: "Analysis and design of scalable and efficient systems.",
    },
    {
      icon: <FaUsersCog />,
      label: "IT Consultancy",
      description: "Technology guidance aligned with business needs.",
    },
    {
      icon: <FaBolt />,
      label: "Fast Learner",
      description: "Quickly adapts to new technologies and development environments.",
    },
    {
      icon: <FaUsers />,
      label: "Teamwork",
      description: "Strong collaboration skills in multidisciplinary teams.",
    },
    {
      icon: <FaCode />,
      label: "Multiple Programming Languages",
      description: "Experience with several programming languages and paradigms.",
    },
  ];
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartTyping(true);
    }, skills.length * 300);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!startTyping) return;
    let i = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText[i]);
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [startTyping]);

  return (
    <section className="px-6 md:px-20 ">
      <div className="max-w-6xl mx-auto space-y-14">

          <h2 className="text-4xl font-bold text-blue-900 text-center">
            Skills
          </h2>
<div className="overflow-x-auto w-full bg-gray-100 scrollbar-none">
          <div className="flex  min-w-max cols-1 sm:cols-2 lg:cols-4 gap-23">
  {skills.map((skill, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * skillAnimationDelay,
        duration: skillAnimationDuration,
      }}
      className="
        group
        bg-white
        rounded-2xl
        p-8
        text-center
        border border-gray-300
        shadow-sm
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        max-w-xs
        break-words
      "
    >
      <div className="
        text-blue-500 text-4xl mb-5
        group-hover:scale-110
        transition-transform 
      ">
        {skill.icon}
      </div>

      <h3 className="text-xl font-semibold text-black mb-3">
        {skill.label}
      </h3>

      <p className="text-black text-sm leading-relaxed">
        {skill.description}
      </p>
    </motion.div>
  ))}
</div>
</div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={startTyping ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-center"
        >
          <h2 className="text-4xl font-bold text-blue-900">
            About me
          </h2>

          <p className="text-black text-xl text-justify max-w-4xl mx-auto">
            {typedText}
            {startTyping && (
              <span className="border-r-2 border-black animate-pulse ml-1"></span>
            )}
          </p> 

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-500">20+</p>
              <p className="text-black">Completed Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-500">95%</p>
              <p className="text-black">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-500">4+</p>
              <p className="text-black">Years of Experience</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
