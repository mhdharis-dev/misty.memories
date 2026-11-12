import React, { useState } from 'react';
import { IconSparkles, IconBag, IconEye, IconShield, IconTruck } from './Icons';

export const Hero = ({ heroProduct, onAddToCart, onQuickView }) => {
  const [selectedSize, setSelectedSize] = useState('50 ML');
  
  if (!heroProduct) return null;

  const currentPrice = selectedSize === '50 ML' ? heroProduct.price : Math.round(heroProduct.price * 1.7);
  const currentOriginalPrice = selectedSize === '50 ML' ? heroProduct.originalPrice : Math.round(heroProduct.originalPrice * 1.7);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-glow"></div>

      <div className="container hero-grid">
        {/* Left Column: Product Information & Offer */}
        <div className="hero-content">
          <div className="hero-tag">
            <span className="badge-gold">
              <IconSparkles size={14} /> Artisanal UAE Luxury Edition
            </span>
            <span className="badge-sale">Limited Ramadan Offer</span>
          </div>

          <h1 className="hero-title">
            Woody Rose <span className="gold-gradient-text">Elixir</span>
          </h1>

          <div className="hero-arabic-title">
            عطر وودي روز — مستي ميموريز
          </div>

          <p className="hero-description">
            {heroProduct.description}
          </p>

          {/* Size / Volume Selector */}
          <div style={{ marginBottom: '22px' }}>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold-primary)', display: 'block', marginBottom: '8px' }}>
              Select Flacon Volume:
            </span>
            <div style={{ display: 'flex', gap: '10px' }}>
              {heroProduct.sizesAvailable.map((size) => (
                <button
                  key={size}
                  className={`size-pill ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                  style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                >
                  {size} Eau De Parfum
                </button>
              ))}
            </div>
          </div>

          {/* Price Callout Box: AED 59 -> AED 39 */}
          <div className="hero-price-wrap">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Exclusive Launch Price
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px' }}>
                <span className="hero-original-price">
                  AED {currentOriginalPrice}
                </span>
                <div className="hero-sale-price">
                  <span>AED</span> {currentPrice}
                </div>
              </div>
            </div>
            <div className="badge-sale" style={{ marginLeft: '12px' }}>
              Save 34%
            </div>
          </div>

          {/* Call to Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              className="btn-gold"
              onClick={() => onAddToCart({ ...heroProduct, price: currentPrice, size: selectedSize })}
            >
              <IconBag size={18} />
              <span>Add To Cart • AED {currentPrice}</span>
            </button>

            <button 
              className="btn-outline-gold"
              onClick={() => onQuickView(heroProduct)}
            >
              <IconEye size={18} />
              <span>Fragrance Details</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div style={{ display: 'flex', gap: '24px', marginTop: '36px', borderTop: '1px solid rgba(212, 175, 55, 0.15)', paddingTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              <IconTruck size={18} className="gold-gradient-text" />
              <span>Same-Day Dubai &amp; UAE Delivery</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              <IconShield size={18} className="gold-gradient-text" />
              <span>100% Authentic French &amp; Oriental Oils</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Perfume Stage with Floating Accords */}
        <div className="hero-bottle-stage">
          {/* Floating Accord Tag 1 */}
          <div className="floating-scent-tag tag-top">
            <span style={{ color: 'var(--gold-light)' }}>🌹 Velvet Taif Rose</span>
          </div>

          {/* Perfume Bottle Card */}
          <div className="hero-bottle-card">
            <img 
              src={heroProduct.image} 
              alt="Misty Memories Woody Rose 50ML Perfume" 
              className="hero-image"
            />
          </div>

          {/* Floating Accord Tag 2 */}
          <div className="floating-scent-tag tag-bottom">
            <span style={{ color: 'var(--gold-light)' }}>🪵 Cambodian Agarwood (Oud)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
