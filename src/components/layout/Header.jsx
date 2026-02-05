import { useState, useEffect } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import { navLinks, navIcons } from "../../const";
import { Basket } from "../ui/Drawer/Basket";
import { MobileMenu } from "../ui/Drawer/MobileMenu";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
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
    <>
      <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg py-5" : "bg-transparent py-5"
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
            <NavLink to="/">
              <img className="w-[130px]" src="/img/Logo.webp" alt="Logo" />
            </NavLink>
          </div>

          <ul className="hidden md:flex gap-10 font-poppins py-[12px] text-[15px]">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `cursor-pointer font__poppins transition-all duration-300 ${isActive
                      ? "text-[#1c1c1c] font-semibold"
                      : "text-gray-700 font-medium hover:text-[#1c1c1c] hover:font-semibold"
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Icons (Desktop) */}
          <div className="flex gap-1 sm:gap-4 text-gray-700">
            {navIcons.map((item) => (
              <div
                key={item.name}
                className="relative cursor-pointer group flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-all"
                onClick={() => item.name === "cart" && setCartOpen(true)}
              >
                <item.Icon
                  className="group-hover:text-black transition-colors"
                  size={22}
                />
                {(item.name === "heart" || item.name === "cart") && (
                  <span className="absolute -top-1 -right-1 bg-[#ff512f] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {item.name === "heart" ? "2" : "5"}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Hamburger */}

        </div>
        <MobileMenu open={open} setOpen={setOpen} />
      </nav>

      <Basket isOpen={cartOpen} setIsOpen={setCartOpen} />
    </>
  );
};
