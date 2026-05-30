import { useState } from 'react';

const STORAGE_KEY = 'pos-disclaimer-dismissed';

export default function DisclaimerBanner() {
  const [visible, setVisible] = useState(
    () => !localStorage.getItem(STORAGE_KEY)
  );

  if (!visible) return null;

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  }

  return (
    <div className="disclaimer-banner" role="region" aria-label="Site disclaimer">
      <p className="disclaimer-banner__text">
        This website is a <strong>mock project</strong> created for design and development purposes only.
        It is not affiliated with any real political party, movement, or organisation.
      </p>
      <button className="disclaimer-banner__close" onClick={dismiss} aria-label="Dismiss disclaimer">
        Understood
      </button>
    </div>
  );
}
