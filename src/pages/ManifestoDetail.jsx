import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { POS_MANIFESTOS } from '../data/data.js';

// Right-column photo. Shows the file at m.photo; if the path is empty or the
// file doesn't load, falls back to a gradient block stamped with the
// manifesto's number — so the layout never collapses.
function ManifestoPhoto({ photo, num, title, caption }) {
  const [broken, setBroken] = useState(false);
  const showPlaceholder = !photo || broken;
  return (
    <aside className="manifesto-body__media">
      {showPlaceholder ? (
        <div className="manifesto-body__placeholder" aria-hidden="true">
          <span className="manifesto-body__placeholder-num">{num}</span>
        </div>
      ) : (
        <img
          src={photo}
          alt={title}
          className="manifesto-body__photo"
          onError={() => setBroken(true)}
        />
      )}
      {caption && !showPlaceholder && (
        <p className="manifesto-body__photo-caption">{caption}</p>
      )}
    </aside>
  );
}

export default function ManifestoDetail() {
  const { id }      = useParams();
  const navigate    = useNavigate();
  const { state }   = useLocation();
  const pageRef     = useRef(null);
  const timeoutRef  = useRef(null);
  const [exiting, setExiting] = useState(false);

  // Clean up any pending navigation timeout on unmount
  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const idx = POS_MANIFESTOS.findIndex((m) => m.id === id);
  if (idx < 0) {
    return (
      <div className="page">
        <section className="hero">
          <div className="container">
            <h1 className="hero__cry">Not found.</h1>
            <Link className="btn btn--primary" to="/manifestos">All Manifestos</Link>
          </div>
        </section>
      </div>
    );
  }

  const m     = POS_MANIFESTOS[idx];
  const prev  = POS_MANIFESTOS[(idx - 1 + POS_MANIFESTOS.length) % POS_MANIFESTOS.length];
  const next  = POS_MANIFESTOS[(idx + 1) % POS_MANIFESTOS.length];
  const total = String(POS_MANIFESTOS.length).padStart(2, '0');
  const hasBody = Array.isArray(m.body) && m.body.length > 0;

  // Direction the user arrived from (set by slideTo below)
  const enterDir = state?.dir; // 'next' | 'prev' | undefined

  function slideTo(targetId, dir) {
    if (exiting) return;          // block double-clicks during exit
    setExiting(true);

    const el = pageRef.current;
    if (el) el.setAttribute('data-exit', dir);

    timeoutRef.current = setTimeout(() => {
      navigate(`/manifesto/${targetId}`, { state: { dir } });
    }, 260);
  }

  return (
    <div
      className="page"
      ref={pageRef}
      {...(enterDir ? { 'data-enter': enterDir } : {})}
    >
      {/* ─── HERO ─── */}
      <section className="manifesto-hero">
        <div className="container">
          <Link to="/manifestos" className="manifesto-back">← All Manifestos</Link>
          <div className="manifesto-hero__num">
            {m.num}<span className="total">/ {total}</span>
          </div>
          <div className="manifesto-hero__es">{m.es}</div>
          <h1 className="manifesto-hero__title">{m.title}</h1>
          {m.authors && m.authors.length > 0 && (
            <p className="manifesto-hero__byline">A manifesto by {m.authors.join(' & ')}</p>
          )}
          {m.lede && <p className="manifesto-hero__lead">{m.lede}</p>}
        </div>
      </section>

      {/* ─── BODY — prose left, photo right ───
          Each entry in m.body can be one of:
            • a string             → renders as a <p>
            • { heading: "..." }   → renders as a section heading
            • { list:    [...] }   → renders as a bulleted list
      */}
      {hasBody && (
        <section>
          <div className="container">
            <div className="manifesto-body">
              <div className="manifesto-body__prose">
                {m.body.map((item, i) => {
                  if (typeof item === 'string') {
                    return <p key={i}>{item}</p>;
                  }
                  if (item && item.heading) {
                    return (
                      <h2 key={i} className="manifesto-body__heading">
                        {item.heading}
                      </h2>
                    );
                  }
                  if (item && Array.isArray(item.list)) {
                    return (
                      <ul key={i} className="manifesto-body__list">
                        {item.list.map((li, j) => (
                          <li key={j}>{li}</li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </div>
              <ManifestoPhoto
                photo={m.photo}
                num={m.num}
                title={m.title}
                caption={m.photoCaption}
              />
            </div>
          </div>
        </section>
      )}

      {/* ─── PREV / NEXT ─── */}
      <section>
        <div className="container">
          <div className="manifesto-nav">
            <button
              className="manifesto-nav__link"
              onClick={() => slideTo(prev.id, 'prev')}
              disabled={exiting}
            >
              <div className="label">← Promise {prev.num}</div>
              <div className="title">{prev.es}</div>
            </button>
            <button
              className="manifesto-nav__link manifesto-nav__link--next"
              onClick={() => slideTo(next.id, 'next')}
              disabled={exiting}
            >
              <div className="label">Promise {next.num} →</div>
              <div className="title">{next.es}</div>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
