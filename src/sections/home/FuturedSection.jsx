import React, { useState, useEffect } from 'react'
import { Button } from '../../components/custom/Button'
import { IconPlayerPlayFilled } from '@tabler/icons-react'
import { FuturedModal } from '../../components/ui/modals/FuturedModal';

export const FuturedSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isModalOpen]);

    // Handle ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setIsModalOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <section className='py-16 max-w-screen-2xl mx-auto px-4 overflow-hidden'>
            <div className="flex flex-col gap-2">
                {/* Row 1 */}
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                    <div className="w-full lg:w-1/2 relative group rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="/img/img-2-8.jpg"
                            alt="Spectre Phantom"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-16 h-16 lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center text-[#ff512f] shadow-2xl transform transition-transform group-hover:scale-110 cursor-pointer"
                            >
                                <IconPlayerPlayFilled size={32} />
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center mb-5 lg:text-left">
                        <h2 className="text-[30px] lg:text-[40px] font-orbitron font-[500] text-gray-900 mb-6">
                            Spectre Phantom <br /> Wireless Headphones
                        </h2>
                        <p className="text-gray-500 font-poppins text-base lg:text-[15px] mb-8 max-w-lg leading-relaxed">
                            This positioning statement suggests the headphones can help gamers achieve a competitive edge in esports and competitive gaming.
                        </p>
                        <div className="flex items-center gap-6 lg:gap-8">
                            <span className="text-3xl lg:text-4xl font-bold text-[#ff512f]">$85.99</span>
                            <Button text="Buy Now" className="px-8 py-3 !mt-0" />
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-10">
                    {/* Reverse order on mobile: Image on top, Text below */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                        <h2 className="text-[30px] lg:text-[40px] font-orbitron font-[500] text-gray-900 leading-tight mb-6">
                            Eclipse Nexus Renegade <br /> Tactical Peripherals
                        </h2>
                        <p className="text-gray-500 font-poppins text-base lg:text-[15px] mb-8 max-w-lg leading-relaxed">
                            The Unparalleled Apex Esports Gaming Command Center Engineered for Total Dominance in the Most Demanding Global Tournaments and Competitions.
                        </p>
                        <div className="flex items-center gap-6 lg:gap-8">
                            <span className="text-3xl lg:text-4xl font-bold text-[#ff512f]">$85.99</span>
                            <Button text="Shop Now" className="px-8 py-3 !mt-0" />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl group">
                        <img
                            src="/img/img-2-9.jpg"
                            alt="Tactical Peripherals"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {isModalOpen && <FuturedModal setIsModalOpen={setIsModalOpen} />}
        </section>
    )
}
