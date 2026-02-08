import { Button } from "../../components/custom/Button"

export const HeroSection = () => {

    return (
        <section
            className="w-full h-[105vh] bg-cover bg-center bg-no-repeat flex items-center relative overflow-hidden"
            style={{ backgroundImage: "url('/img/heroBg.jpg')" }}
        >
            {/* White overlay to make the background "lighter" */}
            <div className="absolute inset-0" />

            <div className="max-w-screen-2xl mx-auto px-4 w-full relative z-10">
                <article className="max-w-xl text-[#333]">
                    <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bold font-orbitron leading-[1.2]">
                        The Rise of Specialized <br className="hidden sm:block" />
                        Gaming Controllers
                    </h1>
                    <p className="mt-4 pl-[2px] text-sm sm:text-base md:text-lg text-gray-700 font-poppins max-w-lg">
                        Exploring the Diverse Ecosystem of Specialized Gaming Controllers
                    </p>
                    <Button />
                </article>
            </div>
        </section>
    )
}
