import Navbar from "../../components/navbar/Navbar";
import event_hub from "../../assets/event_hub.jpg";
import src from "../../assets/src.png";
import secure_chat from "../../assets/secure_chat.png";
import central_animes from "../../assets/central_animes.png";
function Works() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Complete e-commerce platform (Event hub) with shopping cart, checkout and integrated payment system.",
      image: event_hub,
      technologies: ["react", "node", "postgresql", "tailwind", "spring", "github", "html", "css", "typescript"],
      github: ""
    },
    {
      id: 2,
      title: "Corparate Secure Chat",
      description: " An app that can be use to enshure privancy and avoid industrial espionage and loss of confidential information, using high levar of criptography",
      image: secure_chat,
      technologies: ["html", "css","thymeleaf","typescript", "spring", "postgresql",],
      github: ""
    },
    {
      id: 3,
      title: "Citizen registration system",
      description: "A system for registering and managing citizens with an analytical Dashboard for organizing dat",
      image: src,
      technologies: ["html", "css","thymeleaf","typescript", "spring", "postgresql",],
      github: ""
    },
  
    {
      id: 4,
      title: "Entertainment Website Template",
      description: "A complete frontend template with many functionalities of a web app for a website for entertainment and streaming",
      image: central_animes,
      technologies: [, "html", "css", "javascript"],
      github: ""
    },
    {
      id: 5,
      title: "Task Manager ",
      description: "Plataforma imobiliária com busca avançada, galeria de fotos e sistema de agendamentos.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800",
      technologies: ["angular", "typescript","html","css", "github"],
      github: ""
    }
  ];

  const techIcons = {
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    spring: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    thymeleaf: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/thymeleaf/thymeleaf-original.svg",

  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              MY <span className="text-blue-600">Works</span>
            </h1>
            <p className="text-gray-900 text-lg max-w-2xl mx-auto">
            Projects developed with the latest technologies and best development practices.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Project {project.id}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-900 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                  Tecnologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <div 
                          key={tech} 
                          className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
                          title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                        >
                          <img 
                            src={techIcons[tech]} 
                            alt={tech}
                            className="w-5 h-5"
                          />
                          <span className="text-sm font-medium text-gray-700">
                            {tech.charAt(0).toUpperCase() + tech.slice(1)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <div className="border-t pt-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      <svg 
                        className="w-5 h-5" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Ver no GitHub
                      <svg 
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    <a href="" className=" ms-5 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">Site</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Like what you see?
            </h2>
            <p className="text-gray-900 mb-8 max-w-2xl mx-auto">
            Let's work together! Get in touch to discuss your next project.
            </p>
            <a 
              href="/Contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;