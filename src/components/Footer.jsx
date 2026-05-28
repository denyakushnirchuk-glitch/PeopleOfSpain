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
              <li><a href="mailto:denyadev@proton.me">denyadev@proton.me</a></li>
              <li><a href="tel:+34911234567">+34 951 701 689</a></li>
              <li><span>Av. Puerta de Hierro, 28071 Madrid</span></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span className="micro">© 2026 People of Spain · A political movement</span>
          <span className="micro">Make Spain Great Again</span>
        </div>
      </div>
    </footer>
  );
}
