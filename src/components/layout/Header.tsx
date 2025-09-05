// src/components/layout/Header.tsx
'use client';

import Link from 'next/link';

import { useCart } from '../../hooks/useCart';
import { Button } from '../ui/button';

const Header = () => {
  const { state } = useCart();
  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-pink-500 hover:text-pink-600">
              Flora
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-pink-500 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-pink-500 transition-colors">
              Products
            </Link>
            <Link href="/admin" className="text-gray-600 hover:text-pink-500 transition-colors">
                Admin
            </Link>
          </nav>
          <div className="flex items-center">
            <Link href="/cart" legacyBehavior>
              <Button variant="ghost" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-gray-600"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                {itemCount > 0 && (
                  <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
