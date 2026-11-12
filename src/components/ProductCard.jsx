import React, { useState } from 'react';
import { IconBag, IconEye, IconHeart, IconStar } from './Icons';

export const ProductCard = ({ 
  product, 
  onAddToCart, 
  onQuickView, 
  isWishlisted, 
  onToggleWishlist 
}) => {
  const [selectedSize, setSelectedSize] = useState(product.size || '50 ML');

  // Calculate price dynamically based on size
  const priceMultiplier = selectedSize.includes('100') ? 1.65 : 1;
  const currentPrice = Math.round(product.price * priceMultiplier);
  const currentOriginalPrice = Math.round(product.originalPrice * priceMultiplier);

  return (
    <div className="product-card">
      {/* Product Image Frame */}
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-img"
          loading="lazy"
        />

        {/* Badges */}
        <div className="product-badges">
          {product.discount && (
            <span className="badge-sale">{product.discount}</span>
          )}
          {product.badge && (
            <span className="badge-gold" style={{ fontSize: '0.68rem', padding: '3px 10px' }}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Card Quick Action Hover Buttons */}
        <div className="product-card-actions">
          <button 
            className={`card-action-btn ${isWishlisted ? 'active' : ''}`}
            onClick={() => onToggleWishlist(product)}
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            aria-label="Wishlist"
          >
            <IconHeart size={18} fill={isWishlisted ? '#c43254' : 'none'} />
          </button>

          <button 
            className="card-action-btn"
            onClick={() => onQuickView(product)}
            title="Quick View Fragrance Details"
            aria-label="Quick View"
          >
            <IconEye size={18} />
          </button>
        </div>
      </div>

      {/* Info Block */}
      <div className="product-info">
        <div className="product-category-sub">{product.category}</div>

        <div className="product-name-row">
          <h3 className="product-title">{product.name}</h3>
          <span className="product-arabic-title">{product.arabicName}</span>
        </div>

        {/* Rating */}
        <div className="product-rating-row">
          <div className="product-rating-stars">
            {[...Array(5)].map((_, i) => (
              <IconStar 
                key={i} 
                size={14} 
                fill={i < Math.floor(product.rating) ? '#D4AF37' : 'rgba(212,175,55,0.25)'} 
              />
            ))}
          </div>
          <span>{product.rating} ({product.reviewsCount} UAE reviews)</span>
        </div>

        <p className="product-tagline">
          {product.tagline || product.description.slice(0, 85) + '...'}
        </p>

        {/* Flacon Volume Selector */}
        {product.sizesAvailable && product.sizesAvailable.length > 1 && (
          <div className="size-selector">
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Size:
            </span>
            {product.sizesAvailable.map((size) => (
              <button
                key={size}
                className={`size-pill ${selectedSize === size ? 'active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        )}

        {/* Pricing & Add to Cart Footer */}
        <div className="product-footer-row">
          <div className="price-box">
            {currentOriginalPrice && (
              <span className="price-original">AED {currentOriginalPrice}</span>
            )}
            <div className="price-current">
              <span className="price-currency">AED</span>
              {currentPrice}
            </div>
          </div>

          <button 
            className="btn-card-cart"
            onClick={() => onAddToCart({ ...product, price: currentPrice, size: selectedSize })}
            title="Add to Luxury Cart"
          >
            <IconBag size={15} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
