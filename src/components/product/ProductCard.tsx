// src/components/product/ProductCard.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../../lib/types';
import { Button } from '../ui/button';
import { useCart } from '../../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <Link href={`/products/${product.id}`} legacyBehavior>
        <a className="block">
          <div className="relative h-64">
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </a>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
        <Button onClick={() => addToCart(product)} className="mt-4 w-full bg-pink-500 hover:bg-pink-600">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
