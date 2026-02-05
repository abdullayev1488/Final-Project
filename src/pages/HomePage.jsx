import { HeroSection } from '../sections/HomePageSections/HeroSection'
import { NewsSection } from '../sections/HomePageSections/NewsSection'
import { FuturedSection } from '../sections/HomePageSections/FuturedSection'
import { ProductSection } from '../sections/HomePageSections/ProductSection'
import AdvantagesSection from '../sections/HomePageSections/AdvantagesSection'
import { ArrivalsSection } from '../sections/HomePageSections/ArrivalsSection'
import { CategoriesSection } from '../sections/HomePageSections/CategoriesSection'
import { CollectionsSection } from '../sections/HomePageSections/CollectionsSection'

export const HomePage = () => {
    return (
        <main className='pt-[80px]'>
            <HeroSection />
            <CategoriesSection />
            <CollectionsSection />
            <ProductSection />
            <FuturedSection />
            <ArrivalsSection />
            <NewsSection />
            <AdvantagesSection />
        </main>
    )
}
