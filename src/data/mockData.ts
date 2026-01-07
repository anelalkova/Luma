import {Product, Brand, Category, Review, User} from '../types';

export const mockUser: User = {
  id: '1',
  name: 'User',
  email: 'user@mail.com',
  isLoggedIn: true,
};

export const brands: Brand[] = [
  {id: '1', name: 'Maybelline', backgroundColor: '#000000', logo: '/images/brand-maybelline.jpg'},
  {id: '2', name: 'Wet n Wild', backgroundColor: '#FF69B4', logo: '/images/brand-wet-n-wild.jpg'},
  {id: '3', name: 'Charlotte Tilbury', backgroundColor: '#8B4513', logo: '/images/brand-charlotte-tilbury.jpg'},
  {id: '4', name: 'Essence', backgroundColor: '#9370DB', logo: '/images/brand-essence.jpg'},
  {id: '5', name: 'Huda Beauty', backgroundColor: '#000000', logo: '/images/brand-huda-beauty.jpg'},
  {id: '6', name: 'Rare Beauty', backgroundColor: '#FFFFFF', logo: '/images/brand-rare-beauty.jpg'},
  {id: '7', name: 'Rhode', backgroundColor: '#808080', logo: '/images/brand-rhode.jpg'},
  {id: '8', name: 'Patrick TA', backgroundColor: '#8B4513', logo: '/images/brand-patrick-ta.jpg'},
  {id: '9', name: 'MAC', backgroundColor: '#000000', logo: '/images/brand-mac.jpg'},
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Skin',
    subCategories: ['Cleansing', 'Toners & Essences', 'Serums', 'Moisturizers', 'Exfoliation'],
    image: '/images/category-skin.jpg',
  },
  {
    id: '3',
    name: 'Makeup',
    subCategories: ['Foundation', 'Lipstick', 'Mascara', 'Primer', 'Eyeshadow'],
    image: '/images/category-makeup.jpg',
  },
  {
    id: '2',
    name: 'Hair',
    subCategories: ['Shampoo', 'Conditioner', 'Treatment', 'Styling'],
    image: '/images/category-hair.jpg',
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Jelly Grip Hydrating Primer',
    brand: 'Essence',
    category: 'Makeup',
    subCategory: 'Primer',
    price: 5.99,
    rating: 4.6,
    reviewCount: 128,
    image: '/images/jelly-grip.jpg',
    images: [
      '/images/jelly-grip.jpg',
      '/images/jelly-grip-sample.jpg',
      '/images/jelly-grip-display.jpg',
    ],
    description:
      'Achieve the perfect makeup base with essence Jelly Grip Hydrating Primer. This unique jelly primer not only hydrates but also ensures a strong grip on your makeup, delivering a long-lasting effect. Whether you prefer a fresh, even look or need a reliable makeup primer, essence Jelly Grip provides the freedom to choose. Experience the dual benefits of hydration and extended makeup wear.',
    stock: 50,
    skinType: ['Normal', 'Combination', 'Sensitive'],
  },
  {
    id: '2',
    name: 'Acne Control Cleanser',
    brand: 'CeraVe',
    category: 'Skin',
    subCategory: 'Cleansing',
    price: 17.99,
    rating: 4.4,
    reviewCount: 89,
    image: '/images/cerave-acne-control.jpg',
    images: [
      '/images/cerave-acne-control.jpg',
      '/images/cerave-acne-control-sample.jpg',
      '/images/cerave-acne-control-display.jpg',
    ],
    description: 'For acne-prone skin',
    stock: 30,
    skinType: ['Oily', 'Acne-prone'],
  },
  {
    id: '3',
    name: 'St. Barts Cleansing Scalp & Body Scrub',
    brand: 'OUAI',
    category: 'Body',
    subCategory: 'Body Scrub',
    price: 42.0,
    rating: 4.8,
    reviewCount: 156,
    image: '/images/ouai-body-scrub.jpg',
    images: [
      '/images/ouai-body-scrub.jpg',
      '/images/ouai-body-scrub-sample.jpg',
      '/images/ouai-body-scrub-display.jpg',
    ],
    description: 'For dry skin',
    stock: 25,
    skinType: ['Dry'],
  },
  {
    id: '4',
    name: 'Grip Trip Mattifying & Blurring Primer',
    brand: 'Rare Beauty',
    category: 'Makeup',
    subCategory: 'Primer',
    price: 37.0,
    rating: 4.6,
    reviewCount: 203,
    image: '/images/charlotte-primer.jpg',
    images: [
      '/images/charlotte-primer.jpg',
      '/images/charlotte-primer-sample.jpg',
      '/images/charlotte-primer-display.jpg',
    ],
    description: 'For oily skin',
    stock: 40,
    skinType: ['Oily'],
  },
  {
    id: '5',
    name: 'Super Stay Matte Ink Liquid Lipstick',
    brand: 'Maybelline',
    category: 'Makeup',
    subCategory: 'Lipstick',
    price: 13.99,
    rating: 4.5,
    reviewCount: 342,
    image: '/images/maybelline-lipstick.jpg',
    images: [
      '/images/maybelline-lipstick.jpg',
      '/images/maybelline-lipstick-sample.jpg',
      '/images/maybelline-lipstick-display.jpg',
    ],
    description: 'Long-lasting matte liquid lipstick',
    stock: 60,
    shade: 'Charmer',
  },
  {
    id: '6',
    name: 'Super Stay Lumi-Matte Foundation',
    brand: 'Maybelline',
    category: 'Makeup',
    subCategory: 'Foundation',
    price: 15.99,
    rating: 4.7,
    reviewCount: 278,
    image: '/images/maybelline-superstay.jpg',
    images: [
      '/images/maybelline-superstay.jpg',
      '/images/maybelline-superstay-sample.jpg',
      '/images/maybelline-superstay-display.jpg',
    ],
    description: 'Luminous matte finish foundation',
    stock: 45,
    shade: '128',
  },
  {
    id: '7',
    name: 'Grippy Serum Primer',
    brand: 'Maybelline',
    category: 'Makeup',
    subCategory: 'Primer',
    price: 4.99,
    rating: 4.3,
    reviewCount: 95,
    image: '/images/maybelline-grippy.jpg',
    images: [
      '/images/maybelline-grippy.jpg',
      '/images/maybelline-grippy-sample.jpg',
      '/images/maybelline-grippy-display.jpg',
    ],
    description: 'Hydrating serum primer',
    stock: 70,
    skinType: ['All'],
  },
  {
    id: '8',
    name: 'Lash Sensational',
    brand: 'Maybelline',
    category: 'Makeup',
    subCategory: 'Mascara',
    price: 13.99,
    rating: 4.6,
    reviewCount: 412,
    image: '/images/maybelline-mascara.jpg',
    images: [
      '/images/maybelline-mascara.jpg',
      '/images/maybelline-mascara-sample.jpg',
      '/images/maybelline-mascara-display.jpg',
    ],
    description: 'Volumizing mascara',
    stock: 55,
  },
  {
    id: '9',
    name: '8h MATTE Comfort Lip Liner',
    brand: 'Essence',
    category: 'Makeup',
    subCategory: 'Lip Liner',
    price: 4.99,
    rating: 4.2,
    reviewCount: 167,
    image: '/images/essence-liner.jpg',
    images: [
      '/images/essence-liner.jpg',
      '/images/essence-liner-sample.jpg',
      '/images/essence-liner-display.jpg',
    ],
    description: 'Long-lasting matte lip liner',
    stock: 80,
  },
  {
    id: '10',
    name: 'Hydro Grip Hydrating Makeup Primer',
    brand: 'Rare Beauty',
    category: 'Makeup',
    subCategory: 'Primer',
    price: 29.0,
    rating: 4.7,
    reviewCount: 189,
    image: '/images/fenty-primer.jpg',
    images: [
      '/images/fenty-primer.jpg',
      '/images/fenty-primer-sample.jpg',
      '/images/fenty-primer-display.jpg',
    ],
    description: 'Hydrating primer with grip technology',
    stock: 35,
    skinType: ['Normal', 'Dry'],
  },
  {
    id: '11',
    name: 'Catrice Aqua Splash Grip Primer',
    brand: 'Catrice',
    category: 'Makeup',
    subCategory: 'Primer',
    price: 4.99,
    rating: 4.1,
    reviewCount: 134,
    image: '/images/catrice-primer.jpg',
    images: [
      '/images/catrice-primer.jpg',
      '/images/catrice-primer-sample.jpg',
      '/images/catrice-primer-display.jpg',
    ],
    description: 'Water-based gripping primer',
    stock: 65,
  },
  {
    id: '12',
    name: 'Bouncy Plump Smoothing Primer',
    brand: 'Rare Beauty',
    category: 'Makeup',
    subCategory: 'Primer',
    price: 4.99,
    rating: 4.4,
    reviewCount: 98,
    image: '/images/milk-primer.jpg',
    images: [
      '/images/milk-primer.jpg',
      '/images/milk-primer-sample.jpg',
      '/images/milk-primer-display.jpg',
    ],
    description: 'Plumping and smoothing primer',
    stock: 50,
    skinType: ['All'],
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userId: '1',
    userName: 'Anastasija',
    rating: 5,
    comment: 'Amazing primer! My makeup stays on all day.',
    date: '2026-01-01',
  },
  {
    id: '2',
    productId: '1',
    userId: '2',
    userName: 'Maria',
    rating: 4,
    comment: 'Good value for money, works well.',
    date: '2025-12-28',
  },
];

export const getRecommendations = (productId: string, limit: number = 4): Product[] => {
  const product = products.find((p) => p.id === productId);
  if (!product) return [];

  const recommendations = products
    .filter((p) => p.id !== productId && (p.category === product.category || p.brand === product.brand))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);

  return recommendations;
};

export const getFrequentlyBoughtTogether = (cartItems: { product: Product; quantity: number }[]): Product[] => {
  if (cartItems.length === 0) return [];

  const categories = cartItems.map((item) => item.product.category);
  const recommendations = products
    .filter((p) => !cartItems.some((item) => item.product.id === p.id) && categories.includes(p.category))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return recommendations;
};

