import { useState } from 'react';
import { business, isPlaceholder, isSet } from '../config/business.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Real validation + honest submission:
 *  - if business.formEndpoint is set, POSTs JSON to it;
 *  - otherwise builds a mailto: link and says so (nothing is "sent" by us).
 * variant: 'contact' | 'deletion'
 */
export default function RequestForm({ variant = 'contact' }) {
  const isDeletion = variant === 'deletion';
  const to = isDeletion ? business.dataDeletionEmail : business.email;
  const hasEndpoint = isSet(business.formEndpoint);
  const canMail = !isPlaceholder(to);

  const [values, setValues] = useState({ name: '', email: '', username: '', message: '', confirm: false });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', text: '' });

  const set = (k) => (e) =>
    setValues((v) => ({ ...v, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  function validate() {
    const e = {};
    if (!values.name.trim()) e.name = 'Please enter your name.';
    if (!values.email.trim()) e.email = 'Please enter your email address.';
    else if (!EMAIL_RE.test(values.email.trim())) e.email = 'Please enter a valid email address.';
    if (isDeletion) {
      if (!values.username.trim()) e.username = 'Please enter your Instagram username.';
      if (!values.confirm) e.confirm = 'Please confirm that you are requesting deletion of your own data.';
    } else if (values.message.trim().length < 10) {
      e.message = 'Please write a message of at least 10 characters.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  const subject = isDeletion ? 'Data deletion request' : `Message from ${values.name.trim() || 'website visitor'}`;
  const body = [
    `Name: ${values.name.trim()}`,
    `Contact email: ${values.email.trim()}`,
    isDeletion && `Instagram username: ${values.username.trim().replace(/^@/, '')}`,
    '',
    isDeletion ? `Additional details: ${values.message.trim() || '-'}` : values.message.trim(),
  ].filter((l) => l !== false).join('\n');

  async function onSubmit(ev) {
    ev.preventDefault();
    if (!validate()) {
      setStatus({ state: 'error', text: 'Please correct the highlighted fields.' });
      return;
    }
    if (hasEndpoint) {
      setStatus({ state: 'sending', text: 'Sending...' });
      try {
        const res = await fetch(business.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ type: variant, ...values, subject }),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus({ state: 'ok', text: 'Your request was submitted. We will reply to the email address you provided.' });
      } catch {
        setStatus({ state: 'error', text: `We could not submit the form. Please email us directly at ${to}.` });
      }
    } else if (canMail) {
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ state: 'ok', text: 'Your email app should now open with the message prepared. Nothing is sent until you press Send in your email app.' });
    }
  }

  const field = (id, label, props = {}, Tag = 'input') => (
    <div className="field">
      <label htmlFor={`${variant}-${id}`}>{label}</label>
      <Tag
        id={`${variant}-${id}`}
        value={values[id]}
        onChange={set(id)}
        aria-invalid={errors[id] ? 'true' : undefined}
        aria-describedby={errors[id] ? `${variant}-${id}-err` : undefined}
        {...props}
      />
      {errors[id] && <p className="err" id={`${variant}-${id}-err`}>{errors[id]}</p>}
    </div>
  );

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {!hasEndpoint && (
        <p className="form-note">
          This form does not store anything on our servers. Submitting it opens your email app with a
          prepared message addressed to {canMail ? <a href={`mailto:${to}`}>{to}</a> : 'our team'}; you then
          send it from your own email account.
        </p>
      )}
      {field('name', 'Your name', { type: 'text', autoComplete: 'name', required: true })}
      {field('email', 'Your email address', { type: 'email', autoComplete: 'email', required: true })}
      {isDeletion && field('username', 'Instagram username', { type: 'text', placeholder: '@username', required: true })}
      {field(
        'message',
        isDeletion ? 'Additional details (optional)' : 'Message',
        { rows: 5, required: !isDeletion },
        'textarea'
      )}
      {isDeletion && (
        <div className="field check">
          <input
            id="deletion-confirm"
            type="checkbox"
            checked={values.confirm}
            onChange={set('confirm')}
            aria-invalid={errors.confirm ? 'true' : undefined}
          />
          <label htmlFor="deletion-confirm">
            I am the owner of this Instagram account (or authorised to act for them) and I request deletion of
            my personal data.
          </label>
          {errors.confirm && <p className="err">{errors.confirm}</p>}
        </div>
      )}
      <button className="btn" type="submit" disabled={status.state === 'sending' || (!hasEndpoint && !canMail)}>
        {hasEndpoint ? 'Submit' : 'Prepare email'}
      </button>
      {!hasEndpoint && !canMail && (
        <p className="err">The recipient email address has not been configured yet.</p>
      )}
      <p className={`status status-${status.state}`} role="status" aria-live="polite">{status.text}</p>
    </form>
  );
}
