"use client";

import { useSyncExternalStore } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
};

let cart: CartItem[] = [];
const listeners = new Set<() => void>();
let snapshot: CartState;

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function createSnapshot(): CartState {
  return {
    cart,
    addToCart(item) {
      const existing = cart.find((entry) => entry.id === item.id);
      cart = existing
        ? cart.map((entry) =>
            entry.id === item.id
              ? { ...entry, quantity: entry.quantity + item.quantity }
              : entry
          )
        : [...cart, item];
      snapshot = createSnapshot();
      emit();
    },
    clearCart() {
      cart = [];
      snapshot = createSnapshot();
      emit();
    },
    getTotalPrice() {
      return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  };
}

snapshot = createSnapshot();

function getState(): CartState {
  return snapshot;
}

function useCartStore(): CartState;
function useCartStore<T>(selector: (state: CartState) => T): T;
function useCartStore<T>(selector?: (state: CartState) => T) {
  const state = useSyncExternalStore(subscribe, getState, getState);
  return selector ? selector(state) : state;
}

export { useCartStore };
export type { CartItem };
