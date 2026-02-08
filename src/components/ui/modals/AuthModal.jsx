import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthOpen } from "../../../redux/slice/uiSlice"; 

export const AuthModal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.ui.authOpen);
    const [activeTab, setActiveTab] = useState("login"); // 'login' or 'register'

    return (
        <div
            onClick={() => dispatch(setAuthOpen(false))}
            className={`fixed flex items-center justify-center inset-0 bg-black/50 backdrop-blur-sm z-[998] transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        >
            {/* Container */}
            <div
                className="relative w-full max-w-[420px] bg-white rounded-[30px] p-8 md:p-10 shadow-2xl animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Tabs */}
                <div className="flex bg-[#f3f3f3] p-2 rounded-full mb-8 font-poppins">
                    <button
                        onClick={() => setActiveTab("login")}
                        className={`flex-1 py-3 text-sm font-bold rounded-full transition-all cursor-pointer ${activeTab === "login"
                            ? "bg-white shadow-md text-black"
                            : "text-gray-500 hover:text-black"
                            }`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setActiveTab("register")}
                        className={`flex-1 py-3 text-sm font-bold rounded-full transition-all cursor-pointer ${activeTab === "register"
                            ? "bg-white shadow-md text-black"
                            : "text-gray-500 hover:text-black"
                            }`}
                    >
                        Register
                    </button>
                </div>

                {/* Content */}
                {activeTab === "login" ? (
                    <div className="animate-in slide-in-from-bottom-2 duration-500 font-poppins" key="login">
                        <h2 className="text-[17px] font-bold mb-6 text-black">
                            Insert your account information:
                        </h2>
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-[11px] font-bold mb-2 text-black">
                                    Email address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="ENTER YOUR EMAIL"
                                    className="w-full px-5 py-4 rounded-[12px] border border-gray-100 bg-gray-50/30 text-[11px] font-medium focus:outline-none focus:border-black focus:bg-white transition-all duration-300 placeholder:text-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block text-[11px] font-bold mb-2 text-black">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="PASSWORD"
                                    className="w-full px-5 py-4 rounded-[12px] border border-gray-100 bg-gray-50/30 text-[11px] font-medium focus:outline-none focus:border-black focus:bg-white transition-all duration-300 placeholder:text-gray-400"
                                />
                            </div>
                            <div className="flex items-center justify-between text-[11px] py-1">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 border-gray-200 rounded accent-black cursor-pointer transition-all"
                                    />
                                    <span className="text-black font-medium group-hover:text-gray-600 transition-colors">
                                        Remember me
                                    </span>
                                </label>
                                <a
                                    href="#"
                                    className="text-black font-medium hover:text-gray-600 transition-all duration-300 underline-offset-2 hover:underline cursor-pointer"
                                >
                                    Lost your password?
                                </a>
                            </div>
                            <button className="w-full bg-black text-white py-4 rounded-[12px] font-bold text-[14px] mt-4 hover:bg-zinc-800 transition-all duration-300 active:scale-[0.98] cursor-pointer shadow-lg hover:shadow-black/20">
                                Login
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="animate-in slide-in-from-bottom-2 duration-500 font-poppins" key="register">
                        <h2 className="text-[17px] font-bold mb-6 text-black">
                            Create your account:
                        </h2>
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-[11px] font-bold mb-2 text-black">
                                    Username <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="USER NAME"
                                    className="w-full px-5 py-4 rounded-[12px] border border-gray-100 bg-gray-50/30 text-[11px] font-medium focus:outline-none focus:border-black focus:bg-white transition-all duration-300 placeholder:text-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block text-[11px] font-bold mb-2 text-black">
                                    Email address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="EMAIL"
                                    className="w-full px-5 py-4 rounded-[12px] border border-gray-100 bg-gray-50/30 text-[11px] font-medium focus:outline-none focus:border-black focus:bg-white transition-all duration-300 placeholder:text-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block text-[11px] font-bold mb-2 text-black">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="PASSWORD"
                                    className="w-full px-5 py-4 rounded-[12px] border border-gray-100 bg-gray-50/30 text-[11px] font-medium focus:outline-none focus:border-black focus:bg-white transition-all duration-300 placeholder:text-gray-400"
                                />
                            </div>
                            <p className="text-[10px] text-gray-500 leading-[1.6] py-1 font-medium italic">
                                Your personal data will be used to support your experience
                                throughout this website, to manage access to your account, and
                                for other purposes described in our privacy policy.
                            </p>
                            <button className="w-full bg-black text-white py-4 rounded-[12px] font-bold text-[14px] mt-2 hover:bg-zinc-800 transition-all duration-300 active:scale-[0.98] cursor-pointer shadow-lg hover:shadow-black/20">
                                Register
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};
