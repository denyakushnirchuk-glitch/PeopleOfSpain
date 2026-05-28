export default function Join() {
  function openModal() {
    window.dispatchEvent(new CustomEvent('open-join-modal'));
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
              No paywall. No tiers. One movement, one membership, one promise: when we win,
              we hand the country back to the people who built it.
            </p>
          </div>
          <button className="btn btn--on-dark btn--lg" onClick={openModal}>
            Join the Campaign →
          </button>
        </div>
      </div>
    </section>
  );
}
