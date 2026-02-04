import { collections } from '../const'
import { Button } from '../components/ui/Button'


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

                            <div className="relative p-8 h-full flex flex-col justify-end">
                                <h3 className="relative z-10 text-2xl font__orbitron font-bold text-white mb-2">
                                    {collection.title}
                                </h3>
                                <p className="relative z-10 text-white/90 font__poppins text-sm mb-4">
                                    {collection.description}
                                </p>
                                <Button className="w-fit" text="Shop Now" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
