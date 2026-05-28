import { POS_MANIFESTOS } from '../data/data.js';
import ManifestoCard from '../components/ManifestoCard.jsx';

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
          <div className="manifesto-grid">
            {POS_MANIFESTOS.map((m) => <ManifestoCard key={m.id} m={m} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
