import React from 'react';

const Curriculum: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 font-serif text-gray-900">
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header */}
        <header className="bg-blue-800 text-white px-10 py-12">
          <h1 className="text-3xl font-bold tracking-wide">
            Jofrey Lourenço Seuane
          </h1>
          <p className="text-lg italic opacity-90">Software Engeneer</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <p><i className="fa-solid fa-envelope mr-2"></i>jofreylourenco50@gmail.com</p>
            <p><i className="fa-solid fa-phone mr-2"></i>+258 848 917 703</p>
            <p><i className="fa-solid fa-location-dot mr-2"></i>Maputo, Moçambique</p>
            <p><i className="fa-solid fa-cake-candles mr-2"></i>25-07-2002 • Masculino</p>
            <p className="md:col-span-2">
              <i className="fa-brands fa-linkedin mr-2"></i>
              <a
                href="https://www.linkedin.com/in/jofrey-lourenco-sewane-3559a6325"
                target="_blank"
                className="underline"
              >
                linkedin.com/in/jofrey-lourenco-sewane
              </a>
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="mt-8 inline-flex items-center gap-2 bg-white text-blue-800 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            <i className="fa-solid fa-download"></i>
           Download as (PDF)
          </button>
        </header>

        {/* Content */}
        <main className="p-10 space-y-10">
          {/* Experience */}
          <section>
            <h2 className="text-lg font-semibold text-blue-800 border-b border-blue-800 pb-1 mb-4 flex items-center gap-2">
              <i className="fa-solid fa-briefcase"></i>
              Professional Experience
            </h2>
            <p className="font-medium">Informátic teacher</p>
            <p className="text-sm ">Saz Training School, Matola</p>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-semibold text-blue-800 border-b border-blue-800 pb-1 mb-4 flex items-center gap-2">
              <i className="fa-solid fa-graduation-cap"></i>
              Education
            </h2>

            <div className="mb-4">
              <div className="flex justify-between font-medium ">
                <span>Lic. em Engenharia em Tecnologias e Sistemas de Informação</span>
                <span className="text-sm">2022 – 2025</span>
              </div>
              <p className="text-sm ">Universidade Joaquim Chissano — Maputo</p>
              <p className="text-sm text-gray-500 mt-1">
           
              Specialized in Software Engineering, he possesses solid knowledge in application development,
               systems analysis, and agile methodologies, with an interest in creating innovative 
               technological solutions that meet market needs.
              </p>
            </div>

            <div className="mb-2">
              <div className="flex justify-between">
                <span className="font-medium">12ª Classe do ESG</span>
                <span className="text-sm">2019</span>
              </div>
              <p className="text-sm ">Bonifácio Gruveta Secondary School — Matola</p>
            </div>

            <div>
              <div className="flex justify-between">
                <span className="font-medium">10th grade of the ESG</span>
                <span className="text-sm">2017</span>
              </div>
              <p className="text-sm ">Khongolote Secondary School — Matola</p>
            </div>
          </section>

          {/* Languages & Skills */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-semibold text-blue-800 border-b border-blue-800 pb-1 mb-4 flex items-center gap-2">
                <i className="fa-solid fa-language"></i>
                Languages
              </h2>
              <div className="flex items-center gap-3 ">
  <i className="fa-solid fa-language text-blue-800"></i>

  <span className="flex items-center gap-2">
    <i className="fa-solid fa-chevron-right text-blue-600 text-xs"></i>
    Portuguese
  </span> <br /> <br /> <br />

  <span className="flex items-center gap-2">
    <i className="fa-solid fa-chevron-right text-blue-600 text-xs"></i>
    English
  </span>

  <span className="flex items-center gap-2">
    <i className="fa-solid fa-chevron-right text-blue-600 text-xs"></i>
    Changana
  </span>
</div>

            </div>

            <div>
              <h2 className="text-lg font-semibold text-blue-800 border-b border-blue-800 pb-1 mb-4 flex items-center gap-2">
                <i className="fa-solid fa-gears"></i>
                Skills
              </h2>
              <ul className="list-disc list-inside ">
                <li>Software Engineering</li>
                <li>Systems Analysis</li>
                <li>Agile Methodologies</li>
                <li>Project Management</li>
                <li>Computer Tutoring</li>
              </ul>
            </div>
          </section>

          {/* Courses */}
          <section>
            <h2 className="text-lg font-semibold text-blue-800 border-b border-blue-800 pb-1 mb-4 flex items-center gap-2">
              <i className="fa-solid fa-certificate"></i>
              Courses
            </h2>

            <p className="font-medium ">Web Development (Freelancing)</p>
            <p className="text-sm  mb-2">
            Front-end, back-end, databases, and modern frameworks.
            </p>

            <p className="font-medium " >Angular with TypeScript (Udemy)</p>
   
          </section>
        </main>
      </div>
    </div>
  );
};

export default Curriculum;