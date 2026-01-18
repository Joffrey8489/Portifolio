import { Link, useLocation } from "react-router-dom";

export default function Navlinks() {
  const location = useLocation();

  const links = [
    { to: "/Home", label: "Home", icon: "fa-house" },
    { to: "/About", label: "About me", icon: "fa-user" },
    { to: "/CV", label: "CV", icon: "fa-file-lines" },
    { to: "/Works", label: "( Works )", icon: "fa-briefcase" },
    { to: "/Contact", label: "Contacts", icon: "fa-phone" },
  ];

  const active = (path: string) =>
    location.pathname === path
      ? "text-[#0d1b4a] font-bold"
      : "text-[#1c1c1d]";

  return (
    <>
      {/* NAVBAR TOPO */}
      <nav className="
        fixed top-0 left-0 w-full h-[50px]
        bg-[#eaeaeaf9]
        flex items-center justify-center
        px-5
        shadow-[10px_0px_10px_0px_#e3e2e2]
        rounded-md
        font-['Lucida_Sans','Lucida_Grande',Verdana,sans-serif]
        z-50
      ">
        {/* LOGO */}
        <div className="
          absolute left-[100px]
          ml-10
          flex items-center gap-4
          font-cursive font-black
          text-[#054e9c]
          text-lg
        ">
          $ewaneDeV
        </div>

        {/* LINKS DESKTOP */}
        <ul className="
          hidden md:flex
          ml-[100px]
          gap-[30px]
          list-none
          p-0
        ">
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              <li
                className={`
                  flex items-center
                  text-[14px]
                  font-semibold
                  cursor-pointer
                  transition-all duration-200
                  hover:font-bold hover:text-[15px] hover:text-[#121111]
                  ${active(link.to)}
                `}
              >
                <i className={`fa-solid ${link.icon} mr-[6px]`}></i>
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      {/* NAVBAR MOBILE (BOTTOM – estilo WhatsApp) */}
      <div className="
        fixed bottom-0 left-0 w-full h-[60px]
        bg-[#eaeaeaf9]
        border-t border-gray-300
        flex justify-around items-center
        md:hidden
        shadow-[0_-2px_10px_#e3e2e2]
        z-50
      ">
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            <div
              className={`
                flex flex-col items-center
                text-[11px]
                transition
                ${active(link.to)}
              `}
            >
              <i className={`fa-solid ${link.icon} text-[18px] mb-1`}></i>
              {link.label}
            </div>
          </Link>
        ))}
      </div>

      {/* ESPAÇAMENTO PARA CONTEÚDO */}
      <div className="h-[50px] md:h-0"></div>
      <div className="h-[60px] md:h-0"></div>
    </>
  );
}
