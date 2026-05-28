import { NavLink, useLocation } from 'react-router-dom';

export default function Nav() {
  const { pathname } = useLocation();
  const isManifestoDetail = pathname.startsWith('/manifesto/');

  return (
    <header className="nav">
      <div className="container">
        <div className="nav__inner">
          <NavLink to="/" className="nav__brand" aria-label="POS — People of Spain — home">
            <img src="assets/pos-logo-transparent.png" alt="" />
            <span className="nav__brand-text">
              <span className="wm">People of Spain</span>
              <span className="tg">Progress · Solidarity · Future</span>
            </span>
          </NavLink>
          <nav className="nav__links" aria-label="Primary">
            <NavLink end className={({ isActive }) => 'nav__link ' + (isActive ? 'nav__link--active' : '')} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => 'nav__link ' + (isActive || isManifestoDetail ? 'nav__link--active' : '')} to="/manifestos">Manifestos</NavLink>
            <NavLink className={({ isActive }) => 'nav__link ' + (isActive ? 'nav__link--active' : '')} to="/art">Art</NavLink>
            <NavLink className={({ isActive }) => 'nav__link ' + (isActive ? 'nav__link--active' : '')} to="/about">About</NavLink>
          </nav>
          <button className="btn btn--primary btn--sm" onClick={() => window.dispatchEvent(new CustomEvent('open-join-modal'))}>Join</button>
        </div>
      </div>
    </header>
  );
}
