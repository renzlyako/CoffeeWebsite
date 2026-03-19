import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-b16018d02ca85dd6.png"
          alt="Coffee Farm Hero"
          className="hero-bg-img"
        />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span>Carefully Grown,</span>
          <span>Perfectly Brewed.</span>
        </h1>
        <p className="hero-subtitle">Taste the passion in every cup.</p>
        <button className="btn-primary hero-cta">Explore us &gt;&gt;</button>
      </div>
    </section>
  );
}
