import { IconShoppingBag, IconStar, IconTrash, IconX } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { setWishlistOpen } from '../../../redux/slice/uiSlice';

export const Wishlist = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.ui.wishlistOpen);

    const wishlistItems = [
        {
            id: 1,
            name: "AURORA GLIDE WIRELESS",
            price: 90.00,
            image: "/img/product/1.png",
            inStock: true
        }
    ];

    return (
        <>
            <div
                onClick={() => dispatch(setWishlistOpen(false))}
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
            />
            <div
                className={`fixed top-0 right-0 h-full w-full min-[451px]:w-[400px] bg-white z-[999] shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <IconStar size={24} className="text-[#ff512f]" />
                            <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                {wishlistItems.length}
                            </span>
                        </div>
                        <h2 className="font-orbitron text-lg font-bold uppercase tracking-wider text-gray-900">
                            Wishlist
                        </h2>
                    </div>
                    <button
                        onClick={() => dispatch(setWishlistOpen(false))}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-gray-400 hover:text-black"
                    >
                        <IconX size={22} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                    {wishlistItems.length > 0 ? (
                        <div className="space-y-6">
                            {wishlistItems.map((item) => (
                                <div key={item.id} className="group relative flex gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all duration-300">
                                    {/* Image */}
                                    <div className="w-24 h-24 bg-[#F6F7F9] rounded-xl flex items-center justify-center shrink-0 p-2">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div>
                                            <h3 className="font-orbitron text-sm font-bold text-gray-900 leading-snug mb-1">
                                                {item.name}
                                            </h3>
                                            <p className="text-xs text-gray-500 font-medium">
                                                {item.inStock ? "In Stock" : "Out of Stock"}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between mt-3">
                                            <span className="text-base font-bold text-[#ff512f]">
                                                ${item.price.toFixed(2)}
                                            </span>

                                            <button className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-gradient-to-r from-[#ff512f] to-[#dd2476] transition-all cursor-pointer">
                                                <IconShoppingBag size={14} />
                                                Add
                                            </button>
                                        </div>
                                    </div>

                                    {/* Remove Button */}
                                    <button className="absolute top-1 right-1 bg-white text-gray-400 hover:text-red-500 shadow-md p-1.5 rounded-full border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                                        <IconTrash size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-2">
                                <IconStar size={40} className="text-gray-300" />
                            </div>
                            <div>
                                <h3 className="font-orbitron text-lg font-bold text-gray-900 mb-1">
                                    Your wishlist is empty
                                </h3>
                                <p className="text-gray-500 text-sm max-w-[200px] mx-auto">
                                    Explore our products and find something you love!
                                </p>
                            </div>
                            <button
                                onClick={() => dispatch(setWishlistOpen(false))}
                                className="mt-4 px-8 py-3 bg-black text-white rounded-full font-orbitron text-xs font-bold uppercase tracking-wider hover:bg-gradient-to-r from-[#ff512f] to-[#dd2476] transition-all"
                            >
                                Start Shopping
                            </button>
                        </div>
                    )}
                </div>

                {/* Footer Tip (Optional) */}
                {wishlistItems.length > 0 && (
                    <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
                        <p className="text-[10px] text-gray-500">
                            Items in wishlist are not reserved until purchased.
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}
