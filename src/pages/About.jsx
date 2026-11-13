import { Link } from 'react-router-dom';
import { business } from '../config/business.js';
import { PageHeader, Section } from '../components/Section.jsx';
import ContactDetails from '../components/ContactDetails.jsx';
import Val from '../components/Val.jsx';

export default function About() {
  return (
    <>
      <PageHeader title="About us" intro={`Who ${business.brandName} is and what we do.`} />
      <Section title="Business overview">
        <p className="prose"><Val v={business.overview} /></p>
        <p className="prose">{business.aboutExtra}</p>
        <dl className="details">
          <dt>Legal business name</dt>
          <dd><Val v={business.legalName} /></dd>
          <dt>Brand name</dt>
          <dd>{business.brandName}</dd>
          <dt>Country</dt>
          <dd>{business.country}</dd>
        </dl>
      </Section>
      <Section title="What we do" tone="alt">
        <p className="prose"><Val v={business.whatWeDo} /></p>
        <h3>Our services</h3>
        <ul className="list">
          {business.services.map((s, i) => (
            <li key={i}><strong><Val v={s.title} /></strong> &ndash; <Val v={s.description} /></li>
          ))}
        </ul>
        <p><Link className="more" to="/services">Services in detail &rarr;</Link></p>
      </Section>
      <Section title="Contact information">
        <ContactDetails />
      </Section>
    </>
  );
}
