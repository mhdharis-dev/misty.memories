import React, { useState } from 'react';
import { IconClose, IconUser, IconBag, IconCheck, IconTruck, IconLogout } from './Icons';
import { UAE_EMIRATES } from '../data/initialData';

export const UserProfileModal = ({
  isOpen,
  onClose,
  currentUser,
  userOrders,
  onUpdateUser,
  onLogout
}) => {
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' or 'orders'
  const [name, setName] = useState(currentUser?.name || '');
  const [phone, setPhone] = useState(currentUser?.phone || '+971 ');
  const [emirate, setEmirate] = useState(currentUser?.emirate || 'Dubai');
  const [address, setAddress] = useState(currentUser?.address || '');
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen || !currentUser) return null;

  const handleSaveProfile = (e) => {
    e.preventDefault();
    onUpdateUser({
      ...currentUser,
      name,
      phone,
      emirate,
      address
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="profile-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close profile">
          <IconClose size={18} />
        </button>

        {/* Profile Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px', borderBottom: '1px solid rgba(212,175,55,0.2)', paddingBottom: '20px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--gold-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0b060a', fontWeight: 800, fontSize: '1.4rem', fontFamily: 'var(--font-serif)' }}>
            {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'M'}
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#fff', marginBottom: '2px' }}>
              {currentUser.name || 'Valued Patron'}
            </h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--gold-light)' }}>
              {currentUser.email} • {currentUser.role === 'admin' ? 'Atelier Director' : 'VIP Member'}
            </span>
          </div>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          <button
            className={`btn-outline-gold ${activeTab === 'profile' ? 'active' : ''}`}
            style={{ padding: '8px 20px', fontSize: '0.8rem', background: activeTab === 'profile' ? 'var(--gold-gradient)' : 'transparent', color: activeTab === 'profile' ? '#0d070b' : 'var(--gold-light)' }}
            onClick={() => setActiveTab('profile')}
          >
            <IconUser size={15} />
            <span>Profile &amp; Address</span>
          </button>

          <button
            className={`btn-outline-gold ${activeTab === 'orders' ? 'active' : ''}`}
            style={{ padding: '8px 20px', fontSize: '0.8rem', background: activeTab === 'orders' ? 'var(--gold-gradient)' : 'transparent', color: activeTab === 'orders' ? '#0d070b' : 'var(--gold-light)' }}
            onClick={() => setActiveTab('orders')}
          >
            <IconBag size={15} />
            <span>My Orders ({userOrders.length})</span>
          </button>

          <button
            className="btn-outline-gold"
            style={{ marginLeft: 'auto', padding: '8px 16px', borderColor: 'rgba(196,50,84,0.4)', color: '#ffb3c1' }}
            onClick={() => { onLogout(); onClose(); }}
          >
            <IconLogout size={15} />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Tab Content: Profile Settings */}
        {activeTab === 'profile' && (
          <form onSubmit={handleSaveProfile}>
            {saveSuccess && (
              <div style={{ background: 'rgba(74, 222, 128, 0.15)', border: '1px solid #4ade80', color: '#86efac', padding: '10px 16px', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconCheck size={16} />
                <span>Profile and UAE delivery details updated successfully.</span>
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">UAE Contact Number</label>
                <input
                  type="tel"
                  required
                  className="form-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '18px' }}>
              <div className="form-group">
                <label className="form-label">Primary Emirate</label>
                <select
                  className="form-select"
                  value={emirate}
                  onChange={(e) => setEmirate(e.target.value)}
                >
                  {UAE_EMIRATES.map(em => (
                    <option key={em} value={em} style={{ background: '#110811', color: '#fff' }}>
                      {em}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Delivery Address / Villa Details</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. Villa 24, Street 10, Jumeirah, Dubai"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn-gold" style={{ marginTop: '10px' }}>
              <span>Save Changes</span>
            </button>
          </form>
        )}

        {/* Tab Content: Orders History */}
        {activeTab === 'orders' && (
          <div>
            {userOrders.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
                <IconTruck size={42} style={{ opacity: 0.3, marginBottom: '12px' }} />
                <p>You haven't placed any orders yet.</p>
              </div>
            ) : (
              <div>
                {userOrders.map((order) => (
                  <div key={order.id} className="profile-order-card">
                    <div className="order-header-row">
                      <div>
                        <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--gold-light)', marginRight: '10px' }}>
                          {order.id}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          Placed on {order.date}
                        </span>
                      </div>
                      <span className="badge-gold" style={{ fontSize: '0.72rem' }}>
                        {order.status}
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                      {order.items.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <img src={item.image} alt={item.name} style={{ width: '32px', height: '32px', borderRadius: '4px', objectFit: 'cover' }} />
                            <span>{item.quantity}x {item.name} ({item.size})</span>
                          </div>
                          <span style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
                            AED {item.price * item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: '0.82rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>
                        Delivery to: {order.emirate} ({order.address})
                      </span>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--gold-light)' }}>
                        Total: AED {order.totalAED}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
