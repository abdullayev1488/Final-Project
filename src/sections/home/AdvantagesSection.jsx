import React from 'react'
import { advantages } from '../../const'

export const AdvantagesSection = () => {
    return (
        <section className="py-16 max-w-screen-2xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {advantages.map((advantage) => (
                    <div
                        key={advantage.id}
                        className="group flex flex-col items-center text-center py-6"
                    >
                        <div className="w-24 h-24 bg-[#F6F7F9] rounded-full flex items-center justify-center mb-6 transition-all duration-300">
                            <img
                                src={advantage.icon}
                                alt={advantage.title}
                                className="w-12 h-12 object-contain shake-icon"
                            />
                        </div>
                        <h3 className="text-[18px] font-bold text-gray-900 font-orbitron mb-3">
                            {advantage.title}
                        </h3>
                        <p className="text-[14px] text-gray-600 font-poppins leading-relaxed max-w-[250px]">
                            {advantage.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
