import { Link } from 'react-router-dom';
import { POS_MANIFESTOS } from '../data/data.js';
import { POS_TEAM } from '../data/about-data.js';
import ManifestoCard from '../components/ManifestoCard.jsx';

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero__watermark" aria-hidden="true">10</div>
        <div className="container">
          <div className="hero__split">
            <div className="hero__left">
              <div className="hero__eyebrow">
                <span className="eyebrow">A Manifesto for 2030</span>
              </div>
              <h1 className="hero__cry">
                Make Spain<br />
                <span className="accent">Great</span>{' '}
                <span className="accent--purple">Again.</span>
              </h1>
            </div>
            <div className="hero__right">
              <p className="hero__lead">
                <strong>Ten Promises, One Country.</strong> Every family in Spain deserves three basic things: bread on the table, a roof over their heads, and stable work. Pan, techo y trabajo — not as a slogan, but as a guarantee we should already be delivering.
              </p>
              <div className="hero__actions">
                <Link className="btn btn--primary btn--lg" to="/manifestos">Read the Ten Promises</Link>
                <button className="btn btn--ghost" onClick={() => window.dispatchEvent(new CustomEvent('open-join-modal'))}>Join the Campaign →</button>
              </div>
              <Link to="/art" className="btn--video" aria-label="Watch the campaign film">
                <span className="btn--video__icon" aria-hidden="true">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </span>
                Watch the Film
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars-wrap">
        <div className="container">
          <div className="pillars">
            <div className="pillars__item">
              <div className="es">Progreso</div>
              <h3>Progress</h3>
              <p>Work, housing, healthcare and schools that meet the country at the level it already lives at.</p>
            </div>
            <div className="pillars__item">
              <div className="es">Solidaridad</div>
              <h3>Solidarity</h3>
              <p>No region left to manage its own decline. No generation asked to pay for the last one's mistakes.</p>
            </div>
            <div className="pillars__item">
              <div className="es">Futuro</div>
              <h3>Future</h3>
              <p>A sustainable economy running on clean energy. A fair transition that protects workers in changing industries. A climate commitment made in writing, not in speeches.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <h2 className="section-head__title">
              Ten Promises.<br />Read them.{' '}
              <span style={{ color: 'var(--pos-red)' }}>Hold us to them.</span>
            </h2>
            <Link className="btn btn--secondary" to="/manifestos">See all manifestos</Link>
          </div>
          <div className="manifesto-grid manifesto-grid--featured">
            {POS_MANIFESTOS.slice(0, 3).map((m) => <ManifestoCard key={m.id} m={m} />)}
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about__grid">
            <div>
              <span className="eyebrow">About the Movement</span>
              <hr className="flag-rule" />
              <p className="about__lead">
                "Spain does not belong to a party. It belongs to the people who build it every morning."
              </p>
              <div className="about__signature">
                <div>
                  <div className="name">{POS_TEAM.president.name}</div>
                  <div className="role">{POS_TEAM.president.title}</div>
                </div>
              </div>
              <Link className="btn btn--ghost" to="/about" style={{ marginTop: 'var(--space-5)', display: 'inline-flex' }}>
                Meet the team →
              </Link>
            </div>
            <div className="about__body">
              <h3>A movement, not a brand.</h3>
              <p>People of Spain (POS) was founded by {POS_TEAM.president.name} — a civic organiser who spent twenty years working in campaigns and ran out of patience with movements content to protest without proposing. We are not a political party. We do not exist to manage your expectations. We exist to organise the country around ten promises that are large enough to matter and concrete enough to keep.</p>
              <p>You will not find euphemism on this website. If a single promise on this site is broken, we expect you to break with us.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
