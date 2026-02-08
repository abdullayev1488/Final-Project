import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ShopPage } from "../pages/ShopPage";
import { ProductPage } from "../pages/ProductPage";
import { ContactPage } from "../pages/ContactPage";
import { BasketPage } from "../pages/BasketPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { WishlistPage } from "../pages/WishlistPage";
import { ErrorPage } from "../pages/ErrorPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product" element={<ProductPage />} /> {/* /product/:path */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
);