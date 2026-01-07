export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subCategory?: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  images?: string[];
  description: string;
  stock: number;
  skinType?: string[];
  hairType?: string[];
  shade?: string;
}

export interface Brand {
  id: string;
  name: string;
  logo?: string;
  backgroundColor?: string;
}

export interface Category {
  id: string;
  name: string;
  subCategories?: string[];
  image?: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  delivery: number;
  total: number;
  orderDate: string;
  estimatedDelivery: string;
  status: 'confirmed' | 'shipped' | 'outForDelivery' | 'delivered';
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  city?: string;
  street?: string;
  streetNumber?: string;
  country?: string;
}

export interface PaymentMethod {
  type: 'card' | 'cash';
  cardNumber?: string;
  cardType?: 'visa' | 'mastercard';
}

export interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

