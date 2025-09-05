// src/lib/data.ts
import { Product, Category, Order, Customer } from './types';

export const categories: Category[] = [
  { id: 'roses', name: 'Roses', description: 'Classic and elegant roses for any occasion.', imageUrl: 'https://placehold.co/600x400?text=Roses' },
  { id: 'tulips', name: 'Tulips', description: 'Vibrant and colorful tulips to brighten any day.', imageUrl: 'https://placehold.co/600x400?text=Tulips' },
  { id: 'lilies', name: 'Lilies', description: 'Fragrant and beautiful lilies.', imageUrl: 'https://placehold.co/600x400?text=Lilies' },
  { id: 'bouquets', name: 'Mixed Bouquets', description: 'Artfully arranged bouquets for a special touch.', imageUrl: 'https://placehold.co/600x400?text=Mixed+Bouquets' },
  { id: 'wedding', name: 'Wedding Arrangements', description: 'Stunning floral arrangements for your special day.', imageUrl: 'https://placehold.co/600x400?text=Wedding+Flowers' },
  { id: 'sympathy', name: 'Sympathy Flowers', description: 'Thoughtful arrangements to express condolences.', imageUrl: 'https://placehold.co/600x400?text=Sympathy+Flowers' },
];

export const products: Product[] = [
  // Roses
  {
    id: 'classic-red-roses',
    name: 'Classic Red Roses',
    description: 'A dozen beautiful long-stemmed red roses, a timeless symbol of love.',
    price: 49.99,
    category: 'roses',
    imageUrl: 'https://placehold.co/600x400?text=Classic+Red+Roses',
    stock: 50,
    variants: [{ type: 'Quantity', options: ['6', '12', '24'] }],
  },
  {
    id: 'sunburst-yellow-roses',
    name: 'Sunburst Yellow Roses',
    description: "Brighten someone's day with a dozen vibrant yellow roses.",
    price: 45.99,
    category: 'roses',
    imageUrl: 'https://placehold.co/600x400?text=Yellow+Roses',
    stock: 40,
  },
  // Tulips
  {
    id: 'rainbow-tulip-bunch',
    name: 'Rainbow Tulip Bunch',
    description: 'A cheerful mix of colorful tulips to bring joy to any room.',
    price: 39.99,
    category: 'tulips',
    imageUrl: 'https://placehold.co/600x400?text=Rainbow+Tulips',
    stock: 60,
  },
  {
    id: 'elegant-white-tulips',
    name: 'Elegant White Tulips',
    description: 'A simple and elegant bunch of 15 white tulips.',
    price: 35.99,
    category: 'tulips',
    imageUrl: 'https://placehold.co/600x400?text=White+Tulips',
    stock: 55,
  },
  // Lilies
  {
    id: 'stargazer-lilies',
    name: 'Stargazer Lilies',
    description: 'Aromatic and dramatic Stargazer lilies that make a statement.',
    price: 42.99,
    category: 'lilies',
    imageUrl: 'https://placehold.co/600x400?text=Stargazer+Lilies',
    stock: 30,
  },
  // Bouquets
  {
    id: 'spring-splendor-bouquet',
    name: 'Spring Splendor Bouquet',
    description: 'A seasonal mix of fresh spring flowers, including tulips, daffodils, and hyacinths.',
    price: 59.99,
    category: 'bouquets',
    imageUrl: 'https://placehold.co/600x400?text=Spring+Bouquet',
    stock: 25,
  },
  {
    id: 'summer-garden-bouquet',
    name: 'Summer Garden Bouquet',
    description: 'A vibrant bouquet of sunflowers, daisies, and other summer blooms.',
    price: 65.99,
    category: 'bouquets',
    imageUrl: 'https://placehold.co/600x400?text=Summer+Bouquet',
    stock: 20,
  },
  // Wedding
  {
    id: 'bridal-bliss-bouquet',
    name: 'Bridal Bliss Bouquet',
    description: 'An exquisite bouquet of white roses, peonies, and eucalyptus for the perfect wedding day.',
    price: 149.99,
    category: 'wedding',
    imageUrl: 'https://placehold.co/600x400?text=Bridal+Bouquet',
    stock: 10,
  },
  {
    id: 'classic-rose-centerpiece',
    name: 'Classic Rose Centerpiece',
    description: "A beautiful centerpiece for wedding tables, featuring roses and baby's breath.",
    price: 89.99,
    category: 'wedding',
    imageUrl: 'https://placehold.co/600x400?text=Wedding+Centerpiece',
    stock: 15,
  },
  // Sympathy
  {
    id: 'peaceful-white-arrangement',
    name: 'Peaceful White Arrangement',
    description: 'A tasteful arrangement of white lilies, roses, and carnations to express sympathy.',
    price: 79.99,
    category: 'sympathy',
    imageUrl: 'https://placehold.co/600x400?text=Sympathy+Arrangement',
    stock: 20,
  },
];

export const customers: Customer[] = [
    {
        id: 'cust-001',
        name: 'Alice Johnson',
        email: 'alice.j@example.com',
        phone: '123-456-7890',
        address: { street: '123 Main St', city: 'Metropolis', state: 'CA', zip: '90210' }
    },
    {
        id: 'cust-002',
        name: 'Bob Smith',
        email: 'bob.s@example.com',
        phone: '987-654-3210',
        address: { street: '456 Oak Ave', city: 'Gotham', state: 'NY', zip: '10001' }
    }
];

export const orders: Order[] = [
    {
        id: 'ord-001',
        customer: customers[0],
        items: [{ ...products[0], quantity: 1 }, { ...products[2], quantity: 2 }],
        total: 49.99 + (39.99 * 2),
        status: 'Delivered',
        orderDate: '2023-10-26',
        deliveryDate: '2023-10-27'
    },
    {
        id: 'ord-002',
        customer: customers[1],
        items: [{ ...products[6], quantity: 1 }],
        total: 65.99,
        status: 'Shipped',
        orderDate: '2023-10-28'
    },
    {
        id: 'ord-003',
        customer: customers[0],
        items: [{ ...products[8], quantity: 3 }],
        total: 89.99 * 3,
        status: 'Processing',
        orderDate: '2023-10-30'
    }
];
