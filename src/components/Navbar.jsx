import React from 'react';
import { 
  IconLogo, 
  IconBag, 
  IconUser, 
  IconHeart, 
  IconDashboard, 
  IconLogout, 
  IconHome, 
  IconSparkles, 
  IconLayers 
} from './Icons';

export const Navbar = ({
  cartCount,
  wishlistCount,
  currentUser,
  onOpenCart,
  onOpenWishlist,
  onOpenAuth,
  onOpenProfile,
  onOpenAdmin,
  onLogout,
  onNavigateHome
}) => {
  // Format user display name cleanly
  const getUserDisplayName = () => {
    if (!currentUser) return 'Sign In';
    if (currentUser.role === 'admin') return 'Director';
    if (currentUser.name) {
      const first = currentUser.name.split(' ')[0];
      return first.length > 9 ? first.slice(0, 8) + '...' : first;
    }
    return 'Patron';
  };

  const handleAccountClick = () => {
    if (!currentUser) {
      onOpenAuth('login');
    } else if (currentUser.role === 'admin') {
      onOpenAdmin();
    } else {
      onOpenProfile();
    }
  };

  return (
    <>
      {/* Top UAE Luxury Announcement Bar */}
      <div className="announcement-bar">
        <span>🇦🇪 <strong>Complimentary Luxury UAE Express Delivery</strong> on all orders above 150 AED | Use code: <strong>MISTY10</strong></span>
      </div>

      <header className="navbar">
        <div className="container navbar-inner">
          {/* Brand Monogram & Title - Strictly Single Line Height */}
          <div className="brand-logo-wrap" onClick={onNavigateHome} title="Misty Memories Dubai">
            <IconLogo size={36} />
            <div className="brand-text-block">
              <span className="brand-title">Misty Memories</span>
              <span className="brand-subtitle">Parfumes &amp; Blanches • Dubai</span>
            </div>
          </div>

          {/* Desktop Nav Links (Hidden on Mobile) */}
          <nav className="nav-desktop">
            <ul className="nav-links">
              <li>
                <a href="#hero" className="nav-link" onClick={onNavigateHome}>
                  Collections
                </a>
              </li>
              <li>
                <a href="#catalog" className="nav-link">
                  Fragrances
                </a>
              </li>
              <li>
                <a href="#pyramid" className="nav-link">
                  Notes
                </a>
              </li>
              <li>
                <a href="#heritage" className="nav-link">
                  Story
                </a>
              </li>
              <li>
                <a href="#boutiques" className="nav-link">
                  Boutiques
                </a>
              </li>
            </ul>
          </nav>

          {/* Desktop Nav Actions (Hidden on Mobile) */}
          <div className="nav-actions nav-actions-desktop">
            {/* Admin Portal Toggle Pill */}
            {currentUser && currentUser.role === 'admin' && (
              <button 
                className="admin-nav-pill"
                onClick={onOpenAdmin}
                title="Enter Misty Memories Admin Management"
              >
                <IconDashboard size={15} />
                <span>Admin Portal</span>
              </button>
            )}

            {/* Wishlist / Favorites Button */}
            <button 
              className="nav-icon-btn" 
              onClick={onOpenWishlist}
              title="My Fragrance Wishlist"
              aria-label="Wishlist"
            >
              <IconHeart size={18} fill={wishlistCount > 0 ? '#c43254' : 'none'} />
              {wishlistCount > 0 && <span className="badge-count">{wishlistCount}</span>}
            </button>

            {/* Shopping Cart Button */}
            <button 
              className="nav-icon-btn" 
              onClick={onOpenCart}
              title="Shopping Bag (AED)"
              aria-label="Cart"
            >
              <IconBag size={18} />
              {cartCount > 0 && <span className="badge-count">{cartCount}</span>}
            </button>

            {/* User Account / Profile */}
            {currentUser ? (
              <div className="user-action-group">
                <button 
                  className="btn-outline-gold user-pill-btn" 
                  onClick={currentUser.role === 'admin' ? onOpenAdmin : onOpenProfile}
                  title="My Luxury Account"
                >
                  <IconUser size={14} />
                  <span>{getUserDisplayName()}</span>
                </button>
                <button 
                  className="nav-icon-btn logout-btn"
                  onClick={onLogout}
                  title="Sign Out"
                  aria-label="Sign out"
                >
                  <IconLogout size={16} />
                </button>
              </div>
            ) : (
              <button 
                className="btn-gold user-signin-btn"
                onClick={() => onOpenAuth('login')}
              >
                <IconUser size={14} />
                <span>Sign In</span>
              </button>
            )}
          </div>

          {/* Mobile Top Actions: ONLY Favorites Button per Audio Instruction */}
          <div className="nav-actions-mobile">
            <button 
              className="nav-icon-btn mobile-fav-top-btn" 
              onClick={onOpenWishlist}
              title="My Fragrance Wishlist"
              aria-label="Favorites"
            >
              <IconHeart size={19} fill={wishlistCount > 0 ? '#c43254' : 'none'} />
              {wishlistCount > 0 && <span className="badge-count">{wishlistCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar (Visible Only on Mobile) */}
      <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
        <a 
          href="#hero" 
          className="bottom-nav-item" 
          onClick={onNavigateHome}
        >
          <IconHome size={20} />
          <span>Home</span>
        </a>

        <a 
          href="#catalog" 
          className="bottom-nav-item"
        >
          <IconSparkles size={20} />
          <span>Fragrances</span>
        </a>

        <a 
          href="#pyramid" 
          className="bottom-nav-item"
        >
          <IconLayers size={20} />
          <span>Notes</span>
        </a>

        <button 
          className="bottom-nav-item bottom-nav-btn" 
          onClick={onOpenCart}
          aria-label="Open Shopping Bag"
        >
          <div className="bottom-nav-icon-wrap">
            <IconBag size={20} />
            {cartCount > 0 && <span className="badge-count bottom-badge">{cartCount}</span>}
          </div>
          <span>Bag</span>
        </button>

        <button 
          className="bottom-nav-item bottom-nav-btn" 
          onClick={handleAccountClick}
          aria-label="Account or Admin"
        >
          {currentUser?.role === 'admin' ? (
            <>
              <IconDashboard size={20} style={{ color: 'var(--gold-light)' }} />
              <span style={{ color: 'var(--gold-light)' }}>Admin</span>
            </>
          ) : (
            <>
              <IconUser size={20} />
              <span>{currentUser ? 'Profile' : 'Sign In'}</span>
            </>
          )}
        </button>
      </nav>
    </>
  );
};
