import { TopSection } from "../sections/TopSection";

export const ShopPage = () => {
    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Shop", path: "/shop" }
    ]
    return (
        <main className='pt-[80px]'>
            <TopSection title="Shop" breadcrumbs={breadcrumbs} />
        </main>
    )
}
