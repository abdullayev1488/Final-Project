import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';
import { products } from '../../../const';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '../cards/ProductCard';
import { Navigation, Pagination } from 'swiper/modules';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export const ProductCarousel = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="py-20 max-w-screen-2xl mx-auto px-4 overflow-hidden relative">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div>
                    <h2 className="text-[1.8rem] md:text-[2.2rem] font-orbitron font-bold text-gray-900 leading-tight">
                        Our Product's
                    </h2>
                    <p className="font-poppins text-gray-500 text-sm md:text-[15px] mt-2 max-w-xl">
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
                    dynamicBullets: true,
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
                {products.map((product, index) => (
                    <SwiperSlide key={`${product.id}-${index}`} className="pb-4">
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination Dots at bottom left */}
            <div className="custom-pagination"></div>
        </section>
    );
}
