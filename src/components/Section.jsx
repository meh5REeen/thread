export function PageHeader({ title, intro }) {
  return (
    <section className="page-header">
      <div className="wrap">
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </section>
  );
}

export function Section({ title, intro, children, tone }) {
  return (
    <section className={`section${tone ? ` section-${tone}` : ''}`}>
      <div className="wrap">
        {title && <h2 className="section-title">{title}</h2>}
        {intro && <p className="lead">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function Doc({ children }) {
  return (
    <section className="section">
      <div className="wrap doc">{children}</div>
    </section>
  );
}
