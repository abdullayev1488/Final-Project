import { TeamCarousel } from "../../components/ui/carousels/TeamCarousel"

export const TeamSection = () => {
    return (
        <section className="py-20 bg-[#fafafa]">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm text-[#555] font-poppins font-semibold uppercase tracking-[3px] mb-3">
                        Our Teams
                    </p>
                    <h2 className="text-[32px] md:text-[40px] font-poppins font-[500] text-gray-900 leading-tight max-w-2xl mx-auto">
                        The Passionate Team Bringing Our Designs To Life
                    </h2>
                </div>

                {/* Carousel */}
                <TeamCarousel />
            </div>
        </section>
    )
}
