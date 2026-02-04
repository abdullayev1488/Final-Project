import { IconShoppingCart, IconX, IconTrash, IconPlus, IconMinus, IconTruck } from "@tabler/icons-react";
import { useEffect } from "react";

export const Basket = ({ isOpen, setIsOpen }) => {

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [setIsOpen]);

    return (
        <>
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                    }`}
            />
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[350px] bg-white z-[999] shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Title */}
                <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <IconShoppingCart size={20} className="text-gray-900" />
                            <span className="absolute -top-1.5 -right-1.5 bg-[#ff512f] text-white text-[8px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">
                                1
                            </span>
                        </div>
                        <h2 className="font__orbitron text-[13px] font-bold uppercase tracking-wider text-gray-900">
                            Shopping Cart
                        </h2>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-gray-400 hover:text-black"
                    >
                        <IconX size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-5 py-6">
                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex items-center justify-center mb-2">
                            <IconTruck size={25} className="text-[#ff512f]" />
                        </div>
                        <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden relative mb-2">
                            <div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#ff512f] to-[#dd2476] rounded-full"
                                style={{ width: '60%' }}
                            />
                        </div>
                        <p className="text-center text-[11px] text-gray-500 font__poppins">
                            Spend <span className="font-bold text-black">$110.00</span> more for <span className="font-bold text-black uppercase">Free Shipping</span>
                        </p>
                    </div>

                    {/* Static Card */}
                    <div className="flex gap-3 p-3 border border-gray-100 rounded-xl relative group bg-white shadow-sm">
                        <div className="w-18 h-18 bg-[#F6F7F9] rounded-lg flex items-center justify-center shrink-0">
                            <img src="/img/photos/1.png" alt="Product" className="w-full h-full object-contain" />
                        </div>

                        <div className="flex-1 flex flex-col justify-center gap-1">
                            <h3 className="font__orbitron text-[11px] font-bold text-gray-900 leading-snug pr-4">
                                AURORA GLIDE WIRELESS
                            </h3>

                            <div className="flex items-center justify-between mt-1">
                                <div className="flex items-center border border-gray-200 rounded overflow-hidden h-6">
                                    <button className="px-1.5 py-[6px] cursor-pointer hover:bg-gray-100 hover:text-black transition-colors text-gray-400">
                                        <IconMinus size={10} />
                                    </button>
                                    <span className="px-1.5  text-[10px] font-bold text-gray-800">1</span>
                                    <button className="px-1.5 py-[6px] cursor-pointer hover:bg-gray-100 hover:text-black transition-colors text-gray-400">
                                        <IconPlus size={10} />
                                    </button>
                                </div>
                                <span className="text-[13px] font-bold text-gray-900">$90.00</span>
                            </div>
                        </div>

                        <button className="absolute cursor-pointer top-2 right-2 text-gray-300 hover:text-red-500 transition-colors">
                            <IconTrash size={18} />
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-5 border-t border-gray-100 bg-white shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                    <div className="flex items-center justify-between mb-4">
                        <span className="font__orbitron font-bold uppercase text-[11px] text-gray-900 tracking-wider">Subtotal:</span>
                        <span className="font__orbitron font-bold text-base text-gray-900">$90.00</span>
                    </div>

                    <div className="space-y-2">
                        <button className="w-full py-3.5 border border-gray-200 rounded-lg font__orbitron font-bold text-gray-800 hover:bg-gradient-to-r from-[#ff512f] to-[#dd2476] hover:text-white transition-all uppercase text-[10px] tracking-widest cursor-pointer text-center">
                            View Cart
                        </button>
                        <button className="w-full py-3.5 bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white rounded-lg font__orbitron font-bold hover:shadow-lg transition-all uppercase text-[10px] tracking-widest cursor-pointer text-center">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
