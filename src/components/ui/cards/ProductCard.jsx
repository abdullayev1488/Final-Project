import { IconStar, IconStarFilled, IconEye, IconArrowsExchange, IconShoppingCart } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBasketOpen, setQuickViewOpen, setSelectedProduct } from '../../../redux/slice/uiSlice';

export const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAction = (e, type) => {
        e.preventDefault();
        e.stopPropagation();

        if (type === 'basket') {
            dispatch(setBasketOpen(true));
        }
        if (type === 'view') {
            dispatch(setSelectedProduct(product));
            dispatch(setQuickViewOpen(true));
        }
        // if (type === 'wishlist') {
        //     dispatch(setWishlistOpen(true));
        // }
    };

    return (
        <Link to="/product" className="group bg-white block rounded-2xl pb-2 cursor-pointer transition-all duration-300 hover:!shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:!-translate-y-1">
            {/* Image Container */}
            <div className="relative aspect-square rounded-2xl group-hover:rounded-b-none transition-all duration-300 bg-[#F6F7F9] flex items-center justify-center p-8 overflow-hidden">
                {/* Action Buttons Overlay */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 z-20 transition-all duration-300 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                    <button
                        onClick={(e) => handleAction(e, 'wishlist')}
                        className="group/btn w-10 h-10 rounded-xl cursor-pointer bg-white flex items-center justify-center text-gray-600 hover:bg-[#ff512f] hover:text-white transition-all duration-300 shadow-sm relative"
                    >
                        <IconStar size={20} />
                        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white text-[11px] font-bold rounded-lg opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible transition-all duration-300 whitespace-nowrap shadow-md">
                            Wishlist
                            <span className="absolute left-[100%] top-1/2 -translate-y-1/2 border-[5px] border-transparent border-l-[#dd2476]" />
                        </span>
                    </button>
                    <button
                        onClick={(e) => handleAction(e, 'view')}
                        className="group/btn w-10 h-10 rounded-xl cursor-pointer bg-white flex items-center justify-center text-gray-600 hover:bg-[#ff512f] hover:text-white transition-all duration-300 shadow-sm relative"
                    >
                        <IconEye size={20} />
                        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white text-[11px] font-bold rounded-lg opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible transition-all duration-300 whitespace-nowrap shadow-md">
                            Quick View
                            <span className="absolute left-[100%] top-1/2 -translate-y-1/2 border-[5px] border-transparent border-l-[#dd2476]" />
                        </span>
                    </button>
                    <button
                        onClick={(e) => handleAction(e, 'exchange')}
                        className="group/btn w-10 h-10 rounded-xl cursor-pointer bg-white flex items-center justify-center text-gray-600 hover:bg-[#ff512f] hover:text-white transition-all duration-300 shadow-sm relative"
                    >
                        <IconArrowsExchange size={20} />
                        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white text-[11px] font-bold rounded-lg opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible transition-all duration-300 whitespace-nowrap shadow-md">
                            Compare
                            <span className="absolute left-[100%] top-1/2 -translate-y-1/2 border-[5px] border-transparent border-l-[#dd2476]" />
                        </span>
                    </button>
                    <button
                        onClick={(e) => handleAction(e, 'basket')}
                        className="group/btn w-10 h-10 rounded-xl cursor-pointer bg-white flex items-center justify-center text-gray-600 hover:bg-[#ff512f] hover:text-white transition-all duration-300 shadow-sm relative"
                    >
                        <IconShoppingCart size={20} />
                        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white text-[11px] font-bold rounded-lg opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible transition-all duration-300 whitespace-nowrap shadow-md">
                            Basket
                            <span className="absolute left-[100%] top-1/2 -translate-y-1/2 border-[5px] border-transparent border-l-[#dd2476]" />
                        </span>
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
        </Link>
    )
}
