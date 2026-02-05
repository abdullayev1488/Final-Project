import { NewsCard } from '../../components/ui/cards/NewsCard'

export const NewsSection = () => {


    return (
        <section className='py-20 max-w-screen-2xl mx-auto px-4'>
            <div className="mb-12">
                <h2 className="text-[30px] mb-[20px] lg:text-[40px] font-orbitron font-bold text-gray-900 leading-tight">Latest News</h2>
                <p className="text-gray-500 font-poppins text-[15px] mt-2">The Hottest Gaming Innovations and Exclusive First Looks</p>
            </div>

            <NewsCard />
        </section>
    )
}
