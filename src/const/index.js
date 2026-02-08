import {
  IconUser,
  // IconHeart,
  IconStar,
  IconSearch,
  IconBrandX,
  IconBrandTiktok,
  IconShoppingCart,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandVimeo,
  IconBrandYoutube,
} from "@tabler/icons-react";

export const socials = [
  {
    id: 1,
    Icon: IconBrandFacebook,
    path: "https://www.facebook.com/",
    color: "bg-gradient-to-r from-[#b851f5] to-[#f551b8]",
  },
  {
    id: 2,
    Icon: IconBrandX,
    path: "https://x.com/",
    color: "bg-gradient-to-r from-[#b851f5] to-[#f551b8]",
  },
  {
    id: 3,
    Icon: IconBrandVimeo,
    path: "https://vimeo.com/",
    color: "bg-gradient-to-r from-[#b851f5] to-[#f551b8]",
  },
  {
    id: 4,
    Icon: IconBrandInstagram,
    path: "https://www.instagram.com/",
    color: "bg-gradient-to-r from-[#b851f5] to-[#f551b8]",
  },
]

export const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Shop", path: "/shop" },
  { title: "Contact", path: "/contact" }
]

export const navIcons = [
  { Icon: IconSearch, name: "search" },
  { Icon: IconUser, name: "user" },
  { Icon: IconStar, name: "wishlist" },
  { Icon: IconShoppingCart, name: "basket" }
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
    image: "/img/img-2-1.png",
  },
  {
    name: "Gaming Mouse",
    image: "/img/img-2-2.png",
  },
  {
    name: "Headset Gaming",
    image: "/img/img-2-3.png",
  },
  {
    name: "Gaming Controllers",
    image: "/img/img-2-4.png",
  },
]

export const collections = [
  {
    id: 1,
    title: "Primal",
    description: "Agis Quantum Headset",
    image: "/img/img-2-5.jpg",
  },
  {
    id: 2,
    title: "Precision",
    description: "Nighthawk Pro Gaming Mouse",
    image: "/img/img-2-6.jpg",
  },
  {
    id: 3,
    title: "Comfort",
    description: "Hydra Ergomic Keyboard",
    image: "/img/img-2-7.jpg",
  },
];

export const products = [
  {
    id: 1,
    name: "Aurora Glide Wireless Mouse",
    image: "/img/product/1.png",
    price: 90.00,
    oldPrice: 99.00,
    rating: 4,
    reviews: 1
  },
  {
    id: 2,
    name: "Azer BlackWidow V3",
    image: "/img/product/2.webp",
    price: 16.00,
    oldPrice: 19.00,
    rating: 4.5,
    reviews: 2
  },
  {
    id: 3,
    name: "Eclipse RGB Gaming Mouse",
    image: "/img/product/3.webp",
    price: 33.00,
    oldPrice: 44.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 4,
    name: "Eclipse Vortex",
    image: "/img/product/4.webp",
    price: 65.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 5,
    name: "Galaxy Striker",
    image: "/img/product/5.png",
    price: 15.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 6,
    name: "Gaming Logi G Pro X",
    image: "/img/product/6.webp",
    price: 38.00,
    rating: 4,
    reviews: 1
  },
  {
    id: 7,
    name: "Green Broccoli",
    image: "/img/product/7.webp",
    price: 8.00,
    oldPrice: 9.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 8,
    name: "Immersion Xtreme",
    image: "/img/product/8.webp",
    price: 19.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 9,
    name: "Immersion Xtreme Pro",
    image: "/img/product/9.webp",
    price: 50.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 10,
    name: "Inferno Fusion",
    image: "/img/product/10.webp",
    price: 15.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 11,
    name: "Itan X Gaming Headset",
    image: "/img/product/11.webp",
    price: 13.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 12,
    name: "MK5 Module Breeze Nexus",
    image: "/img/product/12.png",
    price: 56.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 13,
    name: "Nebula Quantum Bluetooth",
    image: "/img/product/13.png",
    price: 22.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 14,
    name: "Nebula Ranger",
    image: "/img/product/14.webp",
    price: 32.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 15,
    name: "Onyx Enforcer",
    image: "/img/product/15.webp",
    price: 18.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 16,
    name: "Onyx Predator",
    image: "/img/product/16.webp",
    price: 44.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 17,
    name: "PG2 Console Pro Nexus",
    image: "/img/product/17.webp",
    price: 18.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 18,
    name: "PG4 Console Zephyr Confluence",
    image: "/img/product/18.png",
    price: 39.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 19,
    name: "Phantom Elite Headset Pro",
    image: "/img/product/19.webp",
    price: 52.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 20,
    name: "Precision Alpha",
    image: "/img/product/20.webp",
    price: 30.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 21,
    name: "Pulsar Phantom",
    image: "/img/product/21.webp",
    price: 32.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 22,
    name: "Quantum Click Precision Mouse",
    image: "/img/product/22.webp",
    price: 22.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 23,
    name: "Quantum Raider",
    image: "/img/product/23.png",
    price: 46.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 24,
    name: "Talon Mech",
    image: "/img/product/24.png",
    price: 15.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 25,
    name: "Tempest Enforcer",
    image: "/img/product/25.webp",
    price: 50.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 26,
    name: "Thunderbolt Z Prime",
    image: "/img/product/1.png",
    price: 37.00,
    rating: 0,
    reviews: 0
  },
  {
    id: 27,
    name: "Vortex Gamepad",
    image: "/img/product/2.webp",
    price: 12.00,
    rating: 4,
    reviews: 1
  },
  {
    id: 28,
    name: "Woo Luminous Singularity S6",
    image: "/img/product/3.webp",
    price: 44.00,
    rating: 0,
    reviews: 0
  }
];

