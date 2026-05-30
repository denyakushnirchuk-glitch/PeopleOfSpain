import { useState, useEffect, useCallback } from 'react';

// EDIT: paste your YouTube video ID here (the part after v= in the URL)
const VIDEO_ID = 't9SvKlzmeuQ';

// EDIT: add poster entries — { src: "photos/your-poster.jpg", caption: "Caption" }
const POSTERS = [
  { src: 'photos/image1.png', caption: '' },
  { src: '', caption: '' },
  { src: '', caption: '' },
  { src: '', caption: '' },
  { src: '', caption: '' },
  { src: '', caption: '' },
];

/* ── Lightbox ───────────────────────────────────────────── */
function PosterLightbox({ src, caption, onClose }) {
  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Escape key closes
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Backdrop click closes (but not content clicks)
  function handleBackdrop(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Poster enlarged view"
      onClick={handleBackdrop}
    >
      {/* Close button */}
      <button
        className="lightbox__close"
        aria-label="Close poster view"
        onClick={onClose}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Image + optional caption */}
      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <img
          className="lightbox__img"
          src={src}
          alt={caption || 'Campaign poster'}
        />
        {caption && (
          <div className="lightbox__caption">{caption}</div>
        )}
      </div>
    </div>
  );
}

/* ── Individual poster card ─────────────────────────────── */
function PosterItem({ src, caption, onOpen }) {
  const [broken, setBroken] = useState(false);
  const showPlaceholder = !src || broken;
  const canOpen = !showPlaceholder;

  function handleActivate() {
    if (canOpen) onOpen({ src, caption });
  }

  function handleKey(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleActivate();
    }
  }

  return (
    <div
      className={`poster${canOpen ? ' poster--clickable' : ''}`}
      role={canOpen ? 'button' : undefined}
      tabIndex={canOpen ? 0 : undefined}
      aria-label={canOpen ? (caption || 'View campaign poster') : undefined}
      onClick={handleActivate}
      onKeyDown={handleKey}
    >
      {showPlaceholder ? (
        <div className="poster__placeholder">
          <div className="poster__placeholder-badge">POS</div>
          <span>Poster forthcoming</span>
        </div>
      ) : (
        <div className="poster__img-wrap">
          <img
            className="poster__img"
            src={src}
            alt={caption || 'Campaign poster'}
            onError={() => setBroken(true)}
          />
          {/* Hover reveal overlay */}
          <div className="poster__zoom-hint" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </div>
        </div>
      )}
      {caption && !showPlaceholder && (
        <div className="poster__caption">{caption}</div>
      )}
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────── */
export default function ArtPage() {
  const videoSet = VIDEO_ID && VIDEO_ID !== 'YOUR_YOUTUBE_VIDEO_ID';
  const [lightbox, setLightbox] = useState(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <div className="page">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="container">
          <div className="hero__eyebrow"><span className="eyebrow">Art &amp; Inspiration</span></div>
          <h1 className="hero__cry">
            The voice of<br />
            <span className="accent">a movement.</span>
          </h1>
          <p className="hero__lead">
            Politics is not just policy. It is story, image, and song. Here you will find the visual and spoken language of People of Spain — the posters that go on walls, and the film that explains why.
          </p>
        </div>
      </section>

      {/* ── FILM — dark cinematic section ── */}
      <div className="art-film">
        <div className="container">
          <div className="about-section-label art-film__label">
            <span className="about-section-label__text">Our Film</span>
          </div>
          <div className="art-film__video">
            <div className="video-frame">
              {videoSet ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                  title="POS campaign film"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ display: 'block' }}
                />
              ) : (
                <div className="video-placeholder">
                  <div className="play" aria-hidden="true">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <p className="label">
                    Set <code style={{ fontFamily: 'monospace', opacity: 0.7 }}>VIDEO_ID</code> in{' '}
                    <code style={{ fontFamily: 'monospace', opacity: 0.7 }}>src/pages/ArtPage.jsx</code>{' '}
                    to embed your campaign film
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── CAMPAIGN POSTERS ── */}
      <section>
        <div className="container">
          <div className="about-section-label">
            <span className="about-section-label__text">Campaign Posters</span>
          </div>
          <div className="poster-grid">
            {POSTERS.map((p, i) => (
              <PosterItem key={i} src={p.src} caption={p.caption} onOpen={setLightbox} />
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <PosterLightbox
          src={lightbox.src}
          caption={lightbox.caption}
          onClose={closeLightbox}
        />
      )}

    </div>
  );
}
