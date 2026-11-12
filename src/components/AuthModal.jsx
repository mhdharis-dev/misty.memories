import React, { useState } from 'react';
import { IconClose, IconLogo, IconUser, IconCheck } from './Icons';
import { UAE_EMIRATES } from '../data/initialData';

export const AuthModal = ({
  isOpen,
  onClose,
  initialMode = 'login',
  customNotice = '',
  onLoginSuccess,
  onRegisterSuccess
}) => {
  const [mode, setMode] = useState(initialMode); // 'login' or 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Register Fields
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+971 ');
  const [emirate, setEmirate] = useState('Dubai');
  const [address, setAddress] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    if (mode === 'login') {
      const res = onLoginSuccess(email, password);
      if (!res.success) {
        setErrorMsg(res.message || 'Invalid email or password.');
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
        onClose();
      }
    } else {
      // Validation
      if (!fullName.trim() || !email.trim() || !password.trim()) {
        setErrorMsg('Please complete all required fields.');
        setIsSubmitting(false);
        return;
      }

      const res = onRegisterSuccess({
        name: fullName,
        email,
        phone,
        emirate,
        address,
        password
      });

      if (!res.success) {
        setErrorMsg(res.message || 'Could not create account.');
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
        onClose();
      }
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="auth-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <IconClose size={18} />
        </button>

        <div className="auth-header">
          <IconLogo size={48} />
          <h3 className="auth-title">
            {mode === 'login' ? 'Welcome to Misty Memories' : 'Join Misty Memories'}
          </h3>
          <p className="auth-sub">
            {mode === 'login' 
              ? 'Sign in to access your luxury profile, orders & fragrances.' 
              : 'Create your bespoke fragrance account for luxury UAE delivery.'}
          </p>
        </div>

        {customNotice && (
          <div className="auth-notice-box">
            <span>✨ {customNotice}</span>
          </div>
        )}

        {/* Tab switch */}
        <div className="auth-tabs">
          <button
            type="button"
            className={`auth-tab-btn ${mode === 'login' ? 'active' : ''}`}
            onClick={() => { setMode('login'); setErrorMsg(''); }}
          >
            Sign In
          </button>
          <button
            type="button"
            className={`auth-tab-btn ${mode === 'register' ? 'active' : ''}`}
            onClick={() => { setMode('register'); setErrorMsg(''); }}
          >
            Create Account
          </button>
        </div>

        {errorMsg && (
          <div style={{ background: 'rgba(196, 50, 84, 0.15)', border: '1px solid #c43254', color: '#ffb3c1', padding: '10px 14px', borderRadius: 'var(--radius-md)', fontSize: '0.82rem', marginBottom: '16px', textAlign: 'center' }}>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {mode === 'register' && (
            <>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. Tariq Al Hashimi"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">UAE Contact Number *</label>
                <input
                  type="tel"
                  required
                  className="form-input"
                  placeholder="+971 50 000 0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Default Emirate</label>
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
                  className="form-input"
                  placeholder="e.g. Villa 24, Street 10, Jumeirah"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label className="form-label">Email Address *</label>
            <input
              type="email"
              required
              className="form-input"
              placeholder="name@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password *</label>
            <input
              type="password"
              required
              className="form-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn-gold"
            style={{ width: '100%', marginTop: '10px' }}
            disabled={isSubmitting}
          >
            <span>{mode === 'login' ? 'Sign In' : 'Complete Registration'}</span>
          </button>
        </form>

        <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          {mode === 'login' ? (
            <span>
              Don't have an account yet?{' '}
              <button 
                type="button"
                onClick={() => { setMode('register'); setErrorMsg(''); }}
                style={{ background: 'none', border: 'none', color: 'var(--gold-light)', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                Create one now
              </button>
            </span>
          ) : (
            <span>
              Already registered?{' '}
              <button 
                type="button"
                onClick={() => { setMode('login'); setErrorMsg(''); }}
                style={{ background: 'none', border: 'none', color: 'var(--gold-light)', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                Sign in here
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
