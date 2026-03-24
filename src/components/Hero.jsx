import './Hero.css';
import heroBg from '../assets/1.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src={heroBg}
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
        <button className="btn-readmore">Explore Us</button>
      </div>
    </section>
  );
}