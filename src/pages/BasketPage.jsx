import { TopSection } from "../sections/TopSection"
import { IconPlus, IconMinus, IconTrash, IconTruck, IconChevronRight } from "@tabler/icons-react";

export const BasketPage = () => {
    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Basket", path: "/basket" }
    ]
    return (
        <main className='pt-[80px]'>
            <TopSection title="Basket" breadcrumbs={breadcrumbs} />

            <section className="py-12 md:py-24 bg-white">
                <div className="max-w-screen-2xl mx-auto px-4">
                    <div className="flex align-center flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                        {/* Basket Left */}
                        <div className="flex-[2] w-full">

                            {/* Free Shipping Progress Bar */}
                            <div className="mb-10 md:mb-16 max-w-3xl mx-auto lg:mx-0">
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-xs md:text-sm text-gray-700">
                                        Buy <span className="font-bold text-[#ff512f]">$70.00</span> more to get <span className="font-bold">Free Shipping</span>
                                    </p>
                                    <div className="text-[#ff512f] translate-x-[calc(65%-20px)] md:translate-x-[calc(65%-24px)]">
                                        <IconTruck size={24} className="md:w-7 md:h-7" />
                                    </div>
                                </div>
                                <div className="relative h-1 md:h-[6px] bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#ff512f] to-[#dd2476] w-[65%]"
                                    />
                                </div>
                            </div>

                            {/* Desktop Table - Hidden on Mobile */}
                            <div className="hidden md:block overflow-hidden">
                                <table className="w-full border-separate border-spacing-0 bg-[#f2f2f2] !p-[2px] overflow-hidden rounded-[10px]">
                                    <thead>
                                        <tr className="border-b border-gray-100 ">
                                            <th className="py-5 px-6 text-left text-[11px] lg:text-[12px] font-orbitron font-bold uppercase tracking-widest text-gray-400">Product</th>
                                            <th className="py-5 px-6 text-center text-[11px] lg:text-[12px] font-orbitron font-bold uppercase tracking-widest text-gray-400">Price</th>
                                            <th className="py-5 px-6 text-center text-[11px] lg:text-[12px] font-orbitron font-bold uppercase tracking-widest text-gray-400">Quantity</th>
                                            <th className="py-5 px-6 text-center text-[11px] lg:text-[12px] font-orbitron font-bold uppercase tracking-widest text-gray-400">Subtotal</th>
                                            <th className="py-5 px-4 w-10"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-100">
                                        {/* Product 1 */}
                                        <tr className="group hover:bg-gray-50/30 transition-all duration-300">
                                            <td className="py-8 px-6 rounded-tl-[10px]">
                                                <div className="flex items-center gap-4 lg:gap-6">
                                                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#F6F7F9] rounded-2xl flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300">
                                                        <img src="/public/img/product/3.webp" alt="Product" className="w-full h-full object-contain" />
                                                    </div>
                                                    <span className="font-poppins font-semibold text-gray-900 text-sm lg:text-base">Immersion Xtreme Pro</span>
                                                </div>
                                            </td>
                                            <td className="py-8 px-6 text-center">
                                                <span className="font-orbitron font-bold text-gray-900 text-sm lg:text-base">$50.00</span>
                                            </td>
                                            <td className="py-8 px-6">
                                                <div className="flex items-center justify-center">
                                                    <div className="flex items-center bg-gray-50 border-2 border-gray-100 rounded-xl p-1">
                                                        <button className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center text-gray-400 hover:text-[#ff512f] hover:bg-white rounded-lg transition-all cursor-pointer">
                                                            <IconMinus size={14} />
                                                        </button>
                                                        <span className="w-8 lg:w-12 text-center font-bold text-gray-900 text-sm lg:text-base">2</span>
                                                        <button className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center text-gray-400 hover:text-[#ff512f] hover:bg-white rounded-lg transition-all cursor-pointer">
                                                            <IconPlus size={14} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-8 px-6 text-center">
                                                <span className="font-orbitron font-bold text-[#ff512f] text-base lg:text-lg">$100.00</span>
                                            </td>
                                            <td className="py-8 px-4 text-right rounded-tr-[10px]">
                                                <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#ff512f] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-[#ff512f]/20">
                                                    <IconTrash size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                        {/* Product 2 */}
                                        <tr className="group hover:bg-gray-50/30 transition-all duration-300">
                                            <td className="py-8 px-6 rounded-bl-[10px]">
                                                <div className="flex items-center gap-4 lg:gap-6">
                                                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#F6F7F9] rounded-2xl flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300">
                                                        <img src="/public/img/product/4.webp" alt="Product" className="w-full h-full object-contain" />
                                                    </div>
                                                    <span className="font-poppins font-semibold text-gray-900 text-sm lg:text-base">Precision Alpha</span>
                                                </div>
                                            </td>
                                            <td className="py-8 px-6 text-center">
                                                <span className="font-orbitron font-bold text-gray-900 text-sm lg:text-base">$30.00</span>
                                            </td>
                                            <td className="py-8 px-6">
                                                <div className="flex items-center justify-center">
                                                    <div className="flex items-center bg-gray-50 border-2 border-gray-100 rounded-xl p-1">
                                                        <button className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center text-gray-400 hover:text-[#ff512f] hover:bg-white rounded-lg transition-all cursor-pointer">
                                                            <IconMinus size={14} />
                                                        </button>
                                                        <span className="w-8 lg:w-12 text-center font-bold text-gray-900 text-sm lg:text-base">1</span>
                                                        <button className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center text-gray-400 hover:text-[#ff512f] hover:bg-white rounded-lg transition-all cursor-pointer">
                                                            <IconPlus size={14} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-8 px-6 text-center">
                                                <span className="font-orbitron font-bold text-[#ff512f] text-base lg:text-lg">$30.00</span>
                                            </td>
                                            <td className="py-8 px-4 text-right rounded-br-[10px]">
                                                <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#ff512f] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-[#ff512f]/20">
                                                    <IconTrash size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Product List - Visible only on small screens */}
                            <div className="md:hidden space-y-4">
                                {/* Mobile Item 1 */}
                                <div className="bg-[#F9FAFB] rounded-3xl p-6 border border-gray-100 relative group">
                                    <button className="absolute top-4 right-4 text-gray-300 hover:text-[#ff512f] transition-colors">
                                        <IconTrash size={20} />
                                    </button>
                                    <div className="flex items-center gap-5 mb-6">
                                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3 shadow-sm">
                                            <img src="/public/img/product/3.webp" alt="Product" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h4 className="font-poppins font-semibold text-gray-900 text-sm mb-1 uppercase tracking-tight">Immersion Xtreme Pro</h4>
                                            <span className="font-orbitron font-bold text-[#ff512f] text-sm">$50.00</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                                        <div className="flex items-center bg-white border-2 border-gray-100 rounded-xl p-1">
                                            <button className="w-8 h-8 flex items-center justify-center text-gray-400">
                                                <IconMinus size={14} />
                                            </button>
                                            <span className="w-8 text-center font-bold text-gray-900 text-xs">2</span>
                                            <button className="w-8 h-8 flex items-center justify-center text-gray-400">
                                                <IconPlus size={14} />
                                            </button>
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-[10px] text-gray-400 font-orbitron uppercase tracking-widest mb-1">Subtotal</span>
                                            <span className="font-orbitron font-bold text-gray-900 text-sm">$100.00</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Mobile Item 2 */}
                                <div className="bg-[#F9FAFB] rounded-3xl p-6 border border-gray-100 relative group">
                                    <button className="absolute top-4 right-4 text-gray-300 hover:text-[#ff512f] transition-colors">
                                        <IconTrash size={20} />
                                    </button>
                                    <div className="flex items-center gap-5 mb-6">
                                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3 shadow-sm">
                                            <img src="/public/img/product/4.webp" alt="Product" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h4 className="font-poppins font-semibold text-gray-900 text-sm mb-1 uppercase tracking-tight">Precision Alpha</h4>
                                            <span className="font-orbitron font-bold text-[#ff512f] text-sm">$30.00</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                                        <div className="flex items-center bg-white border-2 border-gray-100 rounded-xl p-1">
                                            <button className="w-8 h-8 flex items-center justify-center text-gray-400">
                                                <IconMinus size={14} />
                                            </button>
                                            <span className="w-8 text-center font-bold text-gray-900 text-xs">1</span>
                                            <button className="w-8 h-8 flex items-center justify-center text-gray-400">
                                                <IconPlus size={14} />
                                            </button>
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-[10px] text-gray-400 font-orbitron uppercase tracking-widest mb-1">Subtotal</span>
                                            <span className="font-orbitron font-bold text-gray-900 text-sm">$30.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Bar: Coupon & Update */}
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 pt-10 mt-2">
                                <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                                    <div className="relative w-full sm:w-auto">
                                        <input
                                            type="text"
                                            placeholder="Coupon code"
                                            className="w-full sm:w-48 lg:w-64 border-2 border-gray-100 bg-gray-50 rounded-2xl px-6 py-4 text-[12px] lg:text-[13px] font-semibold focus:outline-none focus:border-[#ff512f] focus:bg-white transition-all placeholder:text-gray-400 uppercase tracking-wider"
                                        />
                                    </div>
                                    <button className="w-full sm:w-auto bg-[#1A1A1A] text-white font-orbitron font-bold text-[12px] lg:text-[13px] px-8 py-4 rounded-2xl hover:bg-[#ff512f] transition-all duration-300 transform active:scale-95 cursor-pointer shadow-lg shadow-black/5 hover:shadow-[#ff512f]/20 whitespace-nowrap uppercase tracking-widest">
                                        APPLY
                                    </button>
                                </div>
                                <button className="w-full md:w-auto border-2 border-gray-100 text-gray-900 font-orbitron font-bold text-[12px] lg:text-[13px] px-10 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform active:scale-95 cursor-pointer tracking-widest uppercase">
                                    UPDATE CART
                                </button>
                            </div>
                        </div>

                        {/* Basket Right (Sidebar) */}
                        <div className="lg:w-[420px] xl:w-[480px] w-full sticky top-32">
                            <div className="bg-[#F9FAFB] border border-gray-100 rounded-[32px] p-6 md:p-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />

                                <h3 className="text-base lg:text-lg font-orbitron font-bold text-gray-900 mb-8 uppercase tracking-widest text-center">Cart Totals</h3>

                                <div className="space-y-6">
                                    <div className="flex justify-between items-center pb-6 border-b border-gray-200/50">
                                        <span className="text-gray-400 font-poppins font-medium uppercase text-[10px] lg:text-[11px] tracking-[0.2em]">Subtotal</span>
                                        <span className="font-orbitron font-bold text-gray-900 text-sm lg:text-base">$130.00</span>
                                    </div>

                                    <div className="pb-8 border-b border-gray-200/50">
                                        <span className="text-gray-400 font-poppins font-medium uppercase text-[10px] lg:text-[11px] tracking-[0.2em] block mb-6">Shipping</span>
                                        <div className="space-y-4">
                                            <label className="flex items-center justify-between group cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all border-[#ff512f] bg-[#ff512f]">
                                                        <div className="w-2 h-2 bg-white rounded-full" />
                                                    </div>
                                                    <span className="text-xs lg:text-[13px] font-semibold text-gray-700 font-poppins">Flat rate:</span>
                                                </div>
                                                <span className="font-orbitron font-bold text-gray-900 text-xs lg:text-sm">$30.00</span>
                                            </label>
                                            <label className="flex items-center justify-between group cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all border-gray-300 bg-white" />
                                                    <span className="text-xs lg:text-[13px] font-semibold text-gray-700 font-poppins">Local pickup:</span>
                                                </div>
                                                <span className="font-orbitron font-bold text-gray-900 text-xs lg:text-sm">$30.00</span>
                                            </label>
                                        </div>
                                        <p className="text-[10px] lg:text-[11px] text-gray-400 mt-6 font-poppins leading-relaxed italic">
                                            Shipping options will be updated during checkout.
                                        </p>
                                        <button className="mt-4 flex items-center gap-2 text-[#ff512f] font-bold text-[11px] lg:text-[12px] uppercase tracking-wider hover:translate-x-1 transition-transform cursor-pointer">
                                            Calculate shipping <IconChevronRight size={14} />
                                        </button>
                                    </div>

                                    <div className="pt-2">
                                        <div className="flex justify-between items-center mb-8">
                                            <span className="text-gray-900 font-orbitron font-bold uppercase tracking-widest text-xs lg:text-[13px]">Total</span>
                                            <span className="text-xl lg:text-2xl font-orbitron font-bold text-[#ff512f]">$160.00</span>
                                        </div>

                                        <button className="w-full bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white font-orbitron font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-[#ff512f]/30 hover:shadow-[#ff512f]/50 hover:scale-[1.02] transform transition-all duration-300 active:scale-95 cursor-pointer uppercase tracking-widest text-[12px] lg:text-[13px]">
                                            Proceed To Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
