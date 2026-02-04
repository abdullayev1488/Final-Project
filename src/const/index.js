import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconBrandTiktok } from "@tabler/icons-react";

export const socials = [
  { Icon: IconBrandFacebook, name: "facebook" },
  { Icon: IconBrandInstagram, name: "instagram" },
  { Icon: IconBrandX, name: "twitter" },
  { Icon: IconBrandTiktok, name: "tiktok" }
]

export const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Shop", path: "/shop" },
  { title: "Product", path: "/product" },
  { title: "Contact", path: "/contact" }
]

import { IconSearch, IconUser, IconHeart, IconShoppingCart } from "@tabler/icons-react";

export const navIcons = [
  { Icon: IconSearch, name: "search" },
  { Icon: IconUser, name: "user" },
  { Icon: IconHeart, name: "heart" },
  { Icon: IconShoppingCart, name: "cart" }
]

export const colors = [
  "linear-gradient(90deg, #A8FF78 48%, #78FFD6 100%)",
  "linear-gradient(90deg, #FF416C 0%, #FF4B2B 100%)",
  "linear-gradient(90deg, #B2FEFA 0%, #0ED2F7 100%)",
  "linear-gradient(90deg, #FFEFBA 0%, #DDEFBB 100%)",
]
export const categories = [
  {
    name: "Keyboards Gaming",
    image: "/img/photos/img-2-1.png",
  },
  {
    name: "Gaming Mouse",
    image: "/img/photos/img-2-2.png",
  },
  {
    name: "Headset Gaming",
    image: "/img/photos/img-2-3.png",
  },
  {
    name: "Gaming Controllers",
    image: "/img/photos/img-2-4.png",
  },
]

export const collections = [
  {
    id: 1,
    title: "Primal",
    description: "Agis Quantum Headset",
    image: "/img/photos/img-2-5.jpg",
  },
  {
    id: 2,
    title: "Precision",
    description: "Nighthawk Pro Gaming Mouse",
    image: "/img/photos/img-2-6.jpg",
  },
  {
    id: 3,
    title: "Comfort",
    description: "Hydra Ergomic Keyboard",
    image: "/img/photos/img-2-7.jpg",
  },
];

export const products = [
  {
    id: 1,
    name: "Green Broccoli",
    image: "/img/photos/1.png",
    price: 8.00,
    oldPrice: 9.00,
    discount: "-11%",
    rating: 0,
    reviews: 0
  },
  {
    id: 2,
    name: "Gaming Logi G Pro X",
    image: "/img/photos/2.png",
    price: 38.00,
    rating: 4,
    reviews: 1
  },
  {
    id: 3,
    name: "Vortex Gamepad",
    image: "/img/photos/3.png",
    price: 12.00,
    rating: 4,
    reviews: 1
  },
  {
    id: 4,
    name: "Precision Alpha",
    image: "/img/photos/4.png",
    price: 30.00,
    badge: "New",
    rating: 0,
    reviews: 0
  },
  {
    id: 5,
    name: "Onyx Enforcer",
    image: "/img/photos/5.png",
    price: 18.00,
    rating: 0,
    reviews: 0
  }
];