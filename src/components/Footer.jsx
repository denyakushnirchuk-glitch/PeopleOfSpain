import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="cry">For a Spain<br />that builds.</div>
            <p>People of Spain is a movement, not a marketing company. Every name on our member roll is a household we owe a promise to.</p>
          </div>
          <div className="footer__col">
            <h4>The Movement</h4>
            <ul>
              <li><Link to="/about">About POS</Link></li>
              <li><Link to="/manifestos">The Ten Promises</Link></li>
              <li><Link to="/art">Art &amp; Inspiration</Link></li>
              <li><Link to="/about">Volunteer</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Manifestos</h4>
            <ul>
              <li><Link to="/manifesto/immigration">Immigration</Link></li>
              <li><Link to="/manifesto/economy">Economy</Link></li>
              <li><Link to="/manifesto/healthcare">Healthcare</Link></li>
              <li><Link to="/manifesto/climate">Climate</Link></li>
              <li><Link to="/manifesto/security">Security</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:prensa@pos-espana.org">prensa@pos-espana.org</a></li>
              <li><a href="mailto:voluntarios@pos-espana.org">voluntarios@pos-espana.org</a></li>
              <li><a href="tel:+34911234567">+34 911 23 45 67</a></li>
              <li><span>Calle Mayor 12, Madrid</span></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span className="micro">© 2026 People of Spain · A political movement</span>
          <span className="micro">Pan · Techo · Trabajo</span>
        </div>
      </div>
    </footer>
  );
}
