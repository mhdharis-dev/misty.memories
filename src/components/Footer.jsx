import React from 'react';
import { IconLogo, IconSparkles } from './Icons';

export const Footer = () => {
  return (
    <footer id="boutiques" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <IconLogo size={36} />
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>
                  Misty Memories
                </div>
                <div style={{ fontSize: '0.74rem', letterSpacing: '0.14em', color: 'var(--gold-primary)', textTransform: 'uppercase' }}>
                  Parfumes &amp; Blanches • UAE
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.7', maxWidth: '340px', marginBottom: '20px' }}>
              Handcrafted in the United Arab Emirates. Infusing ancient Emirati agarwood heritage with modern haute Parisian perfumery.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a 
                href="https://instagram.com/mistymemoriesuae" 
                target="_blank" 
                rel="noreferrer"
                className="badge-gold"
                style={{ textDecoration: 'none' }}
              >
                <IconSparkles size={12} /> @mistymemoriesuae
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Fragrance Houses</h4>
            <ul>
              <li><a href="#catalog">Woody Florals</a></li>
              <li><a href="#catalog">Oriental Oud</a></li>
              <li><a href="#catalog">Bakhoor &amp; Mabkhara</a></li>
              <li><a href="#catalog">Pure Imperial Musks</a></li>
              <li><a href="#catalog">Ramadan Special Editions</a></li>
            </ul>
          </div>

          {/* UAE Boutiques */}
          <div className="footer-col">
            <h4>Flagship Boutiques</h4>
            <ul>
              <li><span style={{ color: '#fff', fontSize: '0.9rem' }}>Dubai Mall</span> <br /><span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Fashion Avenue, Level 2</span></li>
              <li style={{ marginTop: '8px' }}><span style={{ color: '#fff', fontSize: '0.9rem' }}>Mall of the Emirates</span> <br /><span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Luxury Wing, Dubai</span></li>
              <li style={{ marginTop: '8px' }}><span style={{ color: '#fff', fontSize: '0.9rem' }}>The Galleria</span> <br /><span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Al Maryah Island, Abu Dhabi</span></li>
            </ul>
          </div>

          {/* Client Concierge */}
          <div className="footer-col">
            <h4>UAE Concierge</h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '14px', lineHeight: '1.6' }}>
              Inquire regarding bespoke royal gifting or private masterclasses:
            </p>
            <div style={{ color: 'var(--gold-light)', fontSize: '0.9rem', marginBottom: '8px' }}>
              📞 +971 4 800 MISTY (64789)
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', marginBottom: '18px' }}>
              ✉️ concierge@mistymemories.ae
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Complimentary next-day white-glove courier across all 7 Emirates.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Misty Memories Parfumes &amp; Blanches LLC. Dubai, UAE. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Apple Pay</span>
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Cash on Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
