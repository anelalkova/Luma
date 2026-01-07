import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useApp } from '../../context/AppContext';
import { categories, brands } from '../../data/mockData';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const { user, cart } = useApp();
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showBrandsDropdown, setShowBrandsDropdown] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>Luma</span>
          <span className={styles.logoSubtext}>BEAUTY & SKINCARE</span>
        </Link>

        <div className={styles.searchBar}>
          <input type="text" placeholder="Search..." className={styles.searchInput} />
          <SearchIcon className={styles.searchIcon} />
        </div>

        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <div
            className={styles.navLinkWrapper}
            onMouseEnter={() => setShowProductsDropdown(true)}
            onMouseLeave={() => setShowProductsDropdown(false)}
          >
            <div className={styles.navLink}>
              Products <span className={styles.dropdown}>▼</span>
            </div>

            {showProductsDropdown && (
              <div className={styles.dropdownMenu}>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/products?category=${category.name}`}
                    className={styles.dropdownItem}
                    onClick={() => setShowProductsDropdown(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className={styles.navLink}
            onMouseEnter={() => setShowBrandsDropdown(true)}
            onMouseLeave={() => setShowBrandsDropdown(false)}
          >
            Brands <span className={styles.dropdown}>▼</span>
            {showBrandsDropdown && (
              <div className={styles.dropdownMenu}>
                {brands.map((brand) => (
                  <Link
                    key={brand.id}
                    to={`/products?brand=${brand.name}`}
                    className={styles.dropdownItem}
                    onClick={() => setShowBrandsDropdown(false)}
                  >
                    {brand.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/products" className={styles.navLinkSale}>
            Sale %
          </Link>
          <Link to="/cart" className={styles.cartIcon}>
            <ShoppingCartIcon />
            {cartItemCount > 0 && <span className={styles.cartBadge}>{cartItemCount}</span>}
          </Link>
          {user.isLoggedIn && (
            <span className={styles.userGreeting}>Hello, {user.name}!</span>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

