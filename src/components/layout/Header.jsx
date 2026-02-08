import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconMenu2 } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import { navLinks, navIcons } from "../../const";
import { Basket } from "../ui/Drawer/Basket";
import { Wishlist } from "../ui/Drawer/Wishlist";
import { MobileMenu } from "../ui/Drawer/MobileMenu";
import { AuthModal } from "../ui/modals/AuthModal";
import { SearchModal } from "../ui/modals/SearchModal";
import {
  setBasketOpen,
  setAuthOpen,
  setSearchOpen,
  setWishlistOpen,
  setMobileMenuOpen
} from "../../redux/slice/uiSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const { basketOpen, wishlistOpen, authOpen, searchOpen, mobileMenuOpen } = useSelector((state) => state.ui);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle icon click
  const handleIconClick = (name) => {
    if (name === "basket") dispatch(setBasketOpen(true));
    if (name === "user") dispatch(setAuthOpen(true));
    if (name === "search") dispatch(setSearchOpen(true));
    if (name === "wishlist") dispatch(setWishlistOpen(true));
  };

  return (
    <>
      <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg py-5" : "bg-transparent py-5"}`}>
        <div className="max-w-screen-2xl mx-auto px-4 flex items-center justify-between transition-all duration-300">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => dispatch(setMobileMenuOpen(true))}
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
                    `cursor-pointer font-poppins transition-all duration-300 ${isActive
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

          {/* Desktop Icons */}
          <div className="flex gap-1 sm:gap-4 text-gray-700">
            {navIcons.map((item) => (
              <div
                key={item.name}
                className="relative cursor-pointer group flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-all"
                onClick={() => handleIconClick(item.name)}
              >
                <item.Icon className="group-hover:text-black transition-colors" size={22} />
                {(item.name === "wishlist" || item.name === "basket") && (
                  <span className="absolute -top-1 -right-1 bg-[#ff512f] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {item.name === "wishlist" ? "1" : "1"}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <MobileMenu open={mobileMenuOpen} setOpen={(val) => dispatch(setMobileMenuOpen(val))} />
      </nav>

      <Basket isOpen={basketOpen} setIsOpen={(val) => dispatch(setBasketOpen(val))} />
      <Wishlist isOpen={wishlistOpen} setIsOpen={(val) => dispatch(setWishlistOpen(val))} />
      <AuthModal isOpen={authOpen} onClose={() => dispatch(setAuthOpen(false))} />
      <SearchModal isOpen={searchOpen} onClose={() => dispatch(setSearchOpen(false))} />
    </>
  );
};

