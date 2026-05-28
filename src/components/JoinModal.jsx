import { useState, useEffect } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// SETUP: sign up at formspree.io with denyadev@proton.me, create a form,
// then replace YOUR_FORM_ID below with the ID they give you (e.g. "xvgoanpr").
// ─────────────────────────────────────────────────────────────────────────────
const FORMSPREE_URL = 'https://formspree.io/f/xdajyvja';

const EMPTY_FORM = { name: '', email: '', voteStatus: '', message: '' };

export default function JoinModal() {
  const [open,   setOpen]   = useState(false);
  const [form,   setForm]   = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  // Any component can open the modal with:
  //   window.dispatchEvent(new CustomEvent('open-join-modal'))
  useEffect(() => {
    const handler = () => {
      setOpen(true);
      setStatus('idle');
      setForm(EMPTY_FORM);
    };
    window.addEventListener('open-join-modal', handler);
    return () => window.removeEventListener('open-join-modal', handler);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  function field(key) {
    return (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Dev fallback — no Formspree ID configured yet
    if (FORMSPREE_URL.includes('YOUR_FORM_ID')) {
      setStatus('success');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div
      className="modal-overlay"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Join the Campaign"
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <button
          className="modal__close"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          ✕
        </button>

        {status === 'success' ? (

          <div className="modal__success">
            <div className="modal__success-icon">✓</div>
            <h2 className="modal__title">¡Gracias!</h2>
            <p className="modal__lead">You are part of the movement now. We will be in touch.</p>
            <button className="btn btn--primary" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>

        ) : (
          <>
            <div className="modal__head">
              <span className="eyebrow">People of Spain</span>
              <h2 className="modal__title">Join the Campaign</h2>
              <p className="modal__lead">Tell us who you are. We will keep you informed.</p>
            </div>

            <form className="modal__form" onSubmit={handleSubmit} noValidate>

              <div className="modal__field">
                <label className="modal__label" htmlFor="m-name">Your Name</label>
                <input
                  id="m-name"
                  className="modal__input"
                  type="text"
                  placeholder="Full name"
                  required
                  value={form.name}
                  onChange={field('name')}
                  disabled={status === 'loading'}
                />
              </div>

              <div className="modal__field">
                <label className="modal__label" htmlFor="m-email">Email Address</label>
                <input
                  id="m-email"
                  className="modal__input"
                  type="email"
                  placeholder="tu@correo.es"
                  required
                  value={form.email}
                  onChange={field('email')}
                  disabled={status === 'loading'}
                />
              </div>

              <div className="modal__field">
                <label className="modal__label" htmlFor="m-vote">Vote Status</label>
                <select
                  id="m-vote"
                  className="modal__input modal__select"
                  required
                  value={form.voteStatus}
                  onChange={field('voteStatus')}
                  disabled={status === 'loading'}
                >
                  <option value="">Select your status…</option>
                  <option value="registered">I am registered to vote in Spain</option>
                  <option value="not-registered">I am not yet registered to vote</option>
                  <option value="ineligible">I am not eligible to vote</option>
                  <option value="abroad">I support the movement from abroad</option>
                </select>
              </div>

              <div className="modal__field">
                <label className="modal__label" htmlFor="m-message">
                  Message <span className="modal__optional">(optional)</span>
                </label>
                <textarea
                  id="m-message"
                  className="modal__input modal__textarea"
                  placeholder="Anything you would like us to know…"
                  rows={4}
                  value={form.message}
                  onChange={field('message')}
                  disabled={status === 'loading'}
                />
              </div>

              {status === 'error' && (
                <p className="modal__error">Something went wrong — please try again.</p>
              )}

              <button
                className="btn btn--primary btn--full"
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending…' : 'Join the Movement →'}
              </button>

            </form>
          </>
        )}
      </div>
    </div>
  );
}
