import React, { useState, useEffect } from "react";
import { socials, footerLinks } from "../../const";
import { ScrolTop } from "../custom/ScrolTop";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F8F9FA] pt-20 pb-7 relative">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand Area */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/img/Logo.webp" alt="logo" className="w-40" />
            </div>
            <p className="text-gray-600 font-poppins text-sm leading-relaxed mb-8 max-w-sm">
              Enhance your gaming experience with precision-engineered gear that pushes the limits of performance.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social,id) => (
                <Link
                  key={id}
                  to={social.path}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #ff416c, #ff4b2b)" }}
                >
                  <social.Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Area */}
          {footerLinks.map((column, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="font-orbitron font-bold text-[17px] text-gray-900 mb-8 tracking-wider whitespace-nowrap">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <span
                      className="text-gray-500 cursor-pointer hover:text-black font-poppins text-sm transition-colors duration-300 inline-block"
                    >
                      {link.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Area */}
          <div className="lg:col-span-1">
            <h4 className="font-orbitron font-bold text-[17px] text-gray-900 mb-8 tracking-wider">
              Newsletters
            </h4>
            <div className="flex flex-col gap-4">
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden p-1 gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full py-3 px-5 outline-none font-poppins text-sm text-gray-600 placeholder:text-gray-400 min-w-0"
                />
                <button className="bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white font-bold py-3 px-6 rounded-md text-sm font-orbitron transition-all hover:shadow-lg active:scale-95 cursor-pointer whitespace-nowrap">
                  Submit
                </button>
              </div>
              <div className="mt-4">
                <h4 className="font-orbitron font-bold text-[17px] text-gray-900 mb-4 tracking-wider">
                  Payments
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg" alt="Visa" className="h-5 w-auto object-contain opacity-70 hover:opacity-100 transition-all cursor-pointer" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 w-auto object-contain opacity-70 hover:opacity-100 transition-all cursor-pointer" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5 w-auto object-contain opacity-70 hover:opacity-100 transition-all cursor-pointer" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-5 w-auto object-contain opacity-70 hover:opacity-100 transition-all cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="pt-7 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500 font-poppins italic">
            Copyright © 2024 RisingBamboo. All Rights Reserved.
          </p>

          <ScrolTop showScroll={showScroll} scrollTop={scrollTop} />
        </div>
      </div>
    </footer>
  );
};
