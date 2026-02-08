import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef, useState, useEffect } from 'react';
import { IconPlayerPlayFilled, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FuturedModal } from '../modals/FuturedModal';
import { videos } from '../../../const';

export const ClientsCarousel = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [swiperInstance, setSwiperInstance] = useState(null);



    // Robust navigation initialization
    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <section className="pt-20 pb-40 bg-white">
            <div className="mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-sm text-gray-500 font-poppins mb-4">Real customer experience</p>
                    <h2 className="text-[32px] md:text-[42px] font-poppins font-medium text-gray-900 leading-tight">
                        Videos From Our Clients
                    </h2>
                </div>

                {/* Swiper Container */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        centeredSlides={false}
                        onSwiper={setSwiperInstance}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-20"
                    >
                        {videos.map((vid) => (
                            <SwiperSlide key={vid.id}>
                                <div
                                    onClick={() => setIsModalOpen(true)}
                                    className="relative overflow-hidden rounded-[14px] aspect-[16/11] cursor-pointer group"
                                >
                                    <img
                                        src={vid.img}
                                        alt={`Client Video ${vid.id}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                                        <div className="w-14 h-14 rounded-full border border-white/60 flex items-center justify-center text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                                            <IconPlayerPlayFilled size={24} />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Arrows - Bottom Center */}
                    <div className="flex gap-4 absolute bottom-[-100px] left-1/2 -translate-x-1/2 z-10">
                        <button
                            ref={prevRef}
                            className="w-14 h-14 shadow-lg rounded-full border border-gray-100 flex items-center justify-center bg-white text-gray-400 hover:text-purple-500 transition-all cursor-pointer"
                        >
                            <IconChevronLeft size={28} />
                        </button>
                        <button
                            ref={nextRef}
                            className="w-14 h-14 shadow-lg rounded-full border border-gray-100 flex items-center justify-center bg-white text-gray-400 hover:text-purple-500 transition-all cursor-pointer"
                        >
                            <IconChevronRight size={28} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {isModalOpen && <FuturedModal setIsModalOpen={setIsModalOpen} />}
        </section>
    );
};
