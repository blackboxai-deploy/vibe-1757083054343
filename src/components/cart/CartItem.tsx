// src/components/cart/CartItem.tsx
'use client';

import Image from 'next/image';
import { CartItem as CartItemType } from '../../lib/types';
import { useCart } from '../../hooks/useCart';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center space-x-4">
        <div className="relative h-24 w-24">
            <Image src={item.imageUrl} alt={item.name} layout="fill" objectFit="cover" className="rounded-md" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
            <Button size="icon" variant="outline" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
            <Input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 text-center"
            />
            <Button size="icon" variant="outline" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
        </div>
        <Button variant="destructive" size="icon" onClick={() => removeFromCart(item.id)}>
          X
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
