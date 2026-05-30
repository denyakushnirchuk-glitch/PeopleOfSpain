import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Nav() {
  const { pathname } = useLocation();
  const isManifestoDetail = pathname.startsWith('/manifesto/');
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever the route changes
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // While the mobile menu is open: lock body scroll + close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const openJoin = () => window.dispatchEvent(new CustomEvent('open-join-modal'));

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

          <button className="btn btn--primary btn--sm nav__join" onClick={openJoin}>Join</button>

          <button
            className="nav__toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-mobile"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={'nav__toggle-bars' + (menuOpen ? ' is-open' : '')} aria-hidden="true">
              <span /><span /><span />
            </span>
          </button>
        </div>
      </div>

      <div id="nav-mobile" className={'nav__mobile' + (menuOpen ? ' is-open' : '')}>
        <nav className="nav__mobile-links" aria-label="Mobile">
          <NavLink end className={({ isActive }) => 'nav__mobile-link' + (isActive ? ' nav__mobile-link--active' : '')} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => 'nav__mobile-link' + (isActive || isManifestoDetail ? ' nav__mobile-link--active' : '')} to="/manifestos">Manifestos</NavLink>
          <NavLink className={({ isActive }) => 'nav__mobile-link' + (isActive ? ' nav__mobile-link--active' : '')} to="/art">Art</NavLink>
          <NavLink className={({ isActive }) => 'nav__mobile-link' + (isActive ? ' nav__mobile-link--active' : '')} to="/about">About</NavLink>
        </nav>
        <button className="btn btn--primary btn--full" onClick={() => { setMenuOpen(false); openJoin(); }}>
          Join the Campaign →
        </button>
      </div>
    </header>
  );
}
