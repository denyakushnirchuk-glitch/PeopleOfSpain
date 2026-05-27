import Join from '../components/Join.jsx';

// EDIT: paste your YouTube video ID here (the part after v= in the URL)
const VIDEO_ID = 'YOUR_YOUTUBE_VIDEO_ID';

// EDIT: add poster entries — { src: "/photos/your-poster.jpg", caption: "Caption" }
const POSTERS = [
  { src: 'C:\Users\dendi\Documents\Dev\Web\Active\Fledged Websites\PeopleOfSpain\public\photos\image1.png', caption: '' },
  { src: '', caption: '' },
  { src: '', caption: '' },
  { src: '', caption: '' },
  { src: '', caption: '' },
  { src: '', caption: '' },
];

export default function ArtPage() {
  const videoSet = VIDEO_ID && VIDEO_ID !== 'YOUR_YOUTUBE_VIDEO_ID';
  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <div className="hero__eyebrow"><span className="eyebrow">Art &amp; Inspiration</span></div>
          <h1 className="hero__cry">
            The voice of<br />
            <span className="accent">a movement.</span>
          </h1>
          <p className="hero__lead">
            Politics is not just policy. It is story, image, and song. Here you will find the visual and spoken language of People of Spain — the posters that go on walls, and the film that explains why.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="eyebrow">Our Film</span>
          <hr className="flag-rule" />
          <div className="video-frame">
            {videoSet ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                title="POS campaign film"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: 'block' }}
              />
            ) : (
              <div className="video-placeholder">
                <div className="play">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <p className="label">Set VIDEO_ID in src/pages/ArtPage.jsx to embed your film</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="eyebrow">Campaign Posters</span>
          <hr className="flag-rule" />
          <div className="poster-grid">
            {POSTERS.map((p, i) => (
              <div key={i} className="poster">
                {p.src ? (
                  <img className="poster__img" src={p.src} alt={p.caption} />
                ) : (
                  <div className="poster__placeholder">
                    <img src="assets/pos-logo-transparent.png" alt="" />
                    <span>Poster forthcoming</span>
                  </div>
                )}
                {p.caption && p.src && (
                  <div className="poster__caption">{p.caption}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Join />
    </div>
  );
}
