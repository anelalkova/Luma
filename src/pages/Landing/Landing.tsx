import React from 'react';
import { Link } from 'react-router-dom';
import { products, brands, categories } from '../../data/mockData';
import ProductCard from '../../components/ProductCard/ProductCard';
import Button from '../../components/Button/Button';
import styles from './Landing.module.css';

const Landing: React.FC = () => {
  const featuredProducts = products
    .filter((p) => p.discount || p.rating >= 4.5)
    .slice(0, 4);

  return (
    <div className={styles.landing}>
      <section
        className={styles.hero}
        style={{ backgroundImage: "url('/images/hero-three-women.jpg')" }}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Your skins new best friend</h1>
          <p className={styles.heroSubtitle}>
            Premium skincare, makeup, and hair care for every skin type.
          </p>
          <Link to="/products">
            <Button>Shop now</Button>
          </Link>
        </div>
      </section>

      <section className={styles.promoBanner}>
        <div className={styles.promoContent}>
          <h2 className={styles.promoTitle}>CHRISTMAS SALE</h2>
          <p className={styles.promoSubtitle}>Limited offers and free delivery only this week</p>
          <Button variant="secondary">Check out</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Shop by category</h2>
        <div className={styles.categoryGrid}>
          {categories.slice(0, 3).map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.name}`}
              className={styles.categoryCard}
            >
              <div
                className={styles.categoryImage}
                style={{ backgroundImage: category.image ? `url(${category.image})` : undefined }}
              >
                <span className={styles.categoryName}>{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Shop by brand</h2>
        <div className={styles.brandGrid}>
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/products?brand=${brand.name}`}
              className={styles.brandCard}
              style={{
                backgroundImage: `url(${brand.logo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <div className={styles.productsGrid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;

