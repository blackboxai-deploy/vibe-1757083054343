// src/components/cart/CartSummary.tsx
'use client';

import { useCart } from '../../hooks/useCart';
import { Button } from '../ui/button';
import Link from 'next/link';

const CartSummary = () => {
  const { cartTotal } = useCart();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
      <div className="flex justify-between mb-4">
        <span className="text-gray-600">Subtotal</span>
        <span className="font-semibold">${cartTotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-6">
        <span className="text-gray-600">Shipping</span>
        <span className="font-semibold">$5.00</span>
      </div>
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>${(cartTotal + 5).toFixed(2)}</span>
      </div>
      <Link href="/checkout" legacyBehavior>
        <Button className="mt-6 w-full bg-pink-500 hover:bg-pink-600">Proceed to Checkout</Button>
      </Link>
    </div>
  );
};

export default CartSummary;
