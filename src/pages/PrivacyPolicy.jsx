import { Link } from 'react-router-dom';
import { business, isSet } from '../config/business.js';
import { PageHeader, Doc } from '../components/Section.jsx';
import Val, { MailLink, ConfirmNote } from '../components/Val.jsx';

export default function PrivacyPolicy() {
  const p = business.privacy;
  return (
    <>
      <PageHeader title="Privacy Policy" intro={<>Last updated: <Val v={p.lastUpdated} /></>} />
      <Doc>
        <ConfirmNote>
          This policy is a template written to be adapted. Every statement must match what your
          application and business really do. Review each section, correct anything inaccurate, and have it
          checked by a qualified legal adviser before publishing. Remove these notes by setting
          <code> showReviewNotes: false</code> in <code>src/config/business.js</code>.
        </ConfirmNote>

        <h2 id="intro">1. Introduction and business identity</h2>
        <p>
          This Privacy Policy explains how <Val v={business.legalName} />, trading as {business.brandName}
          {' '}("we", "us", "our"), based in {business.country}, collects, uses, stores and shares personal
          information when you visit our website, contact us, or interact with us through Instagram and
          related services we operate ("the Services").
        </p>
        <p>
          For privacy matters you can reach us at <MailLink email={business.privacyEmail} />.
        </p>

        <h2 id="collect">2. Information we collect</h2>
        <ul>
          <li><strong>Information you give us directly:</strong> your name, email address and the content of any message you send through our contact form or by email.</li>
          <li><strong>Information received through Instagram</strong> when you interact with our Instagram business account (see sections 3 and 4).</li>
          <li><strong>Technical information:</strong> basic technical data such as IP address, browser type and pages visited may be recorded by our hosting provider in server logs for security and reliability.</li>
        </ul>
        <ConfirmNote>Add or remove items to match reality (for example analytics, cookies, order or customer records). Do not list data you do not collect, and do not omit data you do.</ConfirmNote>

        <h2 id="instagram">3. Instagram account information</h2>
        <p>
          When you message or otherwise interact with our Instagram professional account, Meta Platforms
          provides us, through the Instagram API, with limited information about you. This may include
          your Instagram-scoped user ID and your Instagram username, and, where Meta makes it available
          to us, your public profile name. We use this information to identify the conversation and to
          respond to you.
        </p>
        <p>
          We do not receive your Instagram password. Our use of information obtained through Instagram is
          limited to the purposes described in this policy and is subject to Meta's platform terms and
          policies.
        </p>

        <h2 id="messages">4. Messages and other information you send through Instagram</h2>
        <p>
          We receive the content of messages you send to our Instagram account (for example text and,
          where relevant, links or media you choose to send) together with related details such as the
          time of the message.
          {p.storesMessages
            ? ' We store these messages, together with the associated Instagram user ID and username, so that we can continue conversations, respond to you and keep a record of our communication.'
            : ' We process these messages in order to respond to you and do not keep them beyond what is needed to handle the conversation.'}
        </p>
        <ConfirmNote>Set <code>storesMessages</code> in the config to match your system. If you store messages, this page must say so (it does when set to true).</ConfirmNote>

        <h2 id="processing">5. How information is processed</h2>
        <p>
          Information is received by our systems when you contact us, processed to generate or send a
          reply, and{p.storesMessages ? ' stored in our database' : ' handled only for as long as needed'}.
          Processing is carried out on infrastructure provided by our service providers described in section 8.
        </p>

        <h2 id="why">6. Why we collect and use information</h2>
        <ul>
          <li>To respond to your messages and enquiries.</li>
          <li>To provide, operate and improve our Services.</li>
          <li>To maintain the security of our systems and prevent abuse or fraud.</li>
          <li>To comply with legal obligations and to handle privacy and deletion requests.</li>
        </ul>
        <p>We do not sell your personal information.</p>

        <h2 id="ai">7. Automated systems and AI</h2>
        {p.usesAi ? (
          <>
            <p>
              We use automated systems, including artificial-intelligence services, to help read and
              respond to messages. This means the content of your messages (and, where needed to generate
              a relevant reply, related conversation context) may be sent to our AI service provider(s):
              {' '}<Val v={p.aiProviders} />. Automated replies may be generated without a person reviewing
              each message. If you would prefer to speak to a person, you can contact us by email at{' '}
              <MailLink email={business.email} />.
            </p>
            <ConfirmNote>Confirm whether the AI provider may use message content for its own model training under the plan you use, and state it here accurately.</ConfirmNote>
          </>
        ) : (
          <p>We do not use artificial-intelligence services to process messages received through Instagram.</p>
        )}

        <h2 id="sharing">8. Third-party service providers and data sharing</h2>
        <p>We share personal information only as needed to operate the Services, with:</p>
        <ul>
          <li><strong>Meta Platforms (Instagram):</strong> the platform through which messages are exchanged. Meta processes your data under its own privacy policy.</li>
          <li><strong>Hosting and database providers:</strong> <Val v={p.hostingProviders} />, which store and process data on our behalf.</li>
          {p.usesAi && <li><strong>AI service providers:</strong> <Val v={p.aiProviders} />, which process message content to generate responses.</li>}
          {isSet(p.otherProcessors) && <li><strong>Other providers:</strong> <Val v={p.otherProcessors} />.</li>}
          <li><strong>Authorities or advisers</strong> where we are legally required to disclose information, or to protect our rights.</li>
        </ul>
        <p>These providers act on our behalf and are expected to handle data only to provide their services to us. Because they process data outside Instagram itself, information is not limited to Meta's systems.</p>

        <h2 id="security">9. Data storage and security</h2>
        <p>
          Data is stored with the providers named above, in or on servers located in:{' '}
          <Val v={p.dataStorageLocation} />. We use reasonable technical and organisational measures to
          protect personal information, such as access controls and encrypted connections (HTTPS). No
          method of transmission or storage is completely secure, so we cannot guarantee absolute security.
        </p>
        <ConfirmNote>Only list security measures you actually have in place.</ConfirmNote>

        <h2 id="retention">10. Data retention</h2>
        <p>
          We keep personal information only for as long as needed for the purposes above. Messages and
          associated Instagram identifiers are retained for <Val v={p.retentionPeriod} />, unless we are
          required to keep them longer by law or you ask us to delete them sooner. After that they are
          deleted or anonymised.
        </p>

        <h2 id="rights">11. Your rights and privacy requests</h2>
        <p>
          Depending on where you live, you may have rights to ask us to access the personal information
          we hold about you, correct it, delete it, restrict or object to certain processing, or receive
          a copy of it. To make a request, email <MailLink email={business.privacyEmail} />. We may need
          to verify your identity before acting on a request. We respond within a reasonable time and aim
          to do so within <Val v={p.deletionResponseTime} />.
        </p>

        <h2 id="deletion">12. How to request deletion of your data</h2>
        <p>
          You can ask us to delete the personal information we hold about you, including your Instagram
          user ID, username and message history, at any time. Follow the steps on our{' '}
          <Link to="/data-deletion">Data Deletion Instructions</Link> page, or email{' '}
          <MailLink email={business.dataDeletionEmail} /> with the subject "Data deletion request".
          You can also remove our access to your Instagram information from your Instagram account settings
          under apps and websites; this does not by itself delete data we have already stored, so please
          also send us a deletion request.
        </p>

        <h2 id="children">13. Children's privacy</h2>
        <p>
          Our Services are not directed at children under <Val v={p.minimumAge} />, and we do not
          knowingly collect personal information from them. If you believe a child has provided us with
          personal information, contact <MailLink email={business.privacyEmail} /> and we will delete it.
        </p>

        <h2 id="updates">14. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The "Last updated" date at the top shows when it
          was last revised. Material changes will be posted on this page.
        </p>

        <h2 id="contact">15. Contact us</h2>
        <p>
          <Val v={business.legalName} /> ({business.brandName})<br />
          {isSet(business.address) && <><Val v={business.address} /><br /></>}
          {business.country}<br />
          Email: <MailLink email={business.privacyEmail} />
        </p>
      </Doc>
    </>
  );
}
