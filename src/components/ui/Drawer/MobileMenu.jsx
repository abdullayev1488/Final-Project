import { IconX, IconChevronRight } from '@tabler/icons-react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { navLinks, socials } from '../../../const'
import { setMobileMenuOpen } from '../../../redux/slice/uiSlice'

export const MobileMenu = () => {
    const dispatch = useDispatch();
    const open = useSelector((state) => state.ui.mobileMenuOpen);

    return (
        <>
            {/* Overlay */}
            <div
                onClick={() => dispatch(setMobileMenuOpen(false))}
                className={`fixed md:hidden inset-0 bg-black/50 backdrop-blur-md
                transition-all duration-300 ease-out
                ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
            />

            {/* Mobile Menu */}
            <div
                className={`fixed md:hidden top-0 left-0 h-full
                w-full min-[451px]:w-[350px]
                bg-white z-50 shadow-2xl rounded-none sm:rounded-r-md
                transform transition-transform duration-300 ease-in-out
                ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="p-6 flex flex-col gap-6 h-full">

                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                        {/* Logo */}
                        <img className="w-[150px]" src="/img/Logo.webp" alt="Logo" />

                        {/* Close */}
                        <button
                            onClick={() => dispatch(setMobileMenuOpen(false))}
                            className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer w-8 h-8 flex items-center justify-center text-gray-400 hover:text-black"
                        >
                            <IconX size={22} />
                        </button>
                    </div>

                    <ul className="flex flex-col gap-5 font-semibold text-[15px]">
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <NavLink
                                    to={link.path}
                                    onClick={() => dispatch(setMobileMenuOpen(false))}
                                    className={({ isActive }) =>
                                        `group flex items-center justify-between cursor-pointer font-poppins transition-all ${isActive
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
                            <p className="text-[13px] font-bold text-[#1c1c1c] font-poppins">
                                Call Us: <span className="text-black font-medium not-italic">+994703160116</span>
                            </p>
                            <p className="text-[13px] font-bold text-[#1c1c1c] font-poppins">
                                Email: <span className="text-black font-medium not-italic">e.abdullayev99@gmail.com</span>
                            </p>
                        </div>

                        <div className="flex gap-3">
                            {socials.map((social, id) => (
                                <NavLink
                                    key={id}
                                    to={social.path}
                                    className="w-7 h-7 rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-500 hover:rotate-[360deg] shadow-sm"
                                    style={{
                                        background: "linear-gradient(90deg, #ff512f, #dd2476)",
                                        backgroundSize: "200% auto"
                                    }}
                                >
                                    <social.Icon size={15} />
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
