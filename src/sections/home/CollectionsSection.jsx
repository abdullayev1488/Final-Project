import { collections } from '../../const'
import { Button } from '../../components/custom/Button'


export const CollectionsSection = () => {
    return (

        <section className="py-16 max-w-screen-2xl mx-auto px-4">
            <div className="w-full mx-auto">
                <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
                    {collections.map((collection, index) => (
                        <div
                            key={collection.id}
                            className={`${index === 1 ? "lg:col-span-2" : ""} group relative h-[500px] overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer`}
                            style={{
                                backgroundImage: `url(${collection.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-80"></div>

                            <div className="relative py-8 px-6 h-full flex flex-col justify-between">
                                <div className='w-[200px] '>
                                    <p className="relative z-10 text-white/90 font-poppins uppercase text-sm mb-4">
                                        {collection.title}
                                    </p>
                                    <h3 className="text-2xl font-orbitron font-bold text-white leading-[1.8]">
                                        {collection.description}
                                    </h3>
                                </div>
                                <Button className="w-fit" text="Shop Now" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
