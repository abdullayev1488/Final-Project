import { TopSection } from "../sections/TopSection"
import { ChoiceSection } from "../sections/about/ChoiceSection"
import { ClientsCarousel } from "../components/ui/carousels/ClientsCarousel"
import { DesignSection } from "../sections/about/DesignSection"
import { HowWeWorkSection } from "../sections/about/HowWeWorkSection"
import { StoresSection } from "../sections/about/StoresSection"
import { TeamSection } from "../sections/about/TeamSection"

export const AboutPage = () => {
    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "About Us", path: null }
    ];

    return (
        <main className='pt-[80px]'>
            <TopSection title="About Us" breadcrumbs={breadcrumbs} />
            <DesignSection />
            <ClientsCarousel />
            <HowWeWorkSection />
            <ChoiceSection />
            <TeamSection />
            <StoresSection />
        </main>
    )
}
