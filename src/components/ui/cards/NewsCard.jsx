import { IconArrowRight } from '@tabler/icons-react'
import { newsData } from '../../../const'

export const NewsCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsData.map((news) => (
                <div key={news.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col min-h-[500px]">
                    <div className="aspect-[4/3.5] overflow-hidden">
                        <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-[11px] font-[600] uppercase text-gray-400 font-poppins mb-4 tracking-wider">
                            <span>BY {news.author}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>{news.date}</span>
                        </div>
                        <h3 className="text-[20px] font-bold text-gray-900 font-orbitron leading-[1.5] mb-6 group-hover:text-black line-clamp-2">
                            {news.title}
                        </h3>
                        <button className="mt-auto flex items-center gap-2 text-[#ff512f] font-[600] text-[15px]  tracking-wide cursor-pointer w-fit group/btn">
                            <span>Read More</span>
                            <IconArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
