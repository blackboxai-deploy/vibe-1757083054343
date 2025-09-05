// src/components/layout/Footer.tsx

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-pink-500">Flora</h3>
            <p className="mt-2 text-gray-600">Beautiful flowers for every occasion.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-pink-500">Home</Link></li>
              <li><Link href="/products" className="text-gray-600 hover:text-pink-500">Products</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-pink-500">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-pink-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              {/* Replace with actual social media links and icons */}
              <a href="#" className="text-gray-600 hover:text-pink-500">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-pink-500">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-pink-500">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Flora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
