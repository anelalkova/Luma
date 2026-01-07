# Luma Beauty & Skincare - E-commerce Prototype

A working prototype of a cosmetics and personal care e-commerce web application built for a university project.

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: CSS Modules
- **State Management**: React Context API
- **Routing**: React Router v6
- **Backend**: Mock/dummy data (local JSON/in-memory)

## Features

### Core Pages

1. **Landing Page**
   - Hero section with CTA
   - Promotional banner
   - Shop by Category section
   - Shop by Brand section
   - Featured products grid

2. **Product Listing Page**
   - Product grid with filters:
     - Brand filter (checkboxes)
     - Category filter (radio buttons)
     - Price range slider
     - Rating filter
   - Sorting options (price, popularity, rating)
   - Results count display

3. **Product Details Page**
   - Product image gallery with thumbnails
   - Product information (name, price, rating, description)
   - Quantity selector
   - Add to cart functionality
   - Similar products recommendations

4. **Shopping Cart**
   - List of cart items with quantity controls
   - Remove items functionality
   - Subtotal calculation
   - Frequently bought together recommendations

5. **Checkout**
   - Personal information form
   - Shipping information (delivery/pickup)
   - Address fields
   - Payment method selection (card/cash)
   - Card details form (when card selected)
   - Order summary with discount calculation
   - Order creation and redirect to tracking

6. **Order Tracking**
   - Order status tracker with visual progress
   - Order items list
   - Payment and delivery details
   - Order summary
   - Help section links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Button/
│   ├── Footer/
│   ├── Header/
│   └── ProductCard/
├── context/             # React Context for state management
│   └── AppContext.tsx
├── data/                # Mock data
│   └── mockData.ts
├── pages/               # Page components
│   ├── Checkout/
│   ├── Landing/
│   ├── OrderTracking/
│   ├── ProductDetails/
│   ├── ProductListing/
│   └── ShoppingCart/
├── types/               # TypeScript type definitions
│   └── index.ts
├── App.tsx              # Main app component with routing
└── index.tsx            # Entry point
```

## Simulated Features

This is a prototype, so the following features are **simulated** (not fully implemented):

- **Authentication**: User is always logged in as "Anastasija" (simulated)
- **Recommendations**: Simple logic based on category/brand matching
- **Payment**: No real payment processing - clicking "Confirm order" creates an order and redirects
- **Order Tracking**: Status is static (can be extended with time-based simulation)
- **Search**: Search bar is present but not functional
- **Product Images**: Uses placeholder paths (you can add actual images to `/public/images/`)

## Mock Data

The application uses in-memory mock data including:
- 200+ products (first 12 are detailed, rest are generated)
- 10 brands
- 4 categories with subcategories
- Sample reviews
- Order history (created when checkout is completed)

## Customization

### Adding Products

Edit `src/data/mockData.ts` to add or modify products.

### Styling

All components use CSS Modules. Edit the corresponding `.module.css` files to customize styles.

### Recommendations Logic

Modify the `getRecommendations` and `getFrequentlyBoughtTogether` functions in `src/data/mockData.ts` to change the recommendation algorithm.

## Notes

- This is a **prototype** for demonstration purposes
- Desktop layout only (responsive design is basic)
- No real backend or database
- No real authentication or payment processing
- Images are placeholder paths - add actual images to `/public/images/` folder

## License

This project is created for educational purposes as part of a university assignment.
