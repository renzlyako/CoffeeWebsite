import { useEffect, useRef, useState } from 'react';
import handImg from '../assets/9.png';
import './Products.css';

export default function Products() {
  const handRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px' }
    );

    if (handRef.current) observer.observe(handRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="products-section" id="shop" ref={handRef}>
      <div className="products-overlay" />

      <div className="products-hand-wrapper">
        <img
          src={handImg}
          alt="Coffee beans in hands"
          className={`products-hand-img ${visible ? 'hand-animate' : ''}`}
        />
      </div>

      <div className="products-content">
        <div className="product-card product-card-left">
          <h3 className="product-title">Coffee Beans</h3>
          <p className="product-desc">
            Coffee beans are the seeds of the Coffea plant, carefully grown, harvested, and processed to deliver
            the rich, aromatic brew we love. At Heart and Bean, our coffee beans are cultivated with passion and care,
            ensuring exceptional quality and flavor in every cup.
          </p>
          <button className="btn-viewshop">View Shop</button>
        </div>
        <div className="product-card product-card-right">
          <h3 className="product-title">Coffee Gift Sets</h3>
          <p className="product-desc">
            Explore the Heart and Bean Coffee Gift Shop, a curated collection of thoughtful and delightful gifts
            for coffee lovers. From premium coffee beans to beautifully designed accessories, each item is
            crafted to bring joy and enhance the coffee experience.
          </p>
          <button className="btn-viewshop">View Shop</button>
        </div>
      </div>
    </section>
  );
}