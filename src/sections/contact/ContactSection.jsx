import { Link } from 'react-router-dom';
import { contactSocials } from '../../const';

export const ContactSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left Column: Form */}
                    <div className="flex-1">
                        <h2 className="text-[28px] md:text-[30px] font-orbitron font-bold text-gray-900 mb-4 tracking-wider">
                            GET IN TOUCH
                        </h2>
                        <p className="text-gray-600 font-poppins mb-10 text-sm md:text-base max-w-xl">
                            Please enter the details of your request. A member of our support staff will respond as soon as possible.
                        </p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="YOUR NAME"
                                        className="w-full px-5 py-4 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg outline-none focus:border-purple-500 transition-all font-poppins text-xs uppercase tracking-widest placeholder:text-gray-400"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="YOUR EMAIL"
                                        className="w-full px-5 py-4 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg outline-none focus:border-purple-500 transition-all font-poppins text-xs uppercase tracking-widest placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="SUBJECT"
                                    className="w-full px-5 py-4 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg outline-none focus:border-purple-500 transition-all font-poppins text-xs uppercase tracking-widest placeholder:text-gray-400"
                                />
                            </div>

                            <div>
                                <textarea
                                    rows="8"
                                    placeholder="YOUR MESSAGE"
                                    className="w-full px-5 py-4 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg outline-none focus:border-purple-500 transition-all font-poppins text-xs uppercase tracking-widest placeholder:text-gray-400 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="inline-block py-4 px-12 rounded-lg text-white font-poppins font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-r from-[#b851f5] to-[#f551b8] text-center"
                            >
                                Submit Now
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Info */}
                    <div className="lg:w-[400px] space-y-10 pt-10 lg:pt-24">
                        <div className="space-y-6">
                            <p className="font-poppins text-sm text-gray-800 leading-relaxed">
                                <span className="font-bold">Address:</span> Bakı şəh. , Ayaz İsmayılov 8A, Biznes Mərkəzi 2-ci mərtəbə.
                            </p>

                            <p className="font-poppins text-sm text-gray-800 leading-relaxed">
                                <span className="font-bold">Email:</span>support@domain.com
                            </p>

                            <p className="font-poppins text-sm text-gray-800 leading-relaxed">
                                <span className="font-bold">Call Us:</span>+994 51 319 24 14
                            </p>

                            <p className="font-poppins text-sm text-gray-800 leading-relaxed">
                                <span className="font-bold">Opening time:</span> Our store has re-opened for shopping, exchanges every day <span className="font-bold">11am to 7pm</span>
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {contactSocials.map((social, id) => (
                                <Link
                                    key={id}
                                    to={social.path}
                                    className={`w-10 h-10 rounded-md flex items-center justify-center text-white ${social.color} hover:scale-110 transition-transform shadow-sm`}
                                >
                                    <social.Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
