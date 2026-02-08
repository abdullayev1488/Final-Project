import { Link } from "react-router-dom";

export const ErrorPage = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-20">
            {/* Robot Image */}
            <div className="max-w-[550px] w-full animate-float">
                <img
                    src="/img/404.webp"
                    alt="404 Error - Page Not Found"
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Text Content */}
            <div className="text-center">
                <h1 className="text-[28px] md:text-[36px] font-orbitron font-bold text-gray-900 mb-4 tracking-wider">
                    PAGE NOT FOUND
                    {/* NƏ PİS OLDU ƏƏƏ */}
                </h1>
                <p className="text-gray-600 font-poppins text-lg mb-10 translate-y-[-5px]">
                    We’re sorry — Something has gone wrong on our end.
                </p>

                {/* Buttons Container */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        to="/"
                        className="min-w-[200px] py-4 px-8 rounded-lg text-white font-poppins font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-r from-[#b851f5] to-[#f551b8] text-center"
                    >
                        Back To Homepage
                    </Link>
                    <Link
                        to="/shop"
                        className="min-w-[200px] py-4 px-8 rounded-lg text-white font-poppins font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-r from-[#b851f5] to-[#f551b8] text-center"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </section>
    );
};
