import { HeroSection } from '../sections/HeroSection'
import { ProductSection } from '../sections/ProductSection'
import { FuturedSection } from '../sections/FuturedSection'
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
        </main>
    )
}
