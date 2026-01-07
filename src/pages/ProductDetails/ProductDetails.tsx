import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { products, getRecommendations } from '../../data/mockData';
import { useApp } from '../../context/AppContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import Button from '../../components/Button/Button';
import styles from './ProductDetails.module.css';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find((p) => p.id === id);
  const recommendations = product ? getRecommendations(product.id) : [];

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Product not found</h2>
        <Link to="/products">
          <Button>Back to Products</Button>
        </Link>
      </div>
    );
  }

  const productImages = product.images || [product.image];

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(0, quantity + delta));
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <div className={styles.thumbnails}>
            {productImages.map((img, index) => (
              <button
                key={index}
                className={`${styles.thumbnail} ${selectedImage === index ? styles.active : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img || '/images/jelly-grip.jpg'} alt={`${product.name} ${index + 1}`} />
              </button>
            ))}
          </div>
          <div className={styles.mainImage}>
            <img
              src={productImages[selectedImage] || '/images/jelly-grip.jpg'}
              alt={product.name}
            />
          </div>
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.name}>{product.name}</h1>
          <div className={styles.rating}>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className={styles.starIcon} />
            ))}
            <span className={styles.ratingText}>
              {product.rating.toFixed(1)}/5 ({product.reviewCount} reviews)
            </span>
          </div>
          <div className={styles.price}>
            <span className={styles.currentPrice}>${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <p className={styles.description}>{product.description}</p>

          {product.shade && (
            <div className={styles.shade}>
              <strong>Shade:</strong> {product.shade}
            </div>
          )}

          {product.skinType && product.skinType.length > 0 && (
            <div className={styles.skinType}>
              <strong>Skin Type:</strong> {product.skinType.join(', ')}
            </div>
          )}

          <div className={styles.actions}>
            <div className={styles.quantity}>
              <button onClick={() => handleQuantityChange(-1)} className={styles.quantityButton}>
                −
              </button>
              <span className={styles.quantityValue}>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)} className={styles.quantityButton}>
                +
              </button>
            </div>
            <Button onClick={handleAddToCart} className={styles.addToCartButton}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>

      {recommendations.length > 0 && (
        <section className={styles.recommendations}>
          <h2 className={styles.recommendationsTitle}>Similar products</h2>
          <div className={styles.recommendationsGrid}>
            {recommendations.map((rec) => (
              <ProductCard key={rec.id} product={rec} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;

