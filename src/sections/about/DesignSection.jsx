import React from 'react'

export const DesignSection = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                {/* Text Content */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-sm md:text-base text-[#555] mb-5 font-medium font-poppins">
                        Learn more about our Design!
                    </p>
                    <h2 className="text-[30px] md:text-[35px] lg:text-[40px] font-[500] text-[#1A1A1A] font-poppins leading-tight max-w-4xl mx-auto">
                        Our Mission? We Bring Harmony And Practicality Into Great Designs For Everyone
                    </h2>
                </div>

                {/* Images*/}
                <div className="flex flex-col md:flex-row gap-6 items-stretch">
                    <div className="flex-[1.5] overflow-hidden rounded-2xl lg:flex-[2]">
                        <img
                            src="/img/IMG1.webp"
                            alt="Designer Workspace"
                            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 shadow-sm"
                        />
                    </div>
                    <div className="flex-1 rounded-2xl overflow-hidden">
                        <img
                            src="/img/IMG2.webp"
                            alt="Product Detail"
                            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 shadow-sm"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-6 mt-[80px] font-poppins">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus. Fusce imperdiet pulvinar est, eget fermentum nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
                    <p>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.</p>
                    <p>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris.</p>
                </div>
            </div>
        </section>
    )
}
