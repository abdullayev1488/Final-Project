import { useState, useEffect } from "react";
import { IconMenu2, IconX, IconChevronRight } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import { socials, navLinks, navIcons } from "../../const";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}>
      <div className="max-w-screen-2xl mx-auto px-4 flex items-center justify-between transition-all duration-300">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className="md:hidden cursor-pointer text-gray-700 hover:text-black"
          >
            <IconMenu2 size={24} />
          </button>
          <img className="w-[130px]" src="/img/photos/Logo.webp" alt="Logo" />
        </div>

        <ul className="hidden md:flex gap-10 font-poppins py-[12px] text-[15px]">
          {navLinks.map((link) => (
            <li key={link.title}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `cursor-pointer font__poppins transition-all duration-300 ${isActive
                    ? "text-black font-semibold"
                    : "text-gray-700 font-medium hover:text-black hover:font-semibold"
                  }`
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icons (Desktop) */}
        <div className="flex gap-4 text-gray-700">
          {navIcons.map((item) => (
            <div key={item.name} className="relative cursor-pointer group">
              <item.Icon
                className="hover:text-black transition-colors"
                size={22}
              />
              {(item.name === "heart" || item.name === "cart") && (
                <span className="absolute -top-2 -right-2 bg-[#ff512f] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {item.name === "heart" ? "2" : "5"}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Hamburger */}

      </div>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-md
                transition-all duration-300 ease-out
                ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full
                w-full max-w-[300px]
                bg-white z-50 shadow-2xl rounded-r-md
                transform transition-transform duration-300 ease-in-out
                ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-6 h-full">

          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className=" cursor-pointer text-gray-500 hover:text-black transition"
          >
            <IconX size={24} />
          </button>



          <ul className="flex flex-col gap-5 font-semibold text-[15px]">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center justify-between cursor-pointer font__poppins transition-all ${isActive ? "text-[#dd2476]" : "text-gray-700 hover:text-black"
                    }`
                  }
                >
                  <span className="tracking-wide">{link.title}</span>
                  <IconChevronRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Contact & Socials */}
          <div className="mt-auto pt-10 border-t border-gray-100">
            <div className="flex flex-col gap-2 mb-6">
              <p className="text-[13px] font-bold text-[#1c1c1c] font__poppins">
                Call Us: <span className="text-black font-medium not-italic">+994703160116</span>
              </p>
              <p className="text-[13px] font-bold text-[#1c1c1c] font__poppins">
                Email: <span className="text-black font-medium not-italic">e.abdullayev99@gmail.com</span>
              </p>
            </div>

            <div className="flex gap-3">
              {socials.map((social, index) => (
                <div
                  key={index}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-500 hover:rotate-[360deg]"
                  style={{
                    background: "linear-gradient(90deg, #ff512f, #dd2476)",
                    backgroundSize: "200% auto"
                  }}
                >
                  <social.Icon size={15} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
