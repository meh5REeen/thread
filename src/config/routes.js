import { business } from './business.js';

const b = business.brandName;

// Single source of truth for navigation, page titles, meta and sitemap.
export const routes = [
  { path: '/', nav: 'Home', title: `${b} - Business in ${business.country}`, description: `${b} is a business based in ${business.country}. Learn about our services and how to contact us.` },
  { path: '/about', nav: 'About', title: `About Us - ${b}`, description: `About ${b}: who we are, what we do, and how to reach us.` },
  { path: '/services', nav: 'Services', title: `Services - ${b}`, description: `An overview of the services offered by ${b}.` },
  { path: '/contact', nav: 'Contact', title: `Contact - ${b}`, description: `Contact ${b} by email or through our contact form.` },
  { path: '/privacy-policy', title: `Privacy Policy - ${b}`, description: `How ${b} collects, uses, stores and protects personal information, including Instagram data.` },
  { path: '/terms', title: `Terms of Service - ${b}`, description: `The terms that apply to the use of ${b} services and this website.` },
  { path: '/data-deletion', title: `Data Deletion Instructions - ${b}`, description: `How to request deletion of your personal data held by ${b}, including data received via Instagram.` },
];

export const navRoutes = routes.filter((r) => r.nav);
export const legalRoutes = [
  { path: '/privacy-policy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms of Service' },
  { path: '/data-deletion', label: 'Data Deletion' },
];
