import { PageHeader, Section } from '../components/Section.jsx';
import ContactDetails from '../components/ContactDetails.jsx';
import RequestForm from '../components/RequestForm.jsx';

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact us" intro="Send us a message or reach us directly using the details below." />
      <Section>
        <div className="two-col">
          <div>
            <h2 className="section-title">Our details</h2>
            <ContactDetails />
          </div>
          <div>
            <h2 className="section-title">Send a message</h2>
            <RequestForm variant="contact" />
          </div>
        </div>
      </Section>
    </>
  );
}
