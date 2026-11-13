import { business } from '../config/business.js';

/** Simple monogram + brand name. Swap for an <img> if you have a real logo. */
export default function Logo({ light = false }) {
  return (
    <span className={`logo${light ? ' logo-light' : ''}`}>
      <svg viewBox="0 0 64 64" width="32" height="32" aria-hidden="true" focusable="false">
        <rect width="64" height="64" rx="14" fill={light ? '#fff' : '#0b2545'} />
        <path d="M18 20h28v7H35v21h-7V27H18z" fill={light ? '#0b2545' : '#fff'} />
      </svg>
      <span>{business.brandName}</span>
    </span>
  );
}
