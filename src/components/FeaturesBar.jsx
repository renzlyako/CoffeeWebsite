import './FeaturesBar.css';

const features = [
  {
    title: 'Bean Journey',
    desc: 'Discover the journey behind every brew, from farm-fresh beans to your cup.',
  },
  {
    title: 'Farm Stories',
    desc: 'Explore the heart of our farm through stories of passion, tradition, and community.',
  },
  {
    title: 'Sustainability',
    desc: 'Growing coffee with care for people and the planet, one harvest at a time.',
  },
];

const CupIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" stroke="#DAA520" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="#DAA520" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="6" y1="1" x2="6" y2="4" stroke="#DAA520" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="10" y1="1" x2="10" y2="4" stroke="#DAA520" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="14" y1="1" x2="14" y2="4" stroke="#DAA520" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#DAA520" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="9 22 9 12 15 12 15 22" stroke="#DAA520" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LeafIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" stroke="#DAA520" strokeWidth="1.8"/>
    <path d="M12 6v6l4 2" stroke="#DAA520" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M8 14s1 2 4 2 4-2 4-2" stroke="#DAA520" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const icons = [CupIcon, HomeIcon, LeafIcon];

export default function FeaturesBar() {
  return (
    <div className="features-bar">
      <div className="features-inner">
        {features.map((f, i) => {
          const Icon = icons[i];
          return (
            <div className="feature-card" key={i}>
              <div className="feature-icon-circle">
                <Icon />
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <div className="feature-divider" />
              <p className="feature-desc">{f.desc}</p>
              <button className="btn-discover">Discover</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}