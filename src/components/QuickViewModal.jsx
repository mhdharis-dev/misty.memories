import React, { useState } from 'react';
import { IconClose, IconBag, IconStar, IconShield, IconTruck, IconSparkles } from './Icons';

export const QuickViewModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState(product?.size || '50 ML');
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const priceMultiplier = selectedSize.includes('100') ? 1.65 : 1;
  const currentPrice = Math.round(product.price * priceMultiplier);
  const currentOriginalPrice = Math.round(product.originalPrice * priceMultiplier);

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      size: selectedSize,
      price: currentPrice
    }, quantity);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="quick-view-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <IconClose size={18} />
        </button>

        <div className="quick-view-grid">
          {/* Image & Badges */}
          <div style={{ position: 'relative' }}>
            <img 
              src={product.image} 
              alt={product.name} 
              className="quick-view-img"
            />
            {product.discount && (
              <span className="badge-sale" style={{ position: 'absolute', top: '16px', left: '16px' }}>
                {product.discount}
              </span>
            )}
          </div>

          {/* Details */}
          <div>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontFamily: 'var(--font-serif)', marginBottom: '6px' }}>
              {product.category} • {product.concentration}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.9rem', color: '#fff' }}>
                {product.name}
              </h2>
              <span style={{ fontFamily: 'var(--font-arabic)', fontSize: '1.6rem', color: 'var(--gold-light)' }}>
                {product.arabicName}
              </span>
            </div>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', gap: '2px', color: 'var(--gold-primary)' }}>
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} size={15} fill={i < Math.floor(product.rating) ? '#D4AF37' : 'rgba(212,175,55,0.25)'} />
                ))}
              </div>
              <span style={{ color: 'var(--text-secondary)' }}>{product.rating} / 5.0</span>
              <span>({product.reviewsCount} UAE Customer Reviews)</span>
            </div>

            {/* Price Row */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '18px' }}>
              {currentOriginalPrice && (
                <span style={{ fontSize: '1.1rem', color: '#c43254', textDecoration: 'line-through', fontFamily: 'var(--font-serif)' }}>
                  AED {currentOriginalPrice}
                </span>
              )}
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, color: 'var(--gold-light)' }}>
                <span style={{ fontSize: '1rem', color: 'var(--gold-primary)', marginRight: '4px' }}>AED</span>
                {currentPrice}
              </div>
              <span className="badge-gold">In Stock ({product.stock} units)</span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '22px' }}>
              {product.description}
            </p>

            {/* Size Selector */}
            {product.sizesAvailable && (
              <div style={{ marginBottom: '20px' }}>
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-light)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Flacon Size:
                </span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {product.sizesAvailable.map((s) => (
                    <button
                      key={s}
                      className={`size-pill ${selectedSize === s ? 'active' : ''}`}
                      onClick={() => setSelectedSize(s)}
                      style={{ padding: '8px 18px' }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Scent Notes Breakdown */}
            {product.notes && (
              <div style={{ background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(212, 175, 55, 0.15)', borderRadius: 'var(--radius-md)', padding: '14px', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-primary)', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
                  Olfactory Pyramid
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  <strong style={{ color: '#fff' }}>Top:</strong> {product.notes.top.join(' • ')}
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  <strong style={{ color: '#fff' }}>Heart:</strong> {product.notes.heart.join(' • ')}
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: '#fff' }}>Base:</strong> {product.notes.base.join(' • ')}
                </div>
              </div>
            )}

            {/* Quantity and CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: 'var(--radius-full)', padding: '6px 14px' }}>
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '1.1rem' }}
                >
                  -
                </button>
                <span style={{ fontWeight: 700, minWidth: '20px', textAlign: 'center' }}>{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '1.1rem' }}
                >
                  +
                </button>
              </div>

              <button 
                className="btn-gold" 
                style={{ flexGrow: 1 }}
                onClick={handleAddToCart}
              >
                <IconBag size={18} />
                <span>Add to Cart • AED {currentPrice * quantity}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
