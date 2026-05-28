import { Link } from 'react-router-dom';
import { POS_MANIFESTOS } from '../data/data.js';

export default function ManifestosHub() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <div className="hero__eyebrow"><span className="eyebrow">The Ten Promises</span></div>
          <h1 className="hero__cry">
            What we will do.<br />
            <span className="accent--purple">Before 2030.</span>
          </h1>
          <p className="hero__lead">
            Ten specific things we will have done by 2030. Numbered, written down, and signed with our names — so you know exactly who to hold responsible.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="manifesto-index">
            {POS_MANIFESTOS.map((m) => (
              <Link key={m.id} className="manifesto-row" to={`/manifesto/${m.id}`}>
                <span className="manifesto-row__num">{m.num}</span>
                <div className="manifesto-row__mid">
                  <span className="manifesto-row__topic">{m.es}</span>
                  <h3 className="manifesto-row__title">{m.title}</h3>
                </div>
                <span className="manifesto-row__read">Read <span className="arrow">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
