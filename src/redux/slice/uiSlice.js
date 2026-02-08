import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    basketOpen: false,
    wishlistOpen: false,
    authOpen: false,
    searchOpen: false,
    mobileMenuOpen: false,
    quickViewOpen: false,
    selectedProduct: null,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleBasket: (state) => {
            state.basketOpen = !state.basketOpen;
        },
        setBasketOpen: (state, action) => {
            state.basketOpen = action.payload;
        },
        toggleWishlist: (state) => {
            state.wishlistOpen = !state.wishlistOpen;
        },
        setWishlistOpen: (state, action) => {
            state.wishlistOpen = action.payload;
        },
        toggleAuth: (state) => {
            state.authOpen = !state.authOpen;
        },
        setAuthOpen: (state, action) => {
            state.authOpen = action.payload;
        },
        toggleSearch: (state) => {
            state.searchOpen = !state.searchOpen;
        },
        setSearchOpen: (state, action) => {
            state.searchOpen = action.payload;
        },
        toggleMobileMenu: (state) => {
            state.mobileMenuOpen = !state.mobileMenuOpen;
        },
        setMobileMenuOpen: (state, action) => {
            state.mobileMenuOpen = action.payload;
        },
        setQuickViewOpen: (state, action) => {
            state.quickViewOpen = action.payload;
        },
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        closeAll: (state) => {
            state.basketOpen = false;
            state.wishlistOpen = false;
            state.authOpen = false;
            state.searchOpen = false;
            state.mobileMenuOpen = false;
            state.quickViewOpen = false;
        }
    },
});

export const {
    toggleBasket,
    setBasketOpen,
    toggleWishlist,
    setWishlistOpen,
    toggleAuth,
    setAuthOpen,
    toggleSearch,
    setSearchOpen,
    toggleMobileMenu,
    setMobileMenuOpen,
    setQuickViewOpen,
    setSelectedProduct,
    closeAll,
} = uiSlice.actions;

export default uiSlice.reducer;
