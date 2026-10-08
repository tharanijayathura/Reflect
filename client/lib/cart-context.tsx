'use client';

import React, { createContext, useContext, useEffect, useReducer, useCallback } from 'react';

export type CartItem = {
  productId: number;
  name: string;
  image: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  slug: string;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { productId: number; size: string; color: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: number; size: string; color: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );
      if (existing >= 0) {
        const updated = [...state.items];
        updated[existing] = {
          ...updated[existing],
          quantity: updated[existing].quantity + action.payload.quantity,
        };
        return { items: updated };
      }
      return { items: [...state.items, action.payload] };
    }
    case 'REMOVE_ITEM':
      return {
        items: state.items.filter(
          (item) =>
            !(
              item.productId === action.payload.productId &&
              item.size === action.payload.size &&
              item.color === action.payload.color
            )
        ),
      };
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          items: state.items.filter(
            (item) =>
              !(
                item.productId === action.payload.productId &&
                item.size === action.payload.size &&
                item.color === action.payload.color
              )
          ),
        };
      }
      return {
        items: state.items.map((item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size &&
          item.color === action.payload.color
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    case 'CLEAR_CART':
      return { items: [] };
    case 'LOAD_CART':
      return { items: action.payload };
    default:
      return state;
  }
}

type CartContextType = {
  items: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: number, size: string, color: string) => void;
  updateQuantity: (productId: number, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    try {
      const saved = localStorage.getItem('reflect-cart');
      if (saved) {
        dispatch({ type: 'LOAD_CART', payload: JSON.parse(saved) });
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('reflect-cart', JSON.stringify(state.items));
    } catch {
      // ignore
    }
  }, [state.items]);

  const addToCart = useCallback((item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  }, []);

  const removeFromCart = useCallback((productId: number, size: string, color: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, size, color } });
  }, []);

  const updateQuantity = useCallback((productId: number, size: string, color: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, size, color, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items: state.items, cartCount, cartTotal, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
