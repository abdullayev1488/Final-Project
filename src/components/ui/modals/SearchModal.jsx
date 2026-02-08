import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconX, IconSearch, IconChevronDown } from "@tabler/icons-react";
import { setSearchOpen } from "../../../redux/slice/uiSlice";

export const SearchModal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.ui.searchOpen);
    const [category, setCategory] = useState("CATEGORY");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const inputRef = useRef(null);

    const categories = ["All Categories", "Keyboards", "Mouse", "Headsets", "Monitors"];
    const popularSearches = ["Keyboard", "Mouse", "Consoles", "Headphone"];

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [isOpen]);

    return (
        <div
            onClick={() => dispatch(setSearchOpen(false))}
            className={`fixed flex justify-center inset-0 p-6 backdrop-blur-2xl bg-white/60 transition-all duration-500 animate-in fade-in z-[998] ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        >
            {/* Close Button */}
            <button
                onClick={() => dispatch(setSearchOpen(false))}
                className="absolute top-10 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer z-[120]"
            >
                <IconX size={24} className="text-gray-600" />
            </button>

            <div
                className="w-full max-w-5xl mx-auto flex flex-col items-center animate-in zoom-in-95 slide-in-from-top-4 duration-500"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Search Bar*/}
                <div className="w-[95%] sm:w-[80%] md:w-[60%] relative mt-24 md:mt-[110px] px-2 md:px-0">
                    <div className="flex items-center bg-white border-2 border-[#ff512f] rounded-[20px] md:rounded-[26px] overflow-visible shadow-2xl shadow-orange-500/10 active-within:shadow-orange-500/20 transition-shadow">

                        {/* Category Dropdown */}
                        <div className="relative border-r border-gray-100 h-full">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-0.5 md:gap-2 px-2 md:px-8 py-3 md:py-4 text-[10px] md:text-[13px] font-bold text-black uppercase font-poppins cursor-pointer hover:bg-gray-50 rounded-l-[18px] md:rounded-l-full transition-colors whitespace-nowrap min-w-[75px] md:min-w-[160px] h-full"
                            >
                                <span className="truncate max-w-[60px] md:max-w-none">{category}</span>
                                <IconChevronDown size={14} className={`shrink-0 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 w-max min-w-full z-[130] animate-in fade-in slide-in-from-top-2">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => {
                                                setCategory(cat.toUpperCase());
                                                setIsDropdownOpen(false);
                                            }}
                                            className="w-full text-left px-6 py-2.5 cursor-pointer text-[11px] md:text-[12px] font-bold text-gray-500 hover:text-black hover:bg-gray-50 transition-colors uppercase font-poppins"
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search..."
                            className="flex-1 pl-2 pr-2 md:px-8 py-3 md:py-4 text-[10px] md:text-[13px] font-medium text-black placeholder:text-gray-400 focus:outline-none font-poppins uppercase tracking-wider min-w-0"
                        />

                        {/* Search*/}
                        <button className="mr-1 md:mr-2 shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#ff512f] to-[#dd2476] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                            <IconSearch size={18} className="md:w-[22px]" />
                        </button>
                    </div>
                </div>

                {/* Popular Searches */}
                <div className="mt-12 w-full max-w-2xl px-4 text-center animate-in fade-in slide-in-from-bottom-4 delay-300 duration-700">
                    <p className="text-[11px] md:text-[12px] font-bold text-black mb-6 uppercase tracking-widest font-poppins">
                        Popular Search:
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                        {popularSearches.map((item) => (
                            <button
                                key={item}
                                className="px-4 md:px-6 py-2 md:py-2.5 bg-[#f3f3f3] text-[10px] md:text-[12px] font-bold text-black rounded-full hover:bg-black hover:text-white transition-all duration-300 cursor-pointer font-poppins shadow-sm active:scale-90"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
