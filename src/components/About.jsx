import './About.css';
import farmerImg from '../assets/2.png';
import hoverImg from '../assets/5.png';

export default function About() {
  return (
    <section className="about-section" id="about">

      {}
      <div className="about-bg-img-wrapper">
        <img src={farmerImg} alt="Harvesting coffee" className="about-bg-img" />
      </div>

      <div className="about-content-wrapper">
        <div className="about-left">
          <h2 className="section-title-freeman white">About us</h2>
          <p className="about-quote">
            "At Heart & Bean, we're more than just a coffee farm—we're a community rooted in passion, tradition, and sustainability.
            Every bean we grow reflects our dedication to quality and care for the land, the people, and your cup.
            From our farm to your home, we invite you to experience coffee crafted with heart."
          </p>
          <button className="btn-readmore">Read More</button>
        </div>
        <div className="about-right">
          <div className="about-img-frame">
            <img src={farmerImg} alt="Harvesting coffee" className="about-photo default-img" />
            <img src={hoverImg} alt="Coffee farm" className="about-photo hover-img" />
          </div>
        </div>
      </div>
    </section>
  );
}