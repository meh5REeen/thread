/**
 * CENTRAL BUSINESS CONFIGURATION
 * ------------------------------------------------------------------
 * Edit ONLY this file to change business details across the whole site.
 *
 * Any value written like  '[SOMETHING IN CAPITALS]'  is an UNRESOLVED
 * PLACEHOLDER. It is rendered on the site as a highlighted yellow tag so it
 * cannot be mistaken for real information, and `npm run build` prints a list
 * of every placeholder that is still left.
 *
 * Do not invent details. If something does not apply, remove it (set to '')
 * and the site will hide it.
 */

export const business = {
  // ---- Identity ----------------------------------------------------
  legalName: '[LEGAL BUSINESS NAME]', // exactly as on your registration documents
  brandName: 'Thread and Co',
  country: 'Pakistan',
  address: '[BUSINESS ADDRESS]', // set to '' if you do not want to publish one
  websiteUrl: 'https://YOUR-DOMAIN.com', // no trailing slash

  // ---- Contact -----------------------------------------------------
  email: 'aaishzubair554@gmail.com',
  privacyEmail: 'aaishzubair554@gmail.com',
  dataDeletionEmail: 'aaishzubair554@gmail.com',
  phone: '[BUSINESS PHONE]', // set to '' to hide
  /**
   * Optional: a form-backend URL (e.g. Formspree, Getform, your own API) that
   * accepts a JSON POST. If left empty, the forms open the visitor's email app
   * with a pre-filled message instead - and the page says so honestly.
   */
  formEndpoint: '',

  // ---- Social links (set to '' to hide) ----------------------------
  social: {
    instagram: '', // e.g. 'https://instagram.com/yourhandle'
    facebook: '',
    linkedin: '',
  },

  // ---- Homepage / About copy ---------------------------------------
  tagline: 'Clothing and Fashion Brand',
  heroHeadline: 'Everyday Style, Thoughtfully Chosen.',
  description:
    'Thread and Co is a clothing and fashion brand based in Pakistan, offering apparel for customers who appreciate style, comfort, and versatile clothing. We aim to make discovering and choosing clothing simple through a straightforward shopping experience and helpful customer support.',
  overview:
    'Thread and Co is a Pakistan-based clothing and fashion brand focused on offering apparel to customers. Our aim is to provide a simple and accessible way for people to explore clothing options, learn about available products, and get assistance when making their choices.',
  aboutExtra:
    'We believe that shopping for clothing should be straightforward. Through our brand, we aim to make discovering apparel and connecting with customers an easy experience.',
  whatWeDo:
    'Thread and Co offers clothing and apparel, and helps customers explore available products and get assistance with their questions and shopping experience.',

  /** Actual services/products. */
  services: [
    { title: 'Apparel and Clothing', description: 'Discover clothing and apparel through Thread and Co. We aim to offer styles that make it easier for customers to find clothing suited to their preferences.' },
    { title: 'Fashion and Style Selection', description: 'Explore available clothing options and find pieces that suit your personal style and everyday needs.' },
    { title: 'Customer Assistance', description: 'We help customers with product inquiries, information about available items, and assistance with their shopping experience.' },
  ],

  /** "How we help our customers" - 3 short steps or points. */
  howWeHelp: [
    { title: 'Explore Our Collection', description: 'Customers can explore the clothing and apparel available through Thread and Co and discover products that match their preferences.' },
    { title: 'Find the Right Product', description: 'Customers can review available product information and contact us if they have questions before making a purchase.' },
    { title: 'Get Customer Support', description: 'We assist customers with product-related inquiries and questions about their shopping experience.' },
  ],

  // ---- Privacy policy facts (must match what your app REALLY does) --
  privacy: {
    lastUpdated: '[POLICY LAST UPDATED DATE]',
    /** Does your app send message content to an AI/automation provider? */
    usesAi: true,
    aiProviders: '[AI PROVIDER NAMES, e.g. the AI service(s) you use]',
    hostingProviders: '[HOSTING / DATABASE PROVIDER NAMES]',
    otherProcessors: '', // e.g. 'email delivery provider X' - optional
    /** What is stored. Edit to match your real data practices. */
    storesMessages: true,
    retentionPeriod: '[RETENTION PERIOD, e.g. 90 days]',
    deletionResponseTime: '[DELETION RESPONSE TIME, e.g. 30 days]',
    minimumAge: '[MINIMUM AGE, e.g. 13]',
    dataStorageLocation: '[DATA STORAGE LOCATION / COUNTRY]',
  },

  /**
   * While true, the legal pages show yellow "owner to confirm" notes.
   * Set to false once you have verified every statement. The build warns
   * while this is still true.
   */
  showReviewNotes: true,
};

export const PLACEHOLDER_RE = /\[[A-Z0-9][^\]]*\]/;
export const isPlaceholder = (v) => typeof v === 'string' && PLACEHOLDER_RE.test(v);
export const isSet = (v) => typeof v === 'string' ? v.trim() !== '' : Boolean(v);
