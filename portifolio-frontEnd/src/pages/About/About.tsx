import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-serif flex flex-col justify-between">
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      {/* Content */}
      <main className="flex-1 flex justify-center px-6 py-20">
        <div className="w-full max-w-6xl space-y-20">

          {/* Intro */}
          <section className="text-center bg-blue-50 p-10 rounded-2xl border-2 border-blue-200">
            <h1 className="text-4xl font-bold text-blue-800 mb-6">
              About Me & This Portfolio
            </h1>
            <p className="text-gray-800 max-w-4xl mx-auto leading-relaxed text-lg">
              I am <strong>Jofrey Lourenço Seuane</strong>, a Software Engineer
              focused on building modern, scalable, and efficient web
              applications. This portfolio was created to showcase my skills,
              highlight selected projects, and demonstrate how I approach
              problem-solving using modern web technologies.
            </p>
          </section>

          {/* About Cards */}
          <section className="grid grid-cols-  md:grid-cols-3 gap-10">
            {[
              {
                icon: "fa-code",
                title: "What I Do",
                text: "I design and develop web applications, perform system analysis, and apply software engineering best practices to deliver reliable, maintainable, and scalable solutions with a strong focus on user experience."
              },
              {
                icon: "fa-laptop-code",
                title: "About This Portfolio",
                text: "This portfolio presents personal and academic projects that reflect my technical growth, problem-solving mindset, and ability to work with modern frameworks and development tools. Each project emphasizes clean design, performance, and usability."
              },
              {
                icon: "fa-gears",
                title: "Technologies Used",
                text: "This portfolio was built using React with TypeScript and styled with Tailwind CSS. The focus was on responsive design, performance, clean architecture, and modern UI practices. Version control and modern workflows were applied to ensure code quality and maintainability."
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl transition border-2 border-blue-200"
              >
                <i className={`fa-solid ${card.icon} text-5xl text-blue-800 mb-6`}></i>
                <h3 className="font-semibold text-2xl text-blue-900 mb-4">{card.title}</h3>
                <p className="text-gray-800 leading-relaxed text-base">{card.text}</p>
              </motion.div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
