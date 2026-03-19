import { useState } from 'react';
import './ConsumerInsights.css';

const reviews = [
  {
    name: 'Ethan Reid',
    photo: 'https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-0fd9bfff77835db6.png',
    review:
      '"I really love the overall aesthetic of the Heart and Bean website. The earthy tones and beautiful photos of the coffee farm instantly drew me in—it feels authentic and inviting. Navigating through the site was straightforward, but I noticed that the loading time for the product page was a bit slow on my phone.',
    stars: [
      'https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-884444353d860157.svg',
      'https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-27d20afdf090775c.svg',
      'https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-953b39be97b4a918.svg',
      'https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-c48f27a2de9b9368.svg',
      'https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-00a49cee2043fb70.svg',
    ],
  },
  {
    name: 'Caleb Vaughn',
    photo: 'https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-652691d78eb61eeb.png',
    review:
      '"The website looks beautiful and captures the coffee farm vibe perfectly. The earthy tones and high-quality images create a warm, inviting experience that kept me engaged. I loved the detailed product descriptions and would enjoy seeing more personal stories about the farm or the coffee-making process. Overall, it\'s a great experience, and I\'ll definitely return!"',
    stars: [
      'https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-b52b9382df96f29b.svg',
      'https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-365a9455bf45c9d6.svg',
      'https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-78c0b6a5bb90a0dd.svg',
      'https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-aa8c6f2947c8f8ea.svg',
      'https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-2e3b7bac388d3377.svg',
    ],
  },
];

export default function ConsumerInsights() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const review = reviews[current];
  const otherIdx = (current + 1) % reviews.length;
  const other = reviews[otherIdx];

  return (
    <section className="insights-section">
      <div className="insights-card">
        <h2 className="insights-title">Consumer Insights</h2>
        <div className="insights-reviews">
          <button className="nav-arrow left-arrow" onClick={prev} aria-label="Previous">
            <img src="https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-009c5430650b4980.svg" alt="prev" className="arrow-circle" />
          </button>

          <div className="review-pair">
            <div className="review-item">
              <img src={review.photo} alt={review.name} className="reviewer-photo" />
              <h4 className="reviewer-name">{review.name}</h4>
              <p className="review-text">{review.review}</p>
              <div className="review-stars">
                {review.stars.map((s, i) => (
                  <img key={i} src={s} alt="star" className="star-icon" />
                ))}
              </div>
            </div>
            <div className="review-item">
              <img src={other.photo} alt={other.name} className="reviewer-photo" />
              <h4 className="reviewer-name">{other.name}</h4>
              <p className="review-text">{other.review}</p>
              <div className="review-stars">
                {other.stars.map((s, i) => (
                  <img key={i} src={s} alt="star" className="star-icon" />
                ))}
              </div>
            </div>
          </div>

          <button className="nav-arrow right-arrow" onClick={next} aria-label="Next">
            <img src="https://cdn.codia.ai/figma/4m4FRFl7ReqcrYDfHoTY0L/img-73d03dbe2fcf7605.svg" alt="next" className="arrow-circle" />
          </button>
        </div>
      </div>
    </section>
  );
}
