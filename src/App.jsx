import React, { useState, useEffect } from 'react';
import { 
  INITIAL_PRODUCTS, 
  INITIAL_CATEGORIES, 
  INITIAL_ORDERS,
  DEFAULT_ADMIN_CREDENTIALS 
} from './data/initialData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NotesPyramid } from './components/NotesPyramid';
import { ProductCatalog } from './components/ProductCatalog';
import { QuickViewModal } from './components/QuickViewModal';
import { BrandStory } from './components/BrandStory';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { AuthModal } from './components/AuthModal';
import { UserProfileModal } from './components/UserProfileModal';
import { Footer } from './components/Footer';
import { AdminPortal } from './admin/AdminPortal';
import { IconCheck } from './components/Icons';

export function App() {
  // Persistence States
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('misty_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem('misty_categories');
    return saved ? JSON.parse(saved) : INITIAL_CATEGORIES;
  });

  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('misty_orders');
    return saved ? JSON.parse(saved) : INITIAL_ORDERS;
  });

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('misty_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('misty_wishlist');
    return saved ? JSON.parse(saved) : ['woody-rose'];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('misty_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const saved = localStorage.getItem('misty_registered_users');
    return saved ? JSON.parse(saved) : [
      {
        email: DEFAULT_ADMIN_CREDENTIALS.email,
        password: DEFAULT_ADMIN_CREDENTIALS.password,
        name: 'Store Director (UAE)',
        role: 'admin',
        phone: '+971 4 800 6478',
        emirate: 'Dubai',
        address: 'Downtown Atelier, Dubai'
      },
      {
        email: 'customer@gmail.com',
        password: 'password123',
        name: 'Hamdan Al Nuaimi',
        role: 'customer',
        phone: '+971 50 892 4110',
        emirate: 'Dubai',
        address: 'Villa 42, Jumeirah 2, Dubai'
      }
    ];
  });

  // App View: 'store' or 'admin'
  const [currentView, setCurrentView] = useState('store');

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authNotice, setAuthNotice] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState(null);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('misty_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('misty_categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('misty_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('misty_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('misty_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('misty_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('misty_registered_users', JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Cart Operations
  const handleAddToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.size === product.size
      );
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
    showToast(`Added ${product.name} (${product.size}) to your bag`);
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      handleRemoveCartItem(id, size);
      return;
    }
    setCart(prev => prev.map(item => 
      (item.id === id && item.size === size) ? { ...item, quantity } : item
    ));
  };

  const handleRemoveCartItem = (id, size) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.size === size)));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist toggle
  const handleToggleWishlist = (product) => {
    if (wishlist.includes(product.id)) {
      setWishlist(wishlist.filter(id => id !== product.id));
      showToast(`Removed from Wishlist`);
    } else {
      setWishlist([...wishlist, product.id]);
      showToast(`Added ${product.name} to your Wishlist`);
    }
  };

  // Auth Operations
  const handleLogin = (email, password) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password.trim();

    // Check Admin Credentials
    if (
      (cleanEmail === DEFAULT_ADMIN_CREDENTIALS.email || cleanEmail === 'admin@mistymemories.ae' || cleanEmail === 'admin@misty.ae') &&
      (cleanPass === DEFAULT_ADMIN_CREDENTIALS.password || cleanPass === 'admin')
    ) {
      const adminObj = {
        email: cleanEmail,
        name: 'Store Director (UAE)',
        role: 'admin',
        phone: '+971 4 800 6478',
        emirate: 'Dubai'
      };
      setCurrentUser(adminObj);
      setCurrentView('admin'); // Directly switch to Admin Interface per audio instruction
      showToast('Welcome, Director. Admin portal loaded.');
      return { success: true };
    }

    // Check registered customers
    const foundUser = registeredUsers.find(
      u => u.email.toLowerCase() === cleanEmail && u.password === cleanPass
    );

    if (foundUser) {
      setCurrentUser(foundUser);
      if (foundUser.role === 'admin') {
        setCurrentView('admin');
      }
      showToast(`Welcome back, ${foundUser.name}!`);
      return { success: true };
    }

    return { success: false, message: 'Invalid credentials. Please verify your email and password.' };
  };

  const handleRegister = (newUserData) => {
    const cleanEmail = newUserData.email.trim().toLowerCase();
    const exists = registeredUsers.some(u => u.email.toLowerCase() === cleanEmail);
    if (exists) {
      return { success: false, message: 'An account with this email already exists.' };
    }

    const newUser = {
      ...newUserData,
      role: 'customer'
    };

    setRegisteredUsers([...registeredUsers, newUser]);
    setCurrentUser(newUser);
    showToast(`Account created! Welcome to Misty Memories, ${newUser.name}.`);
    return { success: true };
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('store');
    showToast('Signed out successfully.');
  };

  // Order Placement
  const handlePlaceOrder = (newOrder) => {
    setOrders([newOrder, ...orders]);
    setCart([]);
    setIsCartOpen(false);
    showToast(`Order ${newOrder.id} placed! Complimentary UAE delivery initiated.`);
    // Open profile modal to show order status
    setIsProfileOpen(true);
  };

  // Find Featured Hero Product (Woody Rose)
  const heroProduct = products.find(p => p.id === 'woody-rose') || products[0];

  // User orders
  const userOrders = currentUser 
    ? orders.filter(o => o.customerEmail?.toLowerCase() === currentUser.email?.toLowerCase())
    : [];

  return (
    <div className="misty-app">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div 
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            background: 'var(--bg-card)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--gold-primary)',
            color: '#fff',
            padding: '14px 22px',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg), 0 0 25px rgba(212,175,55,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <div style={{ color: 'var(--gold-light)' }}>
            <IconCheck size={20} />
          </div>
          <span style={{ fontSize: '0.88rem', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
            {toastMessage}
          </span>
        </div>
      )}

      {/* Conditionally Render: Admin Portal OR Luxury Storefront */}
      {currentView === 'admin' && currentUser && currentUser.role === 'admin' ? (
        <AdminPortal
          products={products}
          onUpdateProducts={setProducts}
          categories={categories}
          onUpdateCategories={setCategories}
          orders={orders}
          onUpdateOrders={setOrders}
          onBackToStore={() => setCurrentView('store')}
          onLogout={handleLogout}
        />
      ) : (
        <>
          {/* Public Luxury Storefront */}
          <Navbar
            cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
            wishlistCount={wishlist.length}
            currentUser={currentUser}
            onOpenCart={() => setIsCartOpen(true)}
            onOpenWishlist={() => setIsWishlistOpen(true)}
            onOpenAuth={(mode = 'login') => {
              setAuthNotice('');
              setIsAuthOpen(true);
            }}
            onOpenProfile={() => setIsProfileOpen(true)}
            onOpenAdmin={() => setCurrentView('admin')}
            onLogout={handleLogout}
            currentView={currentView}
            onNavigateHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />

          <main>
            {/* Hero Section featuring Woody Rose */}
            <Hero
              heroProduct={heroProduct}
              onAddToCart={handleAddToCart}
              onQuickView={(p) => setQuickViewProduct(p)}
            />

            {/* Interactive Olfactory Notes Pyramid */}
            <NotesPyramid />

            {/* Catalog of Fragrances */}
            <ProductCatalog
              products={products}
              categories={categories}
              onAddToCart={handleAddToCart}
              onQuickView={(p) => setQuickViewProduct(p)}
              wishlistIds={wishlist}
              onToggleWishlist={handleToggleWishlist}
            />

            {/* Brand Heritage & UAE Craftsmanship */}
            <BrandStory />
          </main>

          <Footer />

          {/* Quick View Modal */}
          <QuickViewModal
            product={quickViewProduct}
            isOpen={!!quickViewProduct}
            onClose={() => setQuickViewProduct(null)}
            onAddToCart={handleAddToCart}
          />

          {/* Cart & UAE Checkout Drawer */}
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cart}
            onUpdateQuantity={handleUpdateCartQuantity}
            onRemoveItem={handleRemoveCartItem}
            onClearCart={handleClearCart}
            currentUser={currentUser}
            onRequireAuth={(msg) => {
              setAuthNotice(msg);
              setIsCartOpen(false);
              setIsAuthOpen(true);
            }}
            onPlaceOrder={handlePlaceOrder}
          />

          {/* Fragrance Wishlist Drawer */}
          <WishlistDrawer
            isOpen={isWishlistOpen}
            onClose={() => setIsWishlistOpen(false)}
            wishlistIds={wishlist}
            products={products}
            onRemoveFromWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
            onOpenCart={() => {
              setIsWishlistOpen(false);
              setIsCartOpen(true);
            }}
          />

          {/* Login & Sign Up Modal */}
          <AuthModal
            isOpen={isAuthOpen}
            onClose={() => setIsAuthOpen(false)}
            customNotice={authNotice}
            onLoginSuccess={handleLogin}
            onRegisterSuccess={handleRegister}
          />

          {/* User Profile & Address Manager Modal */}
          <UserProfileModal
            isOpen={isProfileOpen}
            onClose={() => setIsProfileOpen(false)}
            currentUser={currentUser}
            userOrders={userOrders}
            onUpdateUser={(updated) => {
              setCurrentUser(updated);
              setRegisteredUsers(prev => prev.map(u => u.email === updated.email ? updated : u));
              showToast('Profile information saved.');
            }}
            onLogout={handleLogout}
          />
        </>
      )}
    </div>
  );
}

export default App;
