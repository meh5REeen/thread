import { Link } from 'react-router-dom';
import { business } from '../config/business.js';
import { PageHeader, Doc } from '../components/Section.jsx';
import Val, { MailLink, ConfirmNote } from '../components/Val.jsx';

export default function Terms() {
  return (
    <>
      <PageHeader title="Terms of Service" intro={<>Last updated: <Val v={business.privacy.lastUpdated} /></>} />
      <Doc>
        <ConfirmNote>
          Template text. Adapt it to your real services and have it reviewed by a qualified legal adviser,
          including the governing-law clause for {business.country}.
        </ConfirmNote>

        <h2>1. Introduction</h2>
        <p>
          These Terms of Service ("Terms") govern your use of this website and the services provided by{' '}
          <Val v={business.legalName} />, trading as {business.brandName} ("we", "us"), based in{' '}
          {business.country}. By using our website or services you agree to these Terms. If you do not
          agree, please do not use them.
        </p>

        <h2>2. Description of services</h2>
        <p>We provide the following services (see the <Link to="/services">Services</Link> page for details):</p>
        <ul>
          {business.services.map((s, i) => (<li key={i}><Val v={s.title} /></li>))}
        </ul>
        <p>We may change, add or discontinue features of our services from time to time.</p>

        <h2>3. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>use our services for anything unlawful, fraudulent, harassing, or abusive;</li>
          <li>send spam, malware, or content that infringes the rights of others;</li>
          <li>attempt to gain unauthorised access to, disrupt, or overload our systems;</li>
          <li>misrepresent your identity or affiliation.</li>
        </ul>

        <h2>4. User responsibilities</h2>
        <p>
          You are responsible for the accuracy of the information you give us and for keeping your own
          accounts secure. You must have the right to share any content you send to us. You are also
          responsible for complying with the terms of any third-party platform you use to reach us.
        </p>

        <h2>5. Service availability</h2>
        <p>
          We aim to keep our services available but do not guarantee uninterrupted or error-free
          operation. Services may be unavailable because of maintenance, technical problems, or events
          outside our control, including outages of third-party platforms.
        </p>

        <h2>6. Third-party platforms and integrations</h2>
        <p>
          Some of our services work through third-party platforms such as Instagram and Meta. Those
          platforms are operated by their owners and are governed by their own terms and policies, which
          you must also follow. We are not responsible for the availability, changes, or conduct of
          third-party platforms. Our handling of personal information is described in our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>

        <h2>7. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by applicable law, our services are provided "as is" and we are
          not liable for indirect, incidental or consequential losses arising from their use. Nothing in
          these Terms excludes liability that cannot be excluded by law.
        </p>

        <h2>8. Changes to these Terms</h2>
        <p>
          We may update these Terms. The updated version will be posted on this page with a revised date,
          and continued use of our services after that means you accept the changes.
        </p>

        <h2>9. Contact</h2>
        <p>
          Questions about these Terms: <MailLink email={business.email} />.
        </p>
      </Doc>
    </>
  );
}
