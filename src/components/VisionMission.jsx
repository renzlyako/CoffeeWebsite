import './VisionMission.css';

export default function VisionMission() {
  return (
    <section className="vm-section">
      <div className="vm-bg-left">
        <img
          src="https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-471da08ddecd52e8.png"
          alt="Coffee farm"
          className="vm-bg-img"
        />
        <div className="vm-bg-overlay" />
      </div>
      <div className="vm-content">
        <div className="vm-right">
          <div className="vm-block">
            <h2 className="section-title-freeman white">Vision</h2>
            <p className="vm-text white-text">
              To create an exceptional online experience that connects people to the heart of coffee farming,
              showcasing our commitment to quality, sustainability, and community—bringing the journey from farm
              to cup closer to every visitor.
            </p>
          </div>
          <div className="vm-block">
            <h2 className="section-title-freeman white">Mission</h2>
            <p className="vm-text white-text">
              To provide an engaging platform that shares our passion for coffee, highlights sustainable farming
              practices, and connects our community to the stories, people, and care behind every bean.
            </p>
            <button className="btn-primary vm-btn">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
