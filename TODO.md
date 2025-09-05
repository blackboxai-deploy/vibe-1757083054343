## E-Commerce Flower Shop Implementation Plan

### Phase 1: Core Structure and Data

- [x] **Data Structure**: Define TypeScript types for Products, Orders, Customers, and Categories in `src/lib/types.ts`.
- [x] **Sample Data**: Create realistic sample data for flowers, categories, and orders in `src/lib/data.ts`.
- [x] **State Management**: Implement a custom hook for cart management (`src/hooks/useCart.ts`) and a global state context (`src/lib/store.ts`).

### Phase 2: Layout and Public Components

- [x] **Global Layout**: Create the main app layout in `src/app/layout.tsx` with a shared Header and Footer.
- [x] **Header Component**: Build `src/components/layout/Header.tsx` with navigation for Home, Products, and Cart.
- [x] **Footer Component**: Build `src/components/layout/Footer.tsx` with relevant links and information.
- [x] **Product Components**:
    - `src/components/product/ProductCard.tsx` for individual product display.
    - `src/components/product/ProductGrid.tsx` to arrange product cards.
    - `src/components/product/ProductFilter.tsx` for sidebar filtering options.
- [x] **Cart Components**:
    - `src/components/cart/CartItem.tsx` for items in the cart.
    - `src/components/cart/CartSummary.tsx` to display totals and checkout button.

### Phase 3: Public-Facing Pages

- [ ] **Homepage**: Implement `src/app/page.tsx` with a hero section, featured products, and category links.
- [ ] **Products Page**: Implement `src/app/products/page.tsx` to display all products with filtering.
- [ ] **Product Details Page**: Implement `src/app/products/[id]/page.tsx` to show detailed information for a single product.
- [ ] **Cart Page**: Implement `src/app/cart/page.tsx` to display and manage the shopping cart.
- [ ] **Checkout Page**: Implement `src/app/checkout/page.tsx` with a form for customer details and a simulated payment process.
- [ ] **Order Status Page**: Implement `src/app/orders/[id]/page.tsx` to show order confirmation and status.

### Phase 4: Admin Panel

- [ ] **Admin Layout**: Create `src/components/layout/AdminLayout.tsx` which includes the `AdminSidebar`.
- [ ] **Admin Sidebar**: Build `src/components/admin/AdminSidebar.tsx` with navigation links for the admin sections.
- [ ] **Admin Components**:
    - `src/components/admin/StatsCard.tsx` for displaying key metrics.
    - `src/components/admin/DataTable.tsx` for displaying lists of products, orders, and customers.
- [ ] **Admin Dashboard**: Implement `src/app/admin/page.tsx` with overview stats and recent activity.
- [ ] **Admin Product Management**: Implement `src/app/admin/products/page.tsx`.
- [ ] **Admin Order Management**: Implement `src/app/admin/orders/page.tsx`.
- [ ] **Admin Customer Management**: Implement `src/app/admin/customers/page.tsx`.

### Phase 5: API and Finalization

- [ ] **API Routes**: Create API endpoints to serve mock data for products, orders, and customers.
- [ ] **Image Processing (AUTOMATIC)**: Process all `placehold.co` URLs into AI-generated images. This step runs automatically.
- [ ] **Build Project**: Run `pnpm run build --no-lint` to compile the application.
- [ ] **Start and Test**: Run `pnpm start`, get the preview URL, and perform final testing.
