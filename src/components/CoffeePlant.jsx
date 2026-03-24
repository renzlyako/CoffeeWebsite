import './CoffeePlant.css';
import cupImg from '../assets/8.png';
import beansImg from '../assets/7.png';

export default function CoffeePlant() {
  return (
    <section className="plant-section">
      <div className="plant-clip">
        <div className="plant-bg">
          <div className="plant-overlay" />
        </div>
        <img src={beansImg} alt="floating beans" className="plant-floating-beans" />
      </div>

      <div className="plant-content">
        <div className="plant-text-col">
          <h2 className="plant-title">The Coffee Plant</h2>
          <p className="plant-subtitle">
            Coffee comes from the Coffea plant,<br />
            with two main species dominating the industry
          </p>

          <div className="species-block">
            <h3 className="species-name">Arabica</h3>
            <p className="species-desc">
              Known for its smooth and complex flavor, grown in higher altitudes.
              Contains less caffeine, typically around 1.2–1.5%.
              Oval-shaped with a curved crease in the center.
            </p>
          </div>

          <div className="species-block">
            <h3 className="species-name">Robusta</h3>
            <p className="species-desc">
              Offers a stronger, more bitter taste and contains higher caffeine content.
              Has almost double the caffeine, ranging from 2.2–2.7%.
              Rounder and smaller with a straighter crease.
            </p>
          </div>
        </div>

        <div className="plant-img-col">
          <img src={cupImg} alt="Coffee cup" className="plant-cup-img" />
        </div>
      </div>
    </section>
  );
}