import { HeroSection } from '../sections/HeroSection'
import { CategoriesSection } from '../sections/CategoriesSection'
import { CollectionsSection } from '../sections/CollectionsSection'
import { ProductSection } from '../sections/ProductSection'

export const HomePage = () => {
    return (
        <main className='pt-[80px]'>
            <HeroSection />
            <CategoriesSection />
            <CollectionsSection />
            <ProductSection />
        </main>
    )
}
