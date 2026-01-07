import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, brands, categories } from '../../data/mockData';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './ProductListing.module.css';

const ProductListing: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';
  const brandParam = searchParams.get('brand') || '';
  
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    brandParam ? [brandParam] : []
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);

  useEffect(() => {
    const category = searchParams.get('category') || '';
    const brand = searchParams.get('brand') || '';
    setSelectedCategory(category);
    setSelectedBrands(brand ? [brand] : []);
  }, [searchParams]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [selectedRating, setSelectedRating] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popularity');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) => selectedBrands.includes(p.brand));
    }

    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (selectedRating !== 'all') {
      const [min, max] = selectedRating.split('-').map(Number);
      filtered = filtered.filter((p) => p.rating >= min && p.rating <= (max || 5));
    }

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [selectedCategory, selectedBrands, priceRange, selectedRating, sortBy]);

  const toggleBrand = (brandName: string) => {
    setSelectedBrands((prev) => {
      const newBrands = prev.includes(brandName)
        ? prev.filter((b) => b !== brandName)
        : [...prev, brandName];
      
      const params = new URLSearchParams(searchParams);
      if (newBrands.length === 0) {
        params.delete('brand');
      } else if (newBrands.length === 1) {
        params.set('brand', newBrands[0]);
      } else {
        params.set('brand', newBrands[0]);
      }
      setSearchParams(params);
      
      return newBrands;
    });
  };

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
    const params = new URLSearchParams(searchParams);
    if (categoryName) {
      params.set('category', categoryName);
    } else {
      params.delete('category');
    }
    setSearchParams(params);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <h2 className={styles.filterTitle}>Filter by</h2>

          <div className={styles.filterSection}>
            <h3 className={styles.filterSectionTitle}>Brand</h3>
            <div className={styles.filterList}>
              {brands.map((brand) => (
                <label key={brand.id} className={styles.filterItem}>
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand.name)}
                    onChange={() => toggleBrand(brand.name)}
                  />
                  <span>{brand.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.filterSection}>
            <h3 className={styles.filterSectionTitle}>Category</h3>
            <div className={styles.filterList}>
              <label className={styles.filterItem}>
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === ''}
                  onChange={() => handleCategoryChange('')}
                />
                <span>All Categories</span>
              </label>
              {categories.map((category) => (
                <label key={category.id} className={styles.filterItem}>
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category.name}
                    onChange={() => handleCategoryChange(category.name)}
                  />
                  <span>{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.filterSection}>
            <h3 className={styles.filterSectionTitle}>Price</h3>
            <div className={styles.priceRange}>
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className={styles.slider}
              />
              <div className={styles.priceInputs}>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className={styles.priceInput}
                />
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className={styles.priceInput}
                />
              </div>
            </div>
          </div>

          <div className={styles.filterSection}>
            <h3 className={styles.filterSectionTitle}>Rating</h3>
            <div className={styles.filterList}>
              {['4.5+', '3.5-4.5', '2.5-3.5', 'All'].map((rating) => (
                <label key={rating} className={styles.filterItem}>
                  <input
                    type="radio"
                    name="rating"
                    checked={selectedRating === rating.toLowerCase()}
                    onChange={() => setSelectedRating(rating.toLowerCase())}
                  />
                  <span>{rating}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        <main className={styles.main}>
          <div className={styles.header}>
            <p className={styles.resultsCount}>
              Showing "{filteredProducts.length} results" from {products.length}
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={styles.sortSelect}
            >
              <option value="popularity">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className={styles.productsGrid}>
            {filteredProducts.slice(0, 25).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductListing;

