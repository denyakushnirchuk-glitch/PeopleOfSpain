import { Link } from 'react-router-dom';

export default function ManifestoCard({ m }) {
  return (
    <Link className="manifesto-card" to={`/manifesto/${m.id}`}>
      <div className="manifesto-card__num">{m.num}</div>
      <div className="manifesto-card__es">{m.es}</div>
      <h3 className="manifesto-card__title">{m.title}</h3>
      <p className="manifesto-card__lede">{m.lede.split('.')[0]}.</p>
      <div className="manifesto-card__read">
        Read
        <span className="arrow">→</span>
      </div>
    </Link>
  );
}
