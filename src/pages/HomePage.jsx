import { HeroSection } from '../sections/home/HeroSection'
import { NewsSection } from '../sections/home/NewsSection'
import { FuturedSection } from '../sections/home/FuturedSection'
import { ProductSection } from '../sections/home/ProductSection'
import { ArrivalsSection } from '../sections/home/ArrivalsSection'
import { CategoriesSection } from '../sections/home/CategoriesSection'
import { CollectionsSection } from '../sections/home/CollectionsSection'
import { AdvantagesSection } from '../sections/home/AdvantagesSection'

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
