import React from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { Product } from '../../types';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image || '/images/jelly-grip.jpg'} alt={product.name} className={styles.image} />
        {product.discount && (
          <span className={styles.discountBadge}>-{product.discount}%</span>
        )}
      </div>
      {product.skinType && product.skinType.length > 0 && (
        <p className={styles.label}>
          For {product.skinType.join(', ')} Skin Types
        </p>
      )}
      <h3 className={styles.name}>{product.name}</h3>
      <div className={styles.footer}>
        <span className={styles.price}>
          ${product.price.toFixed(2)}
          {product.originalPrice && (
            <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
          )}
        </span>
        <div className={styles.rating}>
          <StarIcon className={styles.star} />
          <span>{product.rating.toFixed(1)}/5</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

