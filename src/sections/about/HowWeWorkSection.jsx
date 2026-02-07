import { features } from '../../const'

export const HowWeWorkSection = () => {

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-poppins text-gray-500 mb-4">How We Work</p>
                    <h2 className="text-[30px] md:text-[40px] font-poppins font-medium text-[#1A1A1A] leading-tight max-w-3xl mx-auto">
                        We Give You The Power To Create Spaces That Are Just Right For You
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {features.map((feature) => (
                        <div key={feature.id} className="flex flex-col items-center">
                            <div className="mb-6">
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            <h3 className="text-[20px] font-poppins font-medium text-[#1A1A1A] mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-[14px] font-poppins text-gray-500 leading-relaxed max-w-xs mx-auto">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
