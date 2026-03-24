import './MeetFarmers.css';

export default function MeetFarmers() {
  return (
    <section className="farmers-section" id="farmers">

      {}
      <div className="farmers-mobile-bg">
        <img
          src="https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-6180bc9fc25d3ae2.png"
          alt=""
          className="farmers-mobile-bg-img"
        />
      </div>

      <div className="farmers-inner">
        <div className="farmers-top">
          <h2 className="farmers-title">Meet our Farmers</h2>
          <div className="farmers-top-row">
            <div className="farmers-intro-text">
              <p>
                Behind every cup of coffee is the dedication, passion, and skill of our farmers. At Heart &amp; Bean,
                our farmers are the heart of our operation—nurturing each bean with care, from planting to harvest.
                Their expertise, passed down through generations, ensures every batch of coffee meets the highest
                standards of quality and flavor.
              </p>
              <div className="farmers-btn-wrapper">
                <button className="btn-readmore">Read More</button>
              </div>
            </div>
            <div className="farmers-hero-img">
              <img
                src="https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-6180bc9fc25d3ae2.png"
                alt="Coffee farmers harvesting"
                className="farmers-photo"
              />
            </div>
          </div>
        </div>

        <div className="pedro-section">
          <div className="pedro-img-col">
            <img
              src="https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-5616a031039d6a04.png"
              alt="Pedro the farmer"
              className="pedro-photo"
            />
          </div>
          <div className="pedro-text-col">
            <h3 className="pedro-title">Pedro: The Keeper of Tradition</h3>
            <p className="pedro-desc">
              Pedro, lovingly called &quot;Tatay Pedro,&quot; has been cultivating coffee for over 40 years.
              With hands weathered by decades of care, he combines age-old techniques with a deep respect for the land.
              <br /><br />
              Known for teaching younger farmers, Pedro says, &quot;The soil and plants speak—you just have to listen.&quot;
              <br /><br />
              Even at his age, he leads the harvest, ensuring only the finest beans are picked.
              For Pedro, every cup of coffee represents a lifetime of passion and tradition—a legacy he&apos;s proud to share with the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}