import React, { useState } from 'react';
import { 
  IconDashboard, 
  IconBox, 
  IconLayers, 
  IconBag, 
  IconSettings, 
  IconEye, 
  IconLogout, 
  IconPlus, 
  IconTrash, 
  IconEdit, 
  IconCheck, 
  IconLogo,
  IconTruck
} from '../components/Icons';
import { UAE_EMIRATES } from '../data/initialData';

export const AdminPortal = ({
  products,
  onUpdateProducts,
  categories,
  onUpdateCategories,
  orders,
  onUpdateOrders,
  onBackToStore,
  onLogout
}) => {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'products', 'categories', 'orders', 'settings'

  // Product Add / Edit Modal State
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    id: '',
    name: '',
    arabicName: '',
    category: 'Woody Florals',
    price: 39,
    originalPrice: 59,
    currency: 'AED',
    discount: '34% OFF',
    size: '50 ML',
    stock: 25,
    rating: 4.9,
    badge: 'Signature Blend',
    image: '/images/woody-rose.png',
    description: '',
    topNotes: '',
    heartNotes: '',
    baseNotes: ''
  });

  // Calculate Metrics for Dashboard
  const totalRevenue = orders.reduce((sum, ord) => sum + (ord.totalAED || 0), 0);
  const totalOrdersCount = orders.length;
  const pendingOrders = orders.filter(o => o.status !== 'Delivered').length;
  const totalStockCount = products.reduce((sum, p) => sum + (Number(p.stock) || 0), 0);

  // Group orders by Emirate
  const emirateOrdersMap = orders.reduce((acc, order) => {
    const em = order.emirate || 'Dubai';
    acc[em] = (acc[em] || 0) + 1;
    return acc;
  }, {});

  // Handle open Add/Edit Product
  const handleOpenAddProduct = () => {
    setEditingProduct(null);
    setProductForm({
      id: `perfume-${Date.now()}`,
      name: '',
      arabicName: '',
      category: categories[1] || 'Woody Florals',
      price: 49,
      originalPrice: 79,
      currency: 'AED',
      discount: '38% OFF',
      size: '50 ML',
      stock: 30,
      rating: 4.9,
      badge: 'New Release',
      image: '/images/royal-amber-oud.jpg',
      description: 'An exceptional artisanal Dubai creation featuring precious oriental and French notes.',
      topNotes: 'Calabrian Bergamot, Cardamom',
      heartNotes: 'Taif Rose, Jasmine',
      baseNotes: 'Cambodian Oud, Amber'
    });
    setIsProductModalOpen(true);
  };

  const handleOpenEditProduct = (prod) => {
    setEditingProduct(prod);
    setProductForm({
      ...prod,
      topNotes: prod.notes?.top ? prod.notes.top.join(', ') : '',
      heartNotes: prod.notes?.heart ? prod.notes.heart.join(', ') : '',
      baseNotes: prod.notes?.base ? prod.notes.base.join(', ') : ''
    });
    setIsProductModalOpen(true);
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    const formattedProduct = {
      ...productForm,
      price: Number(productForm.price),
      originalPrice: Number(productForm.originalPrice),
      stock: Number(productForm.stock),
      sizesAvailable: [productForm.size, '100 ML'],
      notes: {
        top: productForm.topNotes.split(',').map(s => s.trim()).filter(Boolean),
        heart: productForm.heartNotes.split(',').map(s => s.trim()).filter(Boolean),
        base: productForm.baseNotes.split(',').map(s => s.trim()).filter(Boolean)
      }
    };

    if (editingProduct) {
      onUpdateProducts(products.map(p => p.id === editingProduct.id ? formattedProduct : p));
    } else {
      onUpdateProducts([formattedProduct, ...products]);
    }
    setIsProductModalOpen(false);
  };

  const handleDeleteProduct = (id) => {
    if (confirm('Are you sure you want to remove this perfume from the catalog?')) {
      onUpdateProducts(products.filter(p => p.id !== id));
    }
  };

  // Order status update
  const handleUpdateOrderStatus = (orderId, newStatus) => {
    onUpdateOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  return (
    <div className="admin-layout">
      {/* Sidebar Navigation */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <IconLogo size={36} />
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 800, color: '#fff' }}>
              Misty Memories
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--gold-primary)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Atelier Control Room
            </div>
          </div>
        </div>

        <nav className="admin-nav-menu">
          <button 
            className={`admin-menu-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <IconDashboard size={18} />
            <span>Dashboard Overview</span>
          </button>

          <button 
            className={`admin-menu-item ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            <IconBox size={18} />
            <span>Perfumes Inventory ({products.length})</span>
          </button>

          <button 
            className={`admin-menu-item ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <IconBag size={18} />
            <span>UAE Orders ({orders.length})</span>
          </button>

          <button 
            className={`admin-menu-item ${activeTab === 'categories' ? 'active' : ''}`}
            onClick={() => setActiveTab('categories')}
          >
            <IconLayers size={18} />
            <span>Fragrance Categories</span>
          </button>

          <button 
            className={`admin-menu-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <IconSettings size={18} />
            <span>Store Configuration</span>
          </button>
        </nav>

        <div className="admin-sidebar-footer">
          {/* Back to Live Store Button per voice instructions */}
          <button 
            className="btn-gold" 
            style={{ width: '100%', padding: '10px', fontSize: '0.78rem' }}
            onClick={onBackToStore}
          >
            <IconEye size={16} />
            <span>Switch to Store View</span>
          </button>

          <button 
            className="btn-outline-gold" 
            style={{ width: '100%', padding: '9px', fontSize: '0.76rem', borderColor: 'rgba(196,50,84,0.4)', color: '#ffb3c1' }}
            onClick={onLogout}
          >
            <IconLogout size={15} />
            <span>Sign Out Admin</span>
          </button>
        </div>
      </aside>

      {/* Main Stage */}
      <main className="admin-main-stage">
        {/* Topbar */}
        <header className="admin-topbar">
          <div>
            <span style={{ fontSize: '0.76rem', color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'var(--font-serif)' }}>
              Misty Memories Atelier Management
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#fff' }}>
              {activeTab === 'dashboard' && 'Executive Commerce Analytics'}
              {activeTab === 'products' && 'Fragrance Inventory & Pricing'}
              {activeTab === 'orders' && 'Client Orders & UAE Fulfillment'}
              {activeTab === 'categories' && 'Olfactory Families & Lines'}
              {activeTab === 'settings' && 'UAE Logistics & Delivery Settings'}
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button 
              className="btn-outline-gold"
              style={{ padding: '8px 18px', fontSize: '0.78rem' }}
              onClick={onBackToStore}
            >
              <IconEye size={16} />
              <span>Preview Storefront</span>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(212,175,55,0.1)', padding: '6px 14px', borderRadius: 'var(--radius-full)', border: '1px solid var(--gold-border)' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }} />
              <span style={{ fontSize: '0.78rem', color: 'var(--gold-light)' }}>Admin: Store Director</span>
            </div>
          </div>
        </header>

        {/* Tab Content */}
        <div className="admin-content-area">
          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div>
              {/* Metrics Row */}
              <div className="admin-metrics-grid">
                <div className="metric-card">
                  <div className="metric-label">Total Revenue</div>
                  <div className="metric-val" style={{ color: 'var(--gold-light)' }}>
                    AED {totalRevenue.toLocaleString()}
                  </div>
                  <div className="metric-sub">Across all UAE orders</div>
                </div>

                <div className="metric-card">
                  <div className="metric-label">Total Orders</div>
                  <div className="metric-val">{totalOrdersCount}</div>
                  <div className="metric-sub">{pendingOrders} awaiting delivery</div>
                </div>

                <div className="metric-card">
                  <div className="metric-label">Active Perfume Flacons</div>
                  <div className="metric-val">{products.length}</div>
                  <div className="metric-sub">{totalStockCount} bottles in stock</div>
                </div>

                <div className="metric-card">
                  <div className="metric-label">Featured Flacon</div>
                  <div className="metric-val" style={{ fontSize: '1.4rem', color: 'var(--gold-light)' }}>
                    Woody Rose
                  </div>
                  <div className="metric-sub">AED 39 (34% Launch Offer)</div>
                </div>
              </div>

              {/* UAE Orders Distribution & Recent Table */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px', marginBottom: '36px' }}>
                {/* Emirate breakdown */}
                <div className="glass-panel" style={{ padding: '24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: '#fff', marginBottom: '16px' }}>
                    Orders by UAE Emirate
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {UAE_EMIRATES.map(em => {
                      const count = emirateOrdersMap[em] || 0;
                      const percentage = totalOrdersCount > 0 ? Math.round((count / totalOrdersCount) * 100) : 0;
                      return (
                        <div key={em}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '4px' }}>
                            <span style={{ color: '#fff' }}>{em}</span>
                            <span style={{ color: 'var(--gold-light)', fontWeight: 600 }}>{count} orders ({percentage}%)</span>
                          </div>
                          <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ width: `${Math.max(percentage, count > 0 ? 15 : 0)}%`, height: '100%', background: 'var(--gold-gradient)' }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Recent Orders Overview */}
                <div className="admin-table-wrap">
                  <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--gold-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: '#fff' }}>
                      Recent Luxury UAE Orders
                    </h3>
                    <button 
                      className="btn-outline-gold" 
                      style={{ padding: '6px 14px', fontSize: '0.74rem' }}
                      onClick={() => setActiveTab('orders')}
                    >
                      View All
                    </button>
                  </div>
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Client</th>
                        <th>Emirate</th>
                        <th>Total (AED)</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.slice(0, 5).map(o => (
                        <tr key={o.id}>
                          <td style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--gold-light)' }}>
                            {o.id}
                          </td>
                          <td>{o.customerName}</td>
                          <td>{o.emirate}</td>
                          <td style={{ fontWeight: 700, color: '#fff' }}>AED {o.totalAED}</td>
                          <td>
                            <span className="badge-gold" style={{ fontSize: '0.7rem' }}>
                              {o.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRODUCTS MANAGER */}
          {activeTab === 'products' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Manage flacon listings, original vs discounted prices (e.g. AED 59 → AED 39), olfactory notes, and stock levels.
                </p>
                <button className="btn-gold" onClick={handleOpenAddProduct}>
                  <IconPlus size={16} />
                  <span>Add New Perfume</span>
                </button>
              </div>

              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Flacon</th>
                      <th>Category</th>
                      <th>Regular Price</th>
                      <th>Sale Price</th>
                      <th>Stock</th>
                      <th>Badge</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(p => (
                      <tr key={p.id}>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <img src={p.image} alt={p.name} style={{ width: '48px', height: '48px', borderRadius: '8px', objectFit: 'cover', border: '1px solid var(--gold-border)' }} />
                            <div>
                              <div style={{ fontWeight: 700, color: '#fff' }}>{p.name}</div>
                              <div style={{ fontSize: '0.76rem', color: 'var(--gold-primary)', fontFamily: 'var(--font-arabic)' }}>{p.arabicName}</div>
                            </div>
                          </div>
                        </td>
                        <td>{p.category}</td>
                        <td style={{ textDecoration: 'line-through', color: '#c43254' }}>
                          AED {p.originalPrice}
                        </td>
                        <td style={{ fontWeight: 800, color: 'var(--gold-light)' }}>
                          AED {p.price}
                        </td>
                        <td>
                          <span style={{ color: p.stock < 10 ? '#ef4444' : '#fff' }}>
                            {p.stock} units
                          </span>
                        </td>
                        <td>
                          <span className="badge-gold" style={{ fontSize: '0.68rem' }}>
                            {p.badge || 'Standard'}
                          </span>
                        </td>
                        <td>
                          <div style={{ display: 'flex', gap: '8px' }}>
                            <button 
                              className="card-action-btn"
                              onClick={() => handleOpenEditProduct(p)}
                              title="Edit perfume"
                            >
                              <IconEdit size={16} />
                            </button>
                            <button 
                              className="card-action-btn"
                              onClick={() => handleDeleteProduct(p.id)}
                              title="Delete perfume"
                              style={{ color: '#c43254' }}
                            >
                              <IconTrash size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: ORDERS MANAGER */}
          {activeTab === 'orders' && (
            <div>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Live UAE customer orders. Update shipping status from Processing to Out for Delivery across Dubai and Emirates.
                </p>
              </div>

              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Order ID &amp; Date</th>
                      <th>Client Details</th>
                      <th>Delivery Address</th>
                      <th>Items Ordered</th>
                      <th>Total Amount</th>
                      <th>Fulfillment Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(order => (
                      <tr key={order.id}>
                        <td>
                          <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--gold-light)' }}>
                            {order.id}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{order.date}</div>
                        </td>
                        <td>
                          <div style={{ fontWeight: 600, color: '#fff' }}>{order.customerName}</div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{order.customerPhone}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{order.customerEmail}</div>
                        </td>
                        <td>
                          <div style={{ color: 'var(--gold-light)', fontWeight: 600, fontSize: '0.84rem' }}>{order.emirate}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', maxWidth: '220px' }}>{order.address}</div>
                        </td>
                        <td>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {order.items.map((it, idx) => (
                              <span key={idx} style={{ fontSize: '0.82rem', color: '#fff' }}>
                                {it.quantity}x {it.name} ({it.size})
                              </span>
                            ))}
                          </div>
                        </td>
                        <td style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 800, color: 'var(--gold-light)' }}>
                          AED {order.totalAED}
                        </td>
                        <td>
                          <select
                            className="form-select"
                            value={order.status}
                            onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                            style={{ padding: '6px 12px', fontSize: '0.8rem', width: 'auto' }}
                          >
                            <option value="Processing in Dubai Hub">Processing in Dubai Hub</option>
                            <option value="Out for Delivery">Out for Delivery</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: CATEGORIES */}
          {activeTab === 'categories' && (
            <div style={{ maxWidth: '640px' }}>
              <div className="glass-panel" style={{ padding: '28px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#fff', marginBottom: '16px' }}>
                  Olfactory Fragrance Lines
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  {categories.map((cat, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 18px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: 'var(--radius-md)' }}>
                      <span style={{ fontFamily: 'var(--font-serif)', color: '#fff', fontSize: '0.95rem' }}>{cat}</span>
                      <span className="badge-gold" style={{ fontSize: '0.7rem' }}>
                        {products.filter(p => p.category === cat).length} Flacons
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: STORE CONFIGURATION */}
          {activeTab === 'settings' && (
            <div style={{ maxWidth: '720px' }}>
              <div className="glass-panel" style={{ padding: '32px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: '#fff', marginBottom: '20px' }}>
                  United Arab Emirates Logistics Configuration
                </h3>

                <div className="form-group">
                  <label className="form-label">Complimentary Delivery Threshold (AED)</label>
                  <input type="number" className="form-input" defaultValue={150} />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Orders above this threshold receive free white-glove courier across UAE.</span>
                </div>

                <div className="form-group">
                  <label className="form-label">Standard UAE Shipping Fee (AED)</label>
                  <input type="number" className="form-input" defaultValue={25} />
                </div>

                <div className="form-group">
                  <label className="form-label">Store Announcement Banner</label>
                  <input type="text" className="form-input" defaultValue="🇦🇪 Complimentary Luxury UAE Express Delivery on all orders above 150 AED | Use code: MISTY10" />
                </div>

                <button className="btn-gold" onClick={() => alert('Settings saved successfully.')}>
                  <span>Save Atelier Settings</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Product Add / Edit Modal */}
      {isProductModalOpen && (
        <div className="modal-overlay" onClick={() => setIsProductModalOpen(false)}>
          <div className="auth-modal-content" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: '#fff' }}>
                {editingProduct ? 'Edit Perfume Listing' : 'Add New Luxury Flacon'}
              </h3>
              <button className="modal-close-btn" onClick={() => setIsProductModalOpen(false)}>✕</button>
            </div>

            <form onSubmit={handleSaveProduct}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Perfume Name (English) *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Arabic Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={productForm.arabicName}
                    onChange={(e) => setProductForm({ ...productForm, arabicName: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Regular Price (AED) *</label>
                  <input
                    type="number"
                    required
                    className="form-input"
                    value={productForm.originalPrice}
                    onChange={(e) => setProductForm({ ...productForm, originalPrice: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Offer / Sale Price (AED) *</label>
                  <input
                    type="number"
                    required
                    className="form-input"
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Stock Units *</label>
                  <input
                    type="number"
                    required
                    className="form-input"
                    value={productForm.stock}
                    onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select
                    className="form-select"
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                  >
                    {categories.filter(c => c !== 'All Fragrances').map(c => (
                      <option key={c} value={c} style={{ background: '#110811', color: '#fff' }}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Flacon Image</label>
                  <select
                    className="form-select"
                    value={productForm.image}
                    onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                  >
                    <option value="/images/woody-rose.png">Woody Rose (Official Image)</option>
                    <option value="/images/royal-amber-oud.jpg">Royal Amber Oud</option>
                    <option value="/images/noir-de-bakhoor.jpg">Noir De Bakhoor</option>
                    <option value="/images/imperial-musk-blanc.jpg">Imperial Musk Blanc</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  rows={2}
                  className="form-input"
                  value={productForm.description}
                  onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                <div className="form-group">
                  <label className="form-label">Top Notes (comma-separated)</label>
                  <input
                    type="text"
                    className="form-input"
                    value={productForm.topNotes}
                    onChange={(e) => setProductForm({ ...productForm, topNotes: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Heart Notes</label>
                  <input
                    type="text"
                    className="form-input"
                    value={productForm.heartNotes}
                    onChange={(e) => setProductForm({ ...productForm, heartNotes: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Base Notes</label>
                  <input
                    type="text"
                    className="form-input"
                    value={productForm.baseNotes}
                    onChange={(e) => setProductForm({ ...productForm, baseNotes: e.target.value })}
                  />
                </div>
              </div>

              <button type="submit" className="btn-gold" style={{ width: '100%', marginTop: '10px' }}>
                <span>{editingProduct ? 'Save Perfume Changes' : 'Create Perfume Listing'}</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
