import './Products.css';

export default function Products() {
  return (
    <section className="products-section" id="shop">
      <div className="products-bg">
        <img
          src="https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-fb6b3efba1d94bb8.png"
          alt="Coffee beans in hands"
          className="products-bg-img"
        />
        <div className="products-overlay" />
      </div>
      <div className="products-content">
        <div className="product-card">
          <h3 className="product-title">Coffee Beans</h3>
          <p className="product-desc">
            Coffee beans are the seeds of the Coffea plant, carefully grown, harvested, and processed to deliver
            the rich, aromatic brew we love. At Heart and Bean, our coffee beans are cultivated with passion and care,
            ensuring exceptional quality and flavor in every cup.
          </p>
          <button className="btn-primary">View Shop</button>
        </div>
        <div className="product-card product-card-right">
          <h3 className="product-title">Coffee Gift Sets</h3>
          <p className="product-desc">
            Explore the Heart and Bean Coffee Gift Shop, a curated collection of thoughtful and delightful gifts
            for coffee lovers. From premium coffee beans to beautifully designed accessories, each item is
            crafted to bring joy and enhance the coffee experience.
          </p>
          <button className="btn-primary">View Shop</button>
        </div>
      </div>
    </section>
  );
}
