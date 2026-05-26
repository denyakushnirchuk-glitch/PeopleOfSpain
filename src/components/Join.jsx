import { useState } from 'react';

export default function Join() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <section className="join" id="join">
      <div className="container">
        <div className="join__inner">
          <div>
            <h2 className="join__title">
              Join. We rise <span className="accent">together,</span> or we don't rise at all.
            </h2>
            <p className="join__lead">
              No paywall. No tiers. One movement, one membership, one promise: when we win, we hand the country back to the people who built it.
            </p>
          </div>
          {submitted ? (
            <div className="join__ok">¡Bienvenido! We'll be in touch.</div>
          ) : (
            <form className="join__form" onSubmit={handleSubmit}>
              <input
                className="join__input"
                type="email"
                placeholder="tu@correo.es"
                aria-label="Your email"
                required
              />
              <button className="btn btn--on-dark" type="submit">Sign Up</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
