import { Link } from 'react-router-dom';
import { business } from '../config/business.js';
import { PageHeader, Section } from '../components/Section.jsx';
import Val from '../components/Val.jsx';

export default function Services() {
  return (
    <>
      <PageHeader title="Services" intro={`What ${business.brandName} offers.`} />
      <Section>
        <div className="cards">
          {business.services.map((s, i) => (
            <article className="card" key={i}>
              <h2 className="card-title"><Val v={s.title} /></h2>
              <p><Val v={s.description} /></p>
            </article>
          ))}
        </div>
      </Section>
      <section className="cta">
        <div className="wrap">
          <h2>Interested in working with us?</h2>
          <p>Tell us what you need and we will get back to you by email.</p>
          <Link className="btn btn-light" to="/contact">Contact us</Link>
        </div>
      </section>
    </>
  );
}
