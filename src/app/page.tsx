// src/app/page.tsx

import Link from 'next/link';
import { Button } from '../components/ui/button';
import ProductGrid from '../components/product/ProductGrid';
import { products, categories } from '../lib/data';

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-pink-100 rounded-lg p-12 text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-800">Welcome to Flora</h1>
        <p className="text-lg text-pink-700 mt-2">Your one-stop shop for fresh and beautiful flowers.</p>
        <Link href="/products" legacyBehavior>
            <Button className="mt-6 bg-pink-500 hover:bg-pink-600">Shop Now</Button>
        </Link>
      </div>

      {/* Featured Products Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <ProductGrid products={featuredProducts} />
      </section>

      {/* Categories Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/products?category=${category.id}`} legacyBehavior>
              <a className="block bg-white p-4 rounded-lg shadow-md text-center hover:bg-pink-50 transition-colors">
                <p className="font-semibold">{category.name}</p>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
