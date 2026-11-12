import React from 'react';
import { IconSparkles, IconShield } from './Icons';

export const BrandStory = () => {
  return (
    <section id="heritage" className="story-section">
      <div className="container story-grid">
        {/* Story Text */}
        <div className="story-content">
          <span className="section-pretitle">Bespoke Emirati Parfumerie</span>
          <h2>
            Crafted In Dubai, <br />
            <span className="gold-gradient-text">Cherished Worldwide</span>
          </h2>
          <p>
            Born under the golden sun of the United Arab Emirates, <strong>Misty Memories</strong> represents the sublime alchemy of ancient Gulf fragrance traditions and contemporary French haute perfumery.
          </p>
          <p>
            We hand-select aged Cambodian agarwood, wild Damask roses from high mountain plateaus, and molten ambergris. Each batch rests in charred oak casks for seven moons, creating a deep, resonant sillage that honors Emirati hospitality and distinction.
          </p>

          <div className="heritage-features-list">
            <div className="heritage-feature-item">
              <h4>Pure Aged Dehn El Oud</h4>
              <p>Matured natural agarwood distilled with traditional artisanal copper alembics.</p>
            </div>
            <div className="heritage-feature-item">
              <h4>18+ Hour Sillage</h4>
              <p>Formulated at high Extrait concentration to thrive in the Gulf climate.</p>
            </div>
            <div className="heritage-feature-item">
              <h4>Cruelty-Free &amp; Sustainable</h4>
              <p>Ethically harvested botanicals and sustainably sourced wild woods.</p>
            </div>
            <div className="heritage-feature-item">
              <h4>Bespoke Gold Packaging</h4>
              <p>Heavy custom flacons crowned with hand-finished fluted gold caps.</p>
            </div>
          </div>
        </div>

        {/* Story Visual */}
        <div className="story-visual-wrap">
          <img 
            src="/images/royal-amber-oud.jpg" 
            alt="Misty Memories Royal Oud & Amber Heritage" 
          />
          <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', background: 'rgba(12, 6, 11, 0.85)', backdropFilter: 'blur(12px)', border: '1px solid var(--gold-border)', borderRadius: 'var(--radius-md)', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold-primary)', display: 'block' }}>
                Dubai Flagship Atelier
              </span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: '#fff', fontWeight: 600 }}>
                Downtown Dubai • UAE
              </span>
            </div>
            <span className="badge-gold">
              <IconSparkles size={12} /> Since 2018
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
