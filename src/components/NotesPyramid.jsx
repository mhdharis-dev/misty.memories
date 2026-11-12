import React from 'react';
import { IconSparkles } from './Icons';

export const NotesPyramid = () => {
  return (
    <section id="pyramid" className="pyramid-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle">The Alchemy of Scent</span>
          <h2 className="section-title">
            The Olfactory <span className="gold-gradient-text">Pyramid</span>
          </h2>
          <p className="section-subtitle">
            Every Misty Memories flacon is orchestrated like a symphony. From the first radiant spritz to the lingering 18-hour dry-down on Emirati silk.
          </p>
        </div>

        <div className="pyramid-grid">
          {/* Top Notes */}
          <div className="pyramid-card">
            <span className="pyramid-tier-badge">Tier I • 0 - 30 Mins</span>
            <h3>Top / Opening Notes</h3>
            <p className="pyramid-evaporation">
              The luminous first impression that enchants the senses upon release.
            </p>
            <div className="notes-pill-list">
              <span className="note-pill">✨ Calabrian Bergamot</span>
              <span className="note-pill">🌶️ Pink Pepper Pods</span>
              <span className="note-pill">🍇 Wild Raspberry</span>
              <span className="note-pill">🌾 Saffron Threads</span>
              <span className="note-pill">🍊 Sunlit Mandarin</span>
            </div>
          </div>

          {/* Heart Notes */}
          <div className="pyramid-card">
            <span className="pyramid-tier-badge">Tier II • 30 Mins - 4 Hours</span>
            <h3>Heart / Middle Notes</h3>
            <p className="pyramid-evaporation">
              The soulful signature core of the composition that defines its character.
            </p>
            <div className="notes-pill-list">
              <span className="note-pill">🌹 Velvet Taif Rose</span>
              <span className="note-pill">🌺 Damask Rose Absolute</span>
              <span className="note-pill">🕯️ Frankincense Smoke</span>
              <span className="note-pill">🪵 Bakhoor Mabkhara</span>
              <span className="note-pill">🌸 Florentine Iris</span>
            </div>
          </div>

          {/* Base Notes */}
          <div className="pyramid-card">
            <span className="pyramid-tier-badge">Tier III • 4 - 24 Hours</span>
            <h3>Base / Dry-Down Notes</h3>
            <p className="pyramid-evaporation">
              The deep, opulent foundation that bonds intimately with your skin and fabrics.
            </p>
            <div className="notes-pill-list">
              <span className="note-pill">🪵 Cambodian Agarwood</span>
              <span className="note-pill">✨ Smoked Golden Amber</span>
              <span className="note-pill">🌲 Atlas Mountain Cedar</span>
              <span className="note-pill">🍦 Bourbon Vanilla</span>
              <span className="note-pill">🤍 Imperial White Musk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
