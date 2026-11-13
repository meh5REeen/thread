import { business, isPlaceholder } from '../config/business.js';

/** Renders a config value; unresolved placeholders get a loud highlight. */
export default function Val({ v }) {
  return isPlaceholder(v) ? (
    <mark className="ph" title="Placeholder - replace it in src/config/business.js">{v}</mark>
  ) : (
    <>{v}</>
  );
}

export function MailLink({ email }) {
  return isPlaceholder(email) ? <Val v={email} /> : <a href={`mailto:${email}`}>{email}</a>;
}

/** Yellow "owner must confirm" note; hidden when showReviewNotes is false. */
export function ConfirmNote({ children }) {
  if (!business.showReviewNotes) return null;
  return (
    <p className="confirm-note" role="note">
      <strong>Owner to confirm:</strong> {children}
    </p>
  );
}
