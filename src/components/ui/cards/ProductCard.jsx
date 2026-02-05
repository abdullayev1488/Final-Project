import React from 'react'
import { IconStar, IconStarFilled, IconHeart, IconEye, IconArrowsExchange, IconShoppingCart } from '@tabler/icons-react';

export const ProductCard = ({ product }) => {
    return (
        <div className="group bg-white rounded-2xl pb-2 cursor-pointer transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative aspect-square rounded-2xl group-hover:rounded-b-none transition-all duration-300 bg-[#F6F7F9] flex items-center justify-center p-8 overflow-hidden">
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
            <div className="mt-5 text-center px-4 pb-4">
                <h4 className="font-poppins font-semibold text-[15px] text-gray-800 line-clamp-1 mb-1 group-hover:text-black">
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
    )
}