export const newsData = [
  {
    id: 1,
    author: "admin",
    date: "16th Nov 2022",
    title: "The Emerging Trend of Sleek and Stylish Gaming Gear Designs",
    image: "/img/blog9.webp"
  },
  {
    id: 2,
    author: "admin",
    date: "16th Nov 2022",
    title: "Essential Gear for Aspiring Content Creators and Streamers",
    image: "/img/blog8.webp"
  },
  {
    id: 3,
    author: "admin",
    date: "16th Nov 2022",
    title: "The Emerging Trend of Sleek and Stylish Gaming Gear Designs",
    image: "/img/blog7.webp"
  },
  {
    id: 4,
    author: "admin",
    date: "16th Nov 2022",
    title: "Great bulk recipes to help use all your organic produce",
    image: "/img/blog6.webp"
  },
];

export const advantages = [
  {
    id: 1,
    icon: "/img/icon-1.webp",
    title: "Free Shipping",
    description: "Free Shipping to Make Your Shopping Experience Seamless."
  },
  {
    id: 2,
    icon: "/img/icon-2.webp",
    title: "Return Policy",
    description: "Flexible Returns to Ensure a Positive Shopping Experience."
  },
  {
    id: 3,
    icon: "/img/icon-3.webp",
    title: "Save Money",
    description: "Shop Smarter and Save Big with Our Money-Saving Solutions."
  },
  {
    id: 4,
    icon: "/img/icon-4.webp",
    title: "Support 24/7",
    description: "Unparalleled Support, Tailored to Your Needs 24 Hours a Day."
  }
];

export const footerLinks = [
  {
    title: "Let Us Help",
    links: [
      { name: "Track My Order", path: "/track-order" },
      { name: "Cancel My Order", path: "/cancel-order" },
      { name: "Return My Order", path: "/return-order" },
      { name: "Search", path: "/search" }
    ]
  },
  {
    title: "Our Policies",
    links: [
      { name: "Shipping & Delivery", path: "/shipping-delivery" },
      { name: "Returns & Cancellations", path: "/returns-cancellations" },
      { name: "Terms & Conditions", path: "/terms-conditions" },
      { name: "Privacy Policy", path: "/privacy-policy" }
    ]
  },
  {
    title: "My Account",
    links: [
      { name: "Help and advice", path: "/help-advice" },
      { name: "Shipping & Returns", path: "/shipping-returns" },
      { name: "Terms and conditions", path: "/terms-conditions-account" },
      { name: "Refund Policy", path: "/refund-policy" }
    ]
  }
];

export const features = [
  {
    id: 1,
    icon: '/img/about1.svg',
    title: 'Choose A Theme',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus.'
  },
  {
    id: 2,
    icon: '/img/about2.svg',
    title: 'Add Products',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus.'
  },
  {
    id: 3,
    icon: '/img/about3.svg',
    title: 'Start Selling',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus.'
  }
];

export const stores = [
  {
    id: 1,
    image: '/img/Store1.webp',
    city: 'Los Angeles',
    address: '3123 Canis Heights Drive, Marina, CA 90071'
  },
  {
    id: 2,
    image: '/img/Store2.webp',
    city: 'New York',
    address: '1904 James Street, Rochester, NY 14604'
  },
  {
    id: 3,
    image: '/img/Store3.webp',
    city: 'California',
    address: '3605 Martha Street, Phoenix, AZ 86040'
  }
];

export const videos = [
  { id: 1, img: '/img/VID1.webp' },
  { id: 2, img: '/img/VID2.webp' },
  { id: 3, img: '/img/VID3.webp' },
  { id: 4, img: '/img/VID4.webp' },
  { id: 5, img: '/img/VID5.webp' },
];

export const teamMembers = [
  { id: 1, name: "Christina M", role: "Creative Director", img: "/img/human1.webp" },
  { id: 2, name: "Alexander J", role: "Lead Designer", img: "/img/human2.webp" },
  { id: 3, name: "Sophia R", role: "Product Manager", img: "/img/human3.webp" },
  { id: 4, name: "Daniel K", role: "Senior Developer", img: "/img/human4.webp" },
  { id: 5, name: "Emma W", role: "UX Researcher", img: "/img/human5.webp" },
];

export const contactSocials = [
  {
    id: 1,
    Icon: IconBrandFacebook,
    path: "https://www.facebook.com/",
    color: "bg-gradient-to-r from-[#b851f5] to-[#f551b8]",
  },
  {
    id: 2,
    Icon: IconBrandX,
    path: "https://x.com/",
    color: "bg-gradient-to-r from-[#b851f5] to-[#f551b8]",
  },
  {
    id: 3,
    Icon: IconBrandVimeo,
    path: "https://vimeo.com/",
    color: "bg-gradient-to-r from-[#b851f5] to-[#f551b8]",
  },
  {
    id: 4,
    Icon: IconBrandInstagram,
    path: "https://www.instagram.com/",
    color: "bg-gradient-to-r from-[#b851f5] to-[#f551b8]",
  },
  {
    id: 5,
    Icon: IconBrandYoutube,
    path: "https://www.youtube.com/",
    color: "bg-gradient-to-r from-[#b851f5] to-[#f551b8]",
  },
];