import { useState } from 'react'
import { ProductCard } from '../../components/ui/cards/ProductCard'
import { products } from '../../const'

export const ArrivalsSection = () => {
    const [activeTab, setActiveTab] = useState(1);

    const displayProducts = products.slice(0, 5);

    const categories = [
        { id: 1, name: "Gaming Mouse" },
        { id: 2, name: "Keyboards" },
        { id: 3, name: "Gaming Controllers" },
        { id: 4, name: "Headphones" }
    ];

    return (
        <section className='py-16 max-w-screen-2xl mx-auto px-4'>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-6">
                <h2 className="text-[30px] lg:text-[40px] font-orbitron font-[500] text-gray-900 leading-tight">
                    New Arrivals
                </h2>
                <ul className="flex items-center gap-6 lg:gap-10 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide shrink-0">
                    {categories.map((cat) => (
                        <li
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`text-[14px] lg:text-[16px] font-[600] uppercase cursor-pointer transition-colors whitespace-nowrap
                                ${activeTab === cat.id ? 'text-black border-b-2 border-[#ff512f] pb-1' : 'text-[#b0b0b0] hover:text-black'}`}
                        >
                            {cat.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {displayProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}
