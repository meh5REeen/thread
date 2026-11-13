import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';

export { business, isPlaceholder, PLACEHOLDER_RE } from './config/business.js';
export { routes } from './config/routes.js';

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
