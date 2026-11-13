import { Link } from 'react-router-dom';
import { business } from '../config/business.js';
import { Section } from '../components/Section.jsx';
import Val from '../components/Val.jsx';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <p className="eyebrow">{business.brandName} &middot; {business.country}</p>
          <h1><Val v={business.heroHeadline} /></h1>
          <p className="lead"><Val v={business.description} /></p>
          <div className="actions">
            <Link className="btn" to="/services">Our services</Link>
            <Link className="btn btn-ghost" to="/contact">Contact us</Link>
          </div>
        </div>
      </section>

      <Section title="Services" intro="What we offer.">
        <div className="cards">
          {business.services.map((s, i) => (
            <article className="card" key={i}>
              <h3><Val v={s.title} /></h3>
              <p><Val v={s.description} /></p>
            </article>
          ))}
        </div>
        <p><Link className="more" to="/services">View all services &rarr;</Link></p>
      </Section>

      <Section title={`About ${business.brandName}`} tone="alt">
        <p className="prose"><Val v={business.overview} /></p>
        <p className="prose">{business.aboutExtra}</p>
        <p><Link className="more" to="/about">Learn more about us &rarr;</Link></p>
      </Section>

      <Section title="How we help our customers">
        <ol className="steps">
          {business.howWeHelp.map((s, i) => (
            <li key={i}>
              <h3><Val v={s.title} /></h3>
              <p><Val v={s.description} /></p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="cta">
        <div className="wrap">
          <h2>Get in touch</h2>
          <p>Have a question about {business.brandName} or one of our products? We'd be happy to hear from you. Get in touch with us for assistance and inquiries.</p>
          <Link className="btn btn-light" to="/contact">Contact us</Link>
        </div>
      </section>
    </>
  );
}
