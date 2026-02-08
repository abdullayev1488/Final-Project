import { TopSection } from "../sections/TopSection"
import { MapSection } from "../sections/contact/MapSection"
import { ContactSection } from "../sections/contact/ContactSection"

export const ContactPage = () => {
    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Contact", path: null }
    ]
    return (
        <main className='pt-[80px]'>
            <TopSection title="Contact" breadcrumbs={breadcrumbs} />
            <MapSection />
            <ContactSection />
        </main>
    )
}
