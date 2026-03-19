import './TeamStories.css';

export default function TeamStories() {
  return (
    <section className="team-section">
      <div className="team-bg">
        <img
          src="https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-82991031cf1ef4ff.png"
          alt="Team Stories"
          className="team-bg-img"
        />
        <div className="team-overlay" />
      </div>
      <div className="team-content">
        <h2 className="section-title-freeman white">Team Stories</h2>
        <p className="team-desc">
          Behind every perfect cup of coffee is a dedicated team bringing passion and skill to every step of the process.
          From the farmers nurturing each bean to the roasters crafting the perfect flavor profile,
          &apos;From Farm to Cup&apos; celebrates the people who make Heart &amp; Bean extraordinary.
          Meet the hands and hearts behind your favorite brews and discover their stories, dedication, and love for coffee.
        </p>
        <button className="btn-primary">Read More</button>
      </div>
    </section>
  );
}
