import { business, isSet } from '../config/business.js';
import Val, { MailLink } from './Val.jsx';

export default function ContactDetails() {
  return (
    <dl className="details">
      <dt>Business name</dt>
      <dd><Val v={business.legalName} />{business.brandName !== business.legalName && <> (trading as {business.brandName})</>}</dd>
      <dt>Email</dt>
      <dd><MailLink email={business.email} /></dd>
      {isSet(business.phone) && (<><dt>Phone</dt><dd><Val v={business.phone} /></dd></>)}
      {isSet(business.address) && (<><dt>Address</dt><dd><Val v={business.address} /></dd></>)}
      <dt>Country</dt>
      <dd>{business.country}</dd>
    </dl>
  );
}
