import { useState } from 'react';

const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
const BREVO_LIST_ID = Number(import.meta.env.VITE_BREVO_LIST_ID);

export default function Join() {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!BREVO_API_KEY || !BREVO_LIST_ID) {
      // Keys not configured yet — graceful fallback during development
      setStatus('success');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY,
        },
        body: JSON.stringify({
          email,
          listIds: [BREVO_LIST_ID],
          updateEnabled: true,
        }),
      });

      // 201 = created, 204 = already exists and updated
      if (res.status === 201 || res.status === 204) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
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

          {status === 'success' ? (
            <div className="join__ok">
              ¡Bienvenido! You're in. Expect your first update within the hour.
            </div>
          ) : (
            <form className="join__form" onSubmit={handleSubmit}>
              <input
                className="join__input"
                type="email"
                placeholder="tu@correo.es"
                aria-label="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
              />
              <button
                className="btn btn--on-dark"
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Signing up…' : 'Sign Up'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="join__error">
              Something went wrong — please try again or contact us directly.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
