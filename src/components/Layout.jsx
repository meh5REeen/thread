import { useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { business, isSet } from '../config/business.js';
import { routes, navRoutes, legalRoutes } from '../config/routes.js';
import Logo from './Logo.jsx';
import Val, { MailLink } from './Val.jsx';

function Meta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const clean = pathname.replace(/\/+$/, '') || '/';
    const r = routes.find((x) => x.path === clean);
    document.title = r ? r.title : `Page not found - ${business.brandName}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && r) meta.setAttribute('content', r.description);
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  const year = new Date().getFullYear();
  const socials = Object.entries(business.social).filter(([, url]) => isSet(url));

  return (
    <>
      <Meta />
      <a className="skip" href="#main">Skip to main content</a>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link to="/" className="brand" aria-label={`${business.brandName} home`}>
            <Logo />
          </Link>
          <nav aria-label="Main navigation">
            <ul className="nav">
              {navRoutes.map((r) => (
                <li key={r.path}>
                  <NavLink to={r.path} end={r.path === '/'}>{r.nav}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <Logo light />
            <p className="muted-light">
              {business.tagline} &middot; {business.country}
            </p>
          </div>
          <nav aria-label="Site">
            <h2>Company</h2>
            <ul>
              {navRoutes.map((r) => (
                <li key={r.path}><Link to={r.path}>{r.nav}</Link></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Legal">
            <h2>Legal</h2>
            <ul>
              {legalRoutes.map((r) => (
                <li key={r.path}><Link to={r.path}>{r.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <h2>Contact</h2>
            <ul>
              <li><MailLink email={business.email} /></li>
              {isSet(business.phone) && <li><Val v={business.phone} /></li>}
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name[0].toUpperCase() + name.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="wrap footer-bottom">
          &copy; {year} <Val v={business.legalName} />. All rights reserved.
        </div>
      </footer>
    </>
  );
}
