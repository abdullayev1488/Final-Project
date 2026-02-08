import React from 'react'

export const ChoiceSection = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-24">
                    {/* Why Choose Us */}
                    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
                        {/* Text Content - Always first on mobile */}
                        <div className="flex-1 order-1 md:order-1">
                            <h2 className="text-[28px] md:text-[32px] font-poppins font-medium text-[#1A1A1A] mb-6">
                                Why Choose Us ?
                            </h2>
                            <p className="text-[15px] font-poppins text-gray-500 leading-relaxed">
                                Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique.
                            </p>
                        </div>
                        {/* Image - Second on mobile, Right on desktop */}
                        <div className="flex-1 order-2 md:order-2">
                            <div className="relative rounded-[20px] overflow-hidden shadow-xl">
                                <img
                                    src="/img/IMG3.webp"
                                    alt="Why Choose Us"
                                    className="w-full h-full hover:scale-105 transition-all duration-300 object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Trusted Online Shopping */}
                    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
                        {/* Image - Second on mobile, Left on desktop */}
                        <div className="flex-1 order-2 md:order-1">
                            <div className="relative rounded-[20px] overflow-hidden shadow-xl">
                                <img
                                    src="/img/IMG4.webp"
                                    alt="Trusted Online Shopping"
                                    className="w-full h-full hover:scale-105 transition-all duration-300 object-cover"
                                />
                            </div>
                        </div>
                        {/* Text Content - First on mobile, Right on desktop */}
                        <div className="flex-1 order-1 md:order-2">
                            <h2 className="text-[28px] md:text-[32px] font-poppins font-medium text-[#1A1A1A] mb-6">
                                Trusted Online Shopping
                            </h2>
                            <p className="text-[15px] font-poppins text-gray-500 leading-relaxed">
                                Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
