
import { useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaAngular, FaReact, FaJs, FaJava, FaPhp, FaGithub } from "react-icons/fa";

const techs = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaAngular />, name: "Angular" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaJs />, name: "TypeScript/JS" },
  { icon: <FaJava />, name: "Java + Spring" },
  { icon: <FaPhp />, name: "PHP" },
  { icon: <FaGithub />, name: "GitHub" },
];

export default function Carousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

  

    let scroll = 0;
    const speed = 1; 

    const animate = () => {
      if (!container) return;
      scroll += speed;
      if (scroll >= container.scrollWidth / 2) scroll = 0;
      container.scrollLeft = scroll;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="overflow-hidden py-3 w-ful ">
      <div
        ref={containerRef}
        className="flex space-x-14  text-blue-500 text-4xl items-center"
      >
        {techs.map((tech, index) => (
          <div key={index} className="flex flex-col  items-center justify-center">
            {tech.icon}
            <span className="text-sm mt-1">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
