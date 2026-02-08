import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { teamMembers } from '../../../const';

export const TeamCarousel = () => {


    return (
        <div className="w-full relative px-4 md:px-0">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                className="team-swiper !pb-16"
            >
                {teamMembers.map((member) => (
                    <SwiperSlide key={member.id}>
                        <div className="group relative overflow-hidden rounded-[20px] shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
                            <div className="aspect-[3/4] overflow-hidden">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-white text-xl font-poppins font-semibold mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-white/80 text-sm font-poppins">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
