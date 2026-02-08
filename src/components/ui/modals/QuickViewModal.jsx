import React from 'react';
import { useSelector } from 'react-redux';
import { IconX, IconStarFilled, IconStar, IconPlus, IconMinus, IconShoppingCart, IconArrowsExchange } from '@tabler/icons-react';

export const QuickViewModal = ({ isOpen, onClose }) => {
    const { selectedProduct } = useSelector((state) => state.ui);

    if (!selectedProduct) return null;

    const handleClose = () => {
        onClose();
    };

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={handleClose}
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
            />

            {/* Modal */}
            <div
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[900px] bg-white z-[1001] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ease-out ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-[#ff512f] hover:text-white rounded-xl transition-all duration-300 z-10 cursor-pointer text-gray-500"
                >
                    <IconX size={20} />
                </button>

                <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto">
                    {/* Left Side: Image */}
                    <div className="md:w-1/2 bg-[#F6F7F9] flex items-center justify-center p-12 relative">
                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.name}
                            className="w-full max-h-[400px] object-contain transition-transform duration-700 hover:scale-110"
                        />
                        {selectedProduct.discount && (
                            <span className="absolute top-6 left-6 px-4 py-1.5 bg-[#ff512f] text-white text-[12px] font-bold rounded-full shadow-lg">
                                {selectedProduct.discount}
                            </span>
                        )}
                    </div>

                    {/* Right Side: Info */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <p className="text-[#ff512f] font-bold text-[13px] uppercase tracking-widest mb-3">
                            {selectedProduct.category || "Gaming Gear"}
                        </p>
                        <h2 className="font-orbitron font-bold text-2xl md:text-3xl text-gray-900 mb-4 leading-tight">
                            {selectedProduct.name}
                        </h2>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-6">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    i < Math.floor(selectedProduct.rating) ? (
                                        <IconStarFilled key={i} size={18} className="text-[#ff512f]" />
                                    ) : (
                                        <IconStar key={i} size={18} className="text-gray-300" />
                                    )
                                ))}
                            </div>
                            <span className="text-gray-400 text-sm ml-2">({selectedProduct.reviews} customer reviews)</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-3xl font-bold text-gray-900">${selectedProduct.price.toFixed(2)}</span>
                            {selectedProduct.oldPrice && (
                                <span className="text-xl text-gray-400 line-through">${selectedProduct.oldPrice.toFixed(2)}</span>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-500 font-poppins text-[15px] leading-relaxed mb-8">
                            Experience next-level performance with the {selectedProduct.name}. Designed for pros, built for victory. Features ergonomic design and cutting-edge technology.
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center border-2 border-gray-100 rounded-2xl p-1 bg-gray-50/50">
                                <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-white rounded-xl transition-all cursor-pointer">
                                    <IconMinus size={16} />
                                </button>
                                <span className="w-12 text-center font-bold text-gray-900">1</span>
                                <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-white rounded-xl transition-all cursor-pointer">
                                    <IconPlus size={16} />
                                </button>
                            </div>
                            <button className="flex-1 bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white font-orbitron font-bold py-2 px-8 rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_10px_20px_rgba(255,81,47,0.3)] transition-all transform hover:-translate-y-1 cursor-pointer active:scale-95">
                                <IconShoppingCart size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-6">
                            <button className="flex items-center gap-2 text-gray-500 hover:text-[#ff512f] transition-colors cursor-pointer group">
                                <IconStar size={18} className="group-hover:fill-[#ff512f]" />
                                <span className="text-[13px] font-semibold">Add to Wishlist</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-500 hover:text-[#ff512f] transition-colors cursor-pointer group">
                                <IconArrowsExchange size={18} />
                                <span className="text-[13px] font-semibold">Compare</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
