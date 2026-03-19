import './FeaturesBar.css';

const features = [
  {
    icon: 'https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-b5dedddca870d6f8.png',
    title: 'Bean Journey',
    desc: 'Discover the journey behind every brew,\nfrom farm-fresh beans to your cup.',
  },
  {
    icon: 'https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-c96f00ffb270bfa6.png',
    title: 'Farm Stories',
    desc: 'Explore the heart of our farm through stories\nof passion, tradition, and community.',
  },
  {
    icon: 'https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-6ed2fea31d949b5c.png',
    title: 'Sustainability',
    desc: 'Growing coffee with care for\npeople and the planet.',
  },
];

export default function FeaturesBar() {
  return (
    <div className="features-bar">
      <div className="features-inner">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <img src={f.icon} alt={f.title} className="feature-icon" />
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
            <button className="btn-discover">Discover &gt;&gt;</button>
          </div>
        ))}
      </div>
    </div>
  );
}
