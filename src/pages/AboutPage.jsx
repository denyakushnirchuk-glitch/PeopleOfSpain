import { Link } from 'react-router-dom';
import { POS_TEAM } from '../data/about-data.js';
import PhotoSlot from '../components/PhotoSlot.jsx';

export default function AboutPage() {
  const { president, vicePresidents, team } = POS_TEAM;
  return (
    <div className="page">
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

      <section>
        <div className="container">
          <div className="org-tree">

            {/* Level 1 — President */}
            <div className="org-level org-level--president">
              <div className="org-card org-card--president">
                <PhotoSlot src={president.photo} name={president.name} size={120} />
                <div className="org-card__body">
                  <div className="org-card__role">{president.title}</div>
                  <h2 className="org-card__name">{president.name}</h2>
                  {president.bio.map((p, i) => (
                    <p key={i} className="org-card__bio">{p}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Drop → VPs */}
            <div className="org-drop" />
            <div className="org-branch org-branch--vp" aria-hidden="true" />

            {/* Level 2 — Vice Presidents */}
            <div className="org-level org-level--vp">
              {vicePresidents.map((vp, i) => (
                <div key={i} className="org-card org-card--vp">
                  <PhotoSlot src={vp.photo} name={vp.name} size={88} />
                  <div className="org-card__body">
                    <div className="org-card__role">{vp.title}</div>
                    <h3 className="org-card__name org-card__name--vp">{vp.name}</h3>
                    {vp.bio.map((p, j) => (
                      <p key={j} className="org-card__bio">{p}</p>
                    ))}
                    {vp.manifesto && (
                      <Link to={`/manifesto/${vp.manifesto}`} className="org-card__manifesto-link">
                        Read their manifesto →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Drop → Team */}
            <div className="org-drop" />
            <div className="org-branch org-branch--team" aria-hidden="true" />

            {/* Level 3 — Team */}
            <div className="org-level org-level--team">
              {team.map((m, i) => (
                <div key={i} className="org-card org-card--team">
                  <PhotoSlot src={m.photo} name={m.name} size={64} />
                  <div className="org-card__name org-card__name--sm">{m.name}</div>
                  <div className="org-card__role org-card__role--sm">{m.title}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
