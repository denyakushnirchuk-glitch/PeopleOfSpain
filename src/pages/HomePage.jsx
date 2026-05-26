import { Link } from 'react-router-dom';
import { POS_MANIFESTOS } from '../data/data.js';
import { POS_TEAM } from '../data/about-data.js';
import ManifestoCard from '../components/ManifestoCard.jsx';
import Join from '../components/Join.jsx';

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <div className="hero__eyebrow">
            <span className="eyebrow">A Manifesto for 2030</span>
          </div>
          <h1 className="hero__cry">
            Make Spain<br />
            <span className="accent">Great</span>{' '}
            <span className="accent--purple">Again.</span>
          </h1>
          <p className="hero__lead">
            Ten promises. One country. <strong>Pan, techo y trabajo</strong> — bread, shelter and work — for every family in every province by the close of this decade. The People of Spain are not waiting for permission.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary btn--lg" to="/manifestos">Read the Ten Promises</Link>
            <a className="btn btn--ghost" href="#/join">Join the Movement →</a>
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
              <p>A climate plan that is also an industrial plan. A culture funded like it matters. A justice system worth its name.</p>
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
          <div className="manifesto-grid">
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
              <p>People of Spain (POS) was convened by a coalition of trade-union members, rural mayors, doctors, teachers and renters. We are not a political party. We do not exist to manage your expectations. We exist to organise the country around ten promises that are large enough to matter and concrete enough to keep.</p>
              <p>You will not find euphemism on this website. If a single promise on this site is broken, we expect you to break with us.</p>
            </div>
          </div>
        </div>
      </section>
      <Join />
    </div>
  );
}
