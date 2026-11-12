import React from 'react';
import { IconClose, IconHeart, IconTrash, IconBag, IconSparkles } from './Icons';

export const WishlistDrawer = ({
  isOpen,
  onClose,
  wishlistIds,
  products,
  onRemoveFromWishlist,
  onAddToCart,
  onOpenCart
}) => {
  if (!isOpen) return null;

  // Filter full product objects for the wishlisted IDs
  const wishlistedProducts = products.filter(p => wishlistIds.includes(p.id));

  const handleMoveToCart = (product) => {
    onAddToCart({ ...product, size: product.size || '50 ML' }, 1);
  };

  const handleAddAllToCart = () => {
    wishlistedProducts.forEach(p => {
      onAddToCart({ ...p, size: p.size || '50 ML' }, 1);
    });
    onClose();
    if (onOpenCart) onOpenCart();
  };

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="cart-drawer-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IconHeart size={22} fill="#c43254" className="gold-gradient-text" />
            <h3 className="drawer-title">
              Fragrance Wishlist ({wishlistedProducts.length})
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close wishlist">
            <IconClose size={18} />
          </button>
        </div>

        {/* Sub-bar */}
        <div style={{ padding: '10px 24px', background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(212,175,55,0.1)', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
          <span>Your curated private scent selection saved for future indulgence.</span>
        </div>

        {/* Body */}
        <div className="drawer-body">
          {wishlistedProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', margin: 'auto' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(212,175,55,0.08)', border: '1px solid var(--gold-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--gold-primary)' }}>
                <IconHeart size={30} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', color: '#fff', fontSize: '1.2rem', marginBottom: '8px' }}>
                Your Wishlist is Empty
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', maxWidth: '280px', margin: '0 auto 24px', lineHeight: '1.6' }}>
                Save your favorite artisanal perfumes by clicking the heart icon on any flacon.
              </p>
              <button className="btn-outline-gold" onClick={onClose}>
                Explore Fragrances
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {wishlistedProducts.map((product) => (
                <div 
                  key={product.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '72px 1fr auto',
                    gap: '14px',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(212, 175, 55, 0.18)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px'
                  }}
                >
                  {/* Flacon Image */}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{ width: '72px', height: '72px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(212,175,55,0.15)' }} 
                  />

                  {/* Info */}
                  <div>
                    <div style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontFamily: 'var(--font-serif)' }}>
                      {product.category}
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: '#fff', marginBottom: '2px' }}>
                      {product.name}
                    </h4>
                    <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '0.85rem', color: 'var(--gold-light)', opacity: 0.9, marginBottom: '6px' }}>
                      {product.arabicName}
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      {product.originalPrice && (
                        <span style={{ fontSize: '0.78rem', color: '#c43254', textDecoration: 'line-through' }}>
                          AED {product.originalPrice}
                        </span>
                      )}
                      <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1rem', color: 'var(--gold-light)' }}>
                        AED {product.price}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                    <button
                      onClick={() => onRemoveFromWishlist(product)}
                      style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px' }}
                      title="Remove from favorites"
                    >
                      <IconTrash size={16} />
                    </button>

                    <button
                      className="btn-gold"
                      style={{ padding: '6px 12px', fontSize: '0.72rem' }}
                      onClick={() => handleMoveToCart(product)}
                      title="Add to Shopping Bag"
                    >
                      <IconBag size={13} />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {wishlistedProducts.length > 0 && (
          <div className="drawer-footer">
            <button
              className="btn-gold"
              style={{ width: '100%', marginBottom: '10px' }}
              onClick={handleAddAllToCart}
            >
              <IconBag size={16} />
              <span>Add All to Shopping Bag</span>
            </button>
            <button
              className="btn-outline-gold"
              style={{ width: '100%' }}
              onClick={onClose}
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
