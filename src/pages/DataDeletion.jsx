import { Link } from 'react-router-dom';
import { business } from '../config/business.js';
import { PageHeader, Doc } from '../components/Section.jsx';
import Val, { MailLink, ConfirmNote } from '../components/Val.jsx';
import RequestForm from '../components/RequestForm.jsx';

export default function DataDeletion() {
  const p = business.privacy;
  return (
    <>
      <PageHeader
        title="Data Deletion Instructions"
        intro={`How to ask ${business.brandName} to delete the personal data we hold about you, including data received through Instagram.`}
      />
      <Doc>
        <ConfirmNote>
          Confirm that you can really carry out each step described here (including the response time)
          before submitting this URL to Meta.
        </ConfirmNote>

        <h2>How to request deletion</h2>
        <ol>
          <li>
            Send an email to <MailLink email={business.dataDeletionEmail} /> with the subject
            "Data deletion request", <strong>or</strong> use the request form below.
          </li>
          <li>Include the details listed in the next section so we can find your data.</li>
          <li>We will confirm that we received your request, verify it, and then delete your data.</li>
        </ol>

        <h2>Information to include</h2>
        <ul>
          <li>Your Instagram username (the account you used to message us).</li>
          <li>Your Instagram user ID, if you know it (optional).</li>
          <li>The email address we should reply to.</li>
          <li>A statement that you are asking for deletion of your personal data.</li>
        </ul>
        <p>We will only use this information to locate and delete your data and to reply to you.</p>

        <h2>What we delete</h2>
        <p>
          On a verified request we delete the personal data we hold that is linked to you, including your
          Instagram user ID, username, and the messages you exchanged with us, from our systems
          {p.usesAi && <> and ask our service providers to delete copies they hold on our behalf</>}.
          We may keep limited information where the law requires it, or a minimal record that a
          deletion request was made so that we can show it was handled.
        </p>

        <h2>What happens after you submit a request</h2>
        <ol>
          <li><strong>Acknowledgement:</strong> we confirm by email that we received your request.</li>
          <li><strong>Verification:</strong> we may ask you to confirm that you control the Instagram account, to prevent anyone else from deleting your data.</li>
          <li><strong>Deletion:</strong> we delete the data within <Val v={p.deletionResponseTime} /> of verifying the request.</li>
          <li><strong>Confirmation:</strong> we email you to confirm that deletion has been completed.</li>
        </ol>

        <h2>Also remove our app's access on Instagram</h2>
        <p>
          You can separately revoke our access from your Instagram account settings (Apps and websites).
          This stops future data from being shared with us but does not by itself delete data already
          stored, so please still send a deletion request. See our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link> for how we handle data.
        </p>

        <h2 id="form">Deletion request form</h2>
        <RequestForm variant="deletion" />
      </Doc>
    </>
  );
}
