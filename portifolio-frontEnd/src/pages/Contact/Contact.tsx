import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-black flex flex-col justify-between font-serif">
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      {/* Content */}
      <main className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">
           Lets Talk
          </h1>
          <p className=" mb-10">
          Get in touch or connect with me on social media.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email */}
            <a
              href="mailto:jofreylourenco@gmail.com"
              className="group bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <i className="fa-solid fa-envelope text-3xl text-blue-700 mb-4 group-hover:scale-110 transition"></i>
              <p className="font-medium">Email</p>
              <p className="text-sm text-gray-800 mt-1">
                jofreylourenco50@gmail.com
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+258848917703"
              className="group bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <i className="fa-solid fa-phone text-3xl text-blue-700 mb-4 group-hover:scale-110 transition"></i>
              <p className="">Phone numbers</p>
              <p className="text-sm text-gray-800 mt-1">
                +258 848 917 703 <br />
                +258 833 422 782
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jofrey-lourenco-sewane-3559a6325"
              target="_blank"
              className="group bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <i className="fa-brands fa-linkedin text-3xl text-blue-700 mb-4 group-hover:scale-110 transition"></i>
              <p className="font-medium">LinkedIn</p>
              <p className="text-sm text-gray-800 mt-1">
                Conect on LinkedIn
              </p>
            </a>

            {/* Location */}
            <div className="bg-white p-6 rounded-xl shadow">
              <i className="fa-solid fa-location-dot text-3xl text-blue-700 mb-4"></i>
              <p className="font-medium">Localização</p>
              <p className="text-sm text-gray-800 mt-1">
               khongolote, Matola, Maputo-Moçambique
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}

    </div>
  );
};

export default Contact;
