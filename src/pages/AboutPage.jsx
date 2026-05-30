import { Link } from 'react-router-dom';
import { useState } from 'react';
import { POS_TEAM } from '../data/about-data.js';
import PhotoSlot from '../components/PhotoSlot.jsx';
import Reveal from '../components/Reveal.jsx';

// Rectangular photo for the president — fills a 3:4 container via CSS
function PresidentPhoto({ src, name }) {
  const [broken, setBroken] = useState(false);
  const initials = name
    ? name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()
    : '??';
  return (
    <div className="president-profile__photo-wrap">
      {!broken && src ? (
        <img src={src} alt={name} onError={() => setBroken(true)} />
      ) : (
        <div className="president-profile__photo-fallback" aria-hidden="true">
          {initials}
        </div>
      )}
    </div>
  );
}

export default function AboutPage() {
  const { president, vicePresidents, team } = POS_TEAM;

  return (
    <div className="page">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="container">
          <div className="hero__eyebrow"><span className="eyebrow">The People Behind the Promises</span></div>
          <h1 className="hero__cry">
            Real names.<br />
            <span className="accent">Real promises.</span>
          </h1>
          <p className="hero__lead">
            No party apparatus. No consultants. People of Spain is governed by the people whose names are on this page, and accountable to the members whose names are on our roll.
          </p>
        </div>
      </section>

      {/* ── PRESIDENT PROFILE ── */}
      <section>
        <div className="container">
          <div className="about-section-label">
            <span className="about-section-label__text">President of the Movement</span>
          </div>
          <div className="president-profile">

            {/* Left — sticky photo + name badge */}
            <div className="president-profile__photo-col">
              <PresidentPhoto src={president.photo} name={president.name} />
              <div className="president-profile__identity">
                <div className="president-profile__role">{president.title}</div>
                <div className="president-profile__name">{president.name}</div>
              </div>
            </div>

            {/* Right — pull quote + bio */}
            <div className="president-profile__bio-col">
              <blockquote className="president-profile__pullquote">
                "He will not ask for your trust. He will ask for your scrutiny."
              </blockquote>
              <div className="president-profile__bio">
                {president.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MOVEMENT FACTS BANNER ── */}
      <Reveal as="div" className="movement-facts">
        <div className="container">
          <div className="movement-facts__grid">
            <div className="movement-facts__item">
              <div className="movement-facts__value"><em>10</em></div>
              <div className="movement-facts__desc">Concrete promises</div>
            </div>
            <div className="movement-facts__item">
              <div className="movement-facts__value">2030</div>
              <div className="movement-facts__desc">Delivery deadline</div>
            </div>
            <div className="movement-facts__item">
              <div className="movement-facts__value"><em>2026</em></div>
              <div className="movement-facts__desc">Year founded</div>
            </div>
            <div className="movement-facts__item">
              <div className="movement-facts__value">1</div>
              <div className="movement-facts__desc">Spain. All of it.</div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── VICE PRESIDENTS ── */}
      <Reveal as="section">
        <div className="container">
          <div className="about-section-label">
            <span className="about-section-label__text">Vice Presidents</span>
          </div>
          <div className="vp-grid">
            {vicePresidents.map((vp, i) => (
              <div key={i} className="vp-card">
                <div className="vp-card__header">
                  <PhotoSlot src={vp.photo} name={vp.name} size={72} />
                  <div className="vp-card__identity">
                    <div className="vp-card__role">{vp.title}</div>
                    <h3 className="vp-card__name">{vp.name}</h3>
                  </div>
                </div>
                <div className="vp-card__bio">
                  {vp.bio.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
                {vp.manifesto && (
                  <Link to={`/manifesto/${vp.manifesto}`} className="vp-card__manifesto-link">
                    Read their manifesto →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── CAMPAIGN TEAM ── */}
      <section style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="about-section-label">
            <span className="about-section-label__text">Campaign Team</span>
          </div>
          <div className="team-roster">
            {team.map((m, i) => (
              <div key={i} className="team-member">
                <PhotoSlot src={m.photo} name={m.name} size={72} />
                <div className="team-member__name">{m.name}</div>
                <div className="team-member__role">{m.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
