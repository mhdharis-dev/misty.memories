import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { IconSearch } from './Icons';

export const ProductCatalog = ({ 
  products, 
  categories, 
  onAddToCart, 
  onQuickView, 
  wishlistIds, 
  onToggleWishlist 
}) => {
  const [activeCategory, setActiveCategory] = useState('All Fragrances');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products by category and search
  const filteredProducts = products.filter((prod) => {
    const matchesCategory = 
      activeCategory === 'All Fragrances' || 
      prod.category.toLowerCase() === activeCategory.toLowerCase();

    const matchesSearch = 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (prod.arabicName && prod.arabicName.includes(searchQuery)) ||
      (prod.description && prod.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (prod.notes && (
        prod.notes.top.some(n => n.toLowerCase().includes(searchQuery.toLowerCase())) ||
        prod.notes.heart.some(n => n.toLowerCase().includes(searchQuery.toLowerCase())) ||
        prod.notes.base.some(n => n.toLowerCase().includes(searchQuery.toLowerCase()))
      ));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalog" className="catalog-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle">The Niche Collection</span>
          <h2 className="section-title">
            Curated Artisanal <span className="gold-gradient-text">Fragrances</span>
          </h2>
          <p className="section-subtitle">
            Formulated in the United Arab Emirates with pure extracts of aged agarwood, French rose de mai, and rare ambers.
          </p>
        </div>

        {/* Search & Filter Header */}
        <div style={{ maxWidth: '440px', margin: '0 auto 32px', position: 'relative' }}>
          <input
            type="text"
            className="form-input"
            placeholder="Search by perfume name, note (Oud, Rose, Amber)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ paddingLeft: '44px', borderRadius: 'var(--radius-full)' }}
          />
          <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--gold-primary)' }}>
            <IconSearch size={18} />
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.85rem' }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="category-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gold-border)' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--gold-light)', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
              No Fragrances Found
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Try adjusting your search query or choosing another category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
