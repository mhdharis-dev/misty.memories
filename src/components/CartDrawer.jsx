import React, { useState } from 'react';
import { IconClose, IconTrash, IconBag, IconCheck, IconTruck, IconShield } from './Icons';
import { UAE_EMIRATES } from '../data/initialData';

export const CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currentUser,
  onRequireAuth,
  onPlaceOrder
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  // UAE Delivery Form State
  const [formData, setFormData] = useState({
    fullName: currentUser?.name || '',
    phone: currentUser?.phone || '+971 ',
    emirate: currentUser?.emirate || 'Dubai',
    address: currentUser?.address || '',
    paymentMethod: 'Cash on Delivery (UAE)',
    deliveryNotes: ''
  });

  if (!isOpen) return null;

  // Subtotal Calculation
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const freeShippingThreshold = 150;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 25;
  const total = subtotal - discountAmount + shippingFee;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'MISTY10') {
      setDiscountPercent(10);
      setPromoSuccess('10% VIP Discount applied successfully!');
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Use code: MISTY10');
      setPromoSuccess('');
    }
  };

  const handleStartCheckout = () => {
    if (!currentUser) {
      // User must be logged in to order, per voice instruction!
      onRequireAuth('Please sign in or create your account to place an order.');
      return;
    }
    // Pre-fill user data if available
    setFormData(prev => ({
      ...prev,
      fullName: prev.fullName || currentUser.name || '',
      phone: prev.phone.length > 5 ? prev.phone : (currentUser.phone || '+971 50 '),
      emirate: prev.emirate || currentUser.emirate || 'Dubai',
      address: prev.address || currentUser.address || ''
    }));
    setIsCheckingOut(true);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert('Please fill in all UAE delivery fields.');
      return;
    }

    const newOrder = {
      id: `MM-UAE-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: formData.fullName,
      customerEmail: currentUser.email,
      customerPhone: formData.phone,
      emirate: formData.emirate,
      address: formData.address,
      paymentMethod: formData.paymentMethod,
      date: new Date().toISOString().split('T')[0],
      items: [...cartItems],
      subtotal,
      discount: discountAmount,
      shippingFee,
      totalAED: total,
      status: 'Processing in Dubai Hub'
    };

    onPlaceOrder(newOrder);
    setIsCheckingOut(false);
  };

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="cart-drawer-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IconBag size={22} className="gold-gradient-text" />
            <h3 className="drawer-title">
              {isCheckingOut ? 'UAE Express Checkout' : 'Luxury Shopping Bag'}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close cart">
            <IconClose size={18} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        {!isCheckingOut && (
          <div style={{ padding: '12px 24px', background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
              <span>
                {subtotal >= freeShippingThreshold 
                  ? '✨ You qualify for Complimentary UAE Delivery!' 
                  : `Add AED ${freeShippingThreshold - subtotal} more for Free UAE Delivery`}
              </span>
              <span style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
                {Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100))}%
              </span>
            </div>
            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
              <div 
                style={{ 
                  width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`, 
                  height: '100%', 
                  background: 'var(--gold-gradient)',
                  transition: 'width 0.4s ease'
                }} 
              />
            </div>
          </div>
        )}

        {/* Drawer Body */}
        <div className="drawer-body">
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', margin: 'auto' }}>
              <IconBag size={54} style={{ color: 'var(--gold-primary)', opacity: 0.4, marginBottom: '16px' }} />
              <h4 style={{ fontFamily: 'var(--font-serif)', color: '#fff', fontSize: '1.2rem', marginBottom: '8px' }}>
                Your Bag is Empty
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px' }}>
                Explore our signature Dubai fragrances and elevate your presence.
              </p>
              <button className="btn-outline-gold" onClick={onClose}>
                Browse Collections
              </button>
            </div>
          ) : isCheckingOut ? (
            /* UAE Checkout Form */
            <form id="checkout-form" onSubmit={handleSubmitOrder}>
              <div className="auth-notice-box" style={{ marginBottom: '16px' }}>
                <span>📦 Shipping exclusively to UAE Emirates with discreet luxury gift packaging.</span>
              </div>

              <div className="form-group">
                <label className="form-label">Full Recipient Name *</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. Fatima Al Mansoori"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">UAE Contact Number *</label>
                <input
                  type="tel"
                  required
                  className="form-input"
                  placeholder="+971 50 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Emirate *</label>
                <select
                  className="form-select"
                  value={formData.emirate}
                  onChange={(e) => setFormData({ ...formData, emirate: e.target.value })}
                >
                  {UAE_EMIRATES.map(em => (
                    <option key={em} value={em} style={{ background: '#110811', color: '#fff' }}>
                      {em}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Street / Villa / Apartment Details *</label>
                <textarea
                  required
                  rows={2}
                  className="form-input"
                  placeholder="e.g. Villa 14, Al Safa 2, Jumeirah, Dubai"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Payment Method</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['Cash on Delivery (UAE)', 'Credit / Debit Card (Visa/Mastercard)', 'Apple Pay'].map((method) => (
                    <label 
                      key={method}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px', 
                        padding: '10px 14px', 
                        background: formData.paymentMethod === method ? 'rgba(212,175,55,0.15)' : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${formData.paymentMethod === method ? 'var(--gold-light)' : 'rgba(212,175,55,0.15)'}`,
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        fontSize: '0.85rem'
                      }}
                    >
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        checked={formData.paymentMethod === method}
                        onChange={() => setFormData({ ...formData, paymentMethod: method })}
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>
            </form>
          ) : (
            /* Cart Items List */
            <>
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <div className="cart-item-size">{item.size}</div>
                    <div className="cart-item-price">
                      AED {item.price * item.quantity}
                    </div>

                    <div className="cart-qty-ctrls" style={{ marginTop: '8px' }}>
                      <button 
                        className="qty-btn"
                        onClick={() => onUpdateQuantity(item.id, item.size, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="qty-number">{item.quantity}</span>
                      <button 
                        className="qty-btn"
                        onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button 
                    onClick={() => onRemoveItem(item.id, item.size)}
                    style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '6px' }}
                    title="Remove item"
                  >
                    <IconTrash size={16} />
                  </button>
                </div>
              ))}

              {/* Promo Code Box */}
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(212,175,55,0.15)', marginTop: '8px' }}>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-primary)', display: 'block', marginBottom: '6px' }}>
                  Have a VIP Promo Code?
                </span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter MISTY10"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    style={{ padding: '8px 12px', fontSize: '0.85rem' }}
                  />
                  <button 
                    className="btn-outline-gold" 
                    style={{ padding: '8px 16px', fontSize: '0.76rem' }}
                    onClick={handleApplyPromo}
                  >
                    Apply
                  </button>
                </div>
                {promoError && <div style={{ color: '#c43254', fontSize: '0.75rem', marginTop: '6px' }}>{promoError}</div>}
                {promoSuccess && <div style={{ color: '#4ade80', fontSize: '0.75rem', marginTop: '6px' }}>{promoSuccess}</div>}
              </div>
            </>
          )}
        </div>

        {/* Footer Summary & Order Button */}
        {cartItems.length > 0 && (
          <div className="drawer-footer">
            <div className="cart-summary-line">
              <span>Subtotal</span>
              <span>AED {subtotal}</span>
            </div>

            {discountAmount > 0 && (
              <div className="cart-summary-line" style={{ color: '#4ade80' }}>
                <span>VIP Promo Discount ({discountPercent}%)</span>
                <span>- AED {discountAmount}</span>
              </div>
            )}

            <div className="cart-summary-line">
              <span>UAE Delivery</span>
              <span>{shippingFee === 0 ? 'Complimentary' : `AED ${shippingFee}`}</span>
            </div>

            <div className="cart-summary-line total">
              <span>Total Amount</span>
              <span>AED {total}</span>
            </div>

            {isCheckingOut ? (
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  type="button" 
                  className="btn-outline-gold"
                  style={{ flex: 1 }}
                  onClick={() => setIsCheckingOut(false)}
                >
                  Back to Bag
                </button>
                <button 
                  type="submit" 
                  form="checkout-form"
                  className="btn-gold"
                  style={{ flex: 2 }}
                >
                  <IconCheck size={18} />
                  <span>Place Order • AED {total}</span>
                </button>
              </div>
            ) : (
              <button 
                className="btn-gold" 
                style={{ width: '100%' }}
                onClick={handleStartCheckout}
              >
                <span>Proceed to Checkout</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
