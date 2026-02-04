import { IconX, IconChevronRight } from '@tabler/icons-react'
import { NavLink } from 'react-router-dom'
import { navLinks, socials } from '../../../const'

export const MobileMenu = ({ open, setOpen }) => {
    return (
        <>
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
                w-full sm:max-w-[350px]
                bg-white z-50 shadow-2xl rounded-none sm:rounded-r-md
                transform transition-transform duration-300 ease-in-out
                ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="p-6 flex flex-col gap-6 h-full">

                    {/* Close */}
                    <button
                        onClick={() => setOpen(false)}
                        className=" p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer w-8 h-8 flex items-center justify-center text-gray-400 hover:text-black"
                    >
                        <IconX size={22} />
                    </button>



                    <ul className="flex flex-col gap-5 font-semibold text-[15px]">
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <NavLink
                                    to={link.path}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `group flex items-center justify-between cursor-pointer font__poppins transition-all ${isActive
                                            ? "text-[#1c1c1c] font-semibold"
                                            : "text-gray-700 font-medium hover:text-[#1c1c1c] hover:font-semibold"
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
        </>
    )
}
