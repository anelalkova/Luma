import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Order, User, Product } from '../types';
import { mockUser } from '../data/mockData';

interface AppContextType {
  user: User;
  cart: CartItem[];
  orders: Order[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  createOrder: (order: Omit<Order, 'id' | 'orderDate'>) => Order;
  getCartTotal: () => number;
  getCartSubtotal: () => number;
  getCartDiscount: () => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user] = useState<User>(mockUser);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartSubtotal = () => {
    return cart.reduce((total, item) => {
      const price = item.product.originalPrice || item.product.price;
      return total + price * item.quantity;
    }, 0);
  };

  const getCartTotal = () => {
    const subtotal = getCartSubtotal();
    const discount = subtotal * 0.2;
    const delivery = 0;
    return Math.max(0, subtotal - discount + delivery);
  };

  const getCartDiscount = () => {
    const subtotal = getCartSubtotal();
    return subtotal * 0.2;
  };

  const createOrder = (orderData: Omit<Order, 'id' | 'orderDate'>): Order => {
    const newOrder: Order = {
      ...orderData,
      id: Math.floor(Math.random() * 1000000000).toString(),
      orderDate: new Date().toISOString(),
    };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    clearCart();
    return newOrder;
  };

  return (
    <AppContext.Provider
      value={{
        user,
        cart,
        orders,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        createOrder,
        getCartTotal,
        getCartSubtotal,
        getCartDiscount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

