import { stores } from '../../const'

export const StoresSection = () => {

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-poppins text-gray-500 mb-4 tracking-wide">Our Locations</p>
                    <h2 className="text-[32px] md:text-[42px] font-poppins font-medium text-[#1A1A1A] leading-tight">
                        Stores System
                    </h2>
                </div>

                {/* Stores Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {stores.map((store) => (
                        <div key={store.id} className="flex flex-col items-center group">
                            {/* Image Container */}
                            <div className="w-full aspect-[4/3] rounded-[15px] overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                                <img
                                    src={store.image}
                                    alt={store.city}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            {/* Store Info */}
                            <div className="text-center">
                                <h3 className="text-[20px] md:text-[22px] font-poppins font-medium text-[#1A1A1A] mb-2">
                                    {store.city}
                                </h3>
                                <p className="text-[14px] font-poppins text-gray-400 max-w-[280px] leading-relaxed">
                                    {store.address}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
