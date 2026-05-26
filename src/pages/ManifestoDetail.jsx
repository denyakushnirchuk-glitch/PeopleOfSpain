import { Link, useParams } from 'react-router-dom';
import { POS_MANIFESTOS } from '../data/data.js';
import Join from '../components/Join.jsx';

export default function ManifestoDetail() {
  const { id } = useParams();
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
  const m = POS_MANIFESTOS[idx];
  const prev = POS_MANIFESTOS[(idx - 1 + POS_MANIFESTOS.length) % POS_MANIFESTOS.length];
  const next = POS_MANIFESTOS[(idx + 1) % POS_MANIFESTOS.length];
  const total = String(POS_MANIFESTOS.length).padStart(2, '0');

  return (
    <div className="page">
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
          <p className="manifesto-hero__lead">{m.lede}</p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="number-band">
            {m.numberBand.map((n, i) => (
              <div key={i} className="number-band__item">
                <div className="num">{n.num}</div>
                <div className="label">{n.label}</div>
              </div>
            ))}
          </div>
          <span className="eyebrow">The Policies</span>
          <hr className="flag-rule" />
          <ul className="policy-list">
            {m.policies.map((p, i) => (
              <li key={i} className="policy">
                <div className="policy__num">{p.num}</div>
                <div>
                  <h3 className="policy__title">{p.title}</h3>
                  <p className="policy__body">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <blockquote className="pull-quote">"{m.pullQuote}"</blockquote>
          <div className="manifesto-nav">
            <Link className="manifesto-nav__link" to={`/manifesto/${prev.id}`}>
              <div className="label">← Promise {prev.num}</div>
              <div className="title">{prev.es}</div>
            </Link>
            <Link className="manifesto-nav__link manifesto-nav__link--next" to={`/manifesto/${next.id}`}>
              <div className="label">Promise {next.num} →</div>
              <div className="title">{next.es}</div>
            </Link>
          </div>
        </div>
      </section>
      <Join />
    </div>
  );
}
