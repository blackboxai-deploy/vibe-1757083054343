// src/app/products/page.tsx

import ProductGrid from '../../components/product/ProductGrid';
import ProductFilter from '../../components/product/ProductFilter';
import { products, categories } from '../../lib/data';

interface ProductsPageProps {
    searchParams: { [key: string]: string | string[] | undefined }
}

const ProductsPage = ({ searchParams }: ProductsPageProps) => {
  const selectedCategory = typeof searchParams.category === 'string' ? searchParams.category : null;

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 lg:w-1/5">
            <ProductFilter categories={categories} />
        </aside>
        <main className="w-full md:w-3/4 lg:w-4/5">
            <h1 className="text-3xl font-bold mb-8">Our Products</h1>
            <ProductGrid products={filteredProducts} />
        </main>
    </div>
  );
};

export default ProductsPage;
