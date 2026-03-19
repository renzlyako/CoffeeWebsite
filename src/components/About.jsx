import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-bg-image">
        <img
          src="https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-471da08ddecd52e8.png"
          alt="Coffee farm background"
          className="about-bg-img"
        />
        <div className="about-overlay" />
      </div>
      <div className="about-content-wrapper">
        <div className="about-left">
          <h2 className="section-title-freeman white">About us</h2>
          <p className="about-quote">
            "At Heart &amp; Bean, we&apos;re more than just a coffee farm—we&apos;re a community rooted in passion, tradition, and sustainability.
            Every bean we grow reflects our dedication to quality and care for the land, the people, and your cup. From our farm to your home, we invite you to experience coffee crafted with heart."
          </p>
          <button className="btn-primary">Read More</button>
        </div>
        <div className="about-right">
          <div className="about-img-frame">
            <img
              src="https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-40785e5fe5946cf8.png"
              alt="Harvesting coffee"
              className="about-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
