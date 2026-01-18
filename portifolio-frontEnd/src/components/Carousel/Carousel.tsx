import {
  FaHtml5,
  FaCss3Alt,
  FaAngular,
  FaReact,
  FaJs,
  FaJava,
  FaPhp,
  FaGithub,
} from "react-icons/fa";

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
  return (
    <div className="w-full py-3 overflow-x-auto ">
      <div
        className="
          flex
      gap-3
          text-blue-500
          text-4xl
          items-center
          whitespace-nowrap
          justify-start
          md:justify-center
        "
      >
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[100px]"
          >
            {tech.icon} 
            <span className=" text-sm mt-1">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
