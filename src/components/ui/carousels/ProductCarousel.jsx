import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { IconChevronLeft, IconChevronRight, IconStar, IconStarFilled, IconHeart, IconEye, IconArrowsExchange, IconShoppingCart } from '@tabler/icons-react';
import { products } from '../../../const';

export const ProductCarousel = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="py-20 max-w-screen-2xl mx-auto px-4 overflow-hidden relative">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div>
                    <h2 className="text-[1.8rem] md:text-[2.2rem] font__orbitron font-bold text-gray-900 leading-tight">
                        Our Product's
                    </h2>
                    <p className="font__poppins text-gray-500 text-sm md:text-[15px] mt-2 max-w-xl">
                        Master Your Battleground Elevate Your Game with Our Elite-Reviewed Gear
                    </p>
                </div>

                {/* Custom Arrows */}
                <div className="flex gap-4">
                    <button
                        ref={prevRef}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                        <IconChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <button
                        ref={nextRef}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                        <IconChevronRight size={20} className="text-gray-600" />
                    </button>
                </div>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                    1300: { slidesPerView: 5 },
                }}
                modules={[Navigation, Pagination]}
                className="product-swiper !overflow-visible"
            >
                {[...products, ...products].map((product, index) => (
                    <SwiperSlide key={`${product.id}-${index}`} className="pb-4">
                        <div className="group bg-white rounded-2xl pb-2 cursor-pointer transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                            {/* Image Container */}
                            <div className="relative aspect-square rounded-2xl bg-[#F6F7F9] flex items-center justify-center p-8 overflow-hidden">
                                {/* Action Buttons Overlay */}
                                <div className="absolute top-4 right-4 flex flex-col gap-2 z-20 transition-all duration-300 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                                    <button className="w-10 h-10 rounded-xl cursor-pointer bg-white flex items-center justify-center text-gray-600 hover:bg-[#ff512f] hover:text-white transition-all duration-300 shadow-sm">
                                        <IconHeart size={20} />
                                    </button>
                                    <button className="w-10 h-10 rounded-xl cursor-pointer bg-white flex items-center justify-center text-gray-600 hover:bg-[#ff512f] hover:text-white transition-all duration-300 shadow-sm">
                                        <IconEye size={20} />
                                    </button>
                                    <button className="w-10 h-10 rounded-xl cursor-pointer bg-white flex items-center justify-center text-gray-600 hover:bg-[#ff512f] hover:text-white transition-all duration-300 shadow-sm">
                                        <IconArrowsExchange size={20} />
                                    </button>
                                    <button className="w-10 h-10 rounded-xl cursor-pointer bg-white flex items-center justify-center text-gray-600 hover:bg-[#ff512f] hover:text-white transition-all duration-300 shadow-sm">
                                        <IconShoppingCart size={20} />
                                    </button>
                                </div>
                                {/* Badge */}
                                {(product.discount || product.badge) && (
                                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-[11px] font-bold z-10 ${product.discount ? 'bg-[#ff512f]' : 'bg-[#e91e63]'}`}>
                                        {product.discount || product.badge}
                                    </span>
                                )}

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Info */}
                            <div className="mt-5 text-center px-2">
                                <h4 className="font__poppins font-semibold text-[15px] text-gray-800 line-clamp-1 mb-1 group-hover:text-black">
                                    {product.name}
                                </h4>

                                {/* Rating */}
                                <div className="flex items-center justify-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        i < product.rating ? (
                                            <IconStarFilled key={i} size={14} className="text-[#ff512f]" />
                                        ) : (
                                            <IconStar key={i} size={14} className="text-gray-300" />
                                        )
                                    ))}
                                    <span className="text-[12px] text-gray-400 ml-1">({product.reviews})</span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-center gap-3">
                                    <span className="font-bold text-[18px] text-gray-900">${product.price.toFixed(2)}</span>
                                    {product.oldPrice && (
                                        <span className="text-gray-400 line-through text-[14px]">${product.oldPrice.toFixed(2)}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination Dots at bottom left */}
            <div className="custom-pagination mt-10 flex justify-center md:justify-start gap-2 h-10"></div>
        </section>
    );
}
