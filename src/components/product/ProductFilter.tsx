// src/components/product/ProductFilter.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Category } from '../../lib/types';

interface ProductFilterProps {
  categories: Category[];
}

const ProductFilter = ({ categories }: ProductFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => handleCategoryChange('all')}
            className={`w-full text-left ${!selectedCategory ? 'text-pink-500 font-bold' : 'text-gray-600 hover:text-pink-500'}`}>
            All Products
          </button>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => handleCategoryChange(category.id)}
              className={`w-full text-left ${selectedCategory === category.id ? 'text-pink-500 font-bold' : 'text-gray-600 hover:text-pink-500'}`}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
