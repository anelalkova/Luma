import React from 'react';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import styles from './Footer.module.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Luma</span>
            <span className={styles.logoSubtext}>BEAUTY & SKINCARE</span>
          </div>
          <p className={styles.description}>
            Your destination for quality cosmetics and personal care products. Discover products
            tailored to your skin and hair needs, from trusted brands you love.
          </p>
          <button className={styles.chatButton}>
            <ChatBubbleIcon /> Start Live Chat
          </button>
        </div>

        <div className={styles.centerSection}>
          <h3 className={styles.sectionTitle}>Company</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#" className={styles.link}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Features
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.rightSection}>
          <h3 className={styles.sectionTitle}>Help</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#" className={styles.link}>
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className={styles.linkHighlighted}>
                Delivery Details
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>© Copyright 2026, All Rights Reserved</p>
        <div className={styles.socialIcons}>
          <TwitterIcon className={styles.socialIcon} />
          <FacebookIcon className={styles.socialIcon} />
          <InstagramIcon className={styles.socialIcon} />
          <GitHubIcon className={styles.socialIcon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

