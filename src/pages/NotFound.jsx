import { Link } from 'react-router-dom';
import { PageHeader } from '../components/Section.jsx';

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page not found" intro="The page you are looking for does not exist." />
      <section className="section">
        <div className="wrap">
          <Link className="btn" to="/">Back to home</Link>
        </div>
      </section>
    </>
  );
}
