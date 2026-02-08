import { TopSection } from "../sections/TopSection"

export const BasketPage = () => {
    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "Basket", path: "/basket" }
    ]
    return (
        <main className='pt-[80px]'>
            <TopSection title="Basket" breadcrumbs={breadcrumbs} />
        </main>
    )
}
