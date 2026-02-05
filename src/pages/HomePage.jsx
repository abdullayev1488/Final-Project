import { HeroSection } from '../sections/HeroSection'
import { NewsSection } from '../sections/NewsSection'
import { FuturedSection } from '../sections/FuturedSection'
import { ProductSection } from '../sections/ProductSection'
import AdvantagesSection from '../sections/AdvantagesSection'
import { ArrivalsSection } from '../sections/ArrivalsSection'
import { CategoriesSection } from '../sections/CategoriesSection'
import { CollectionsSection } from '../sections/CollectionsSection'

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
