function Services() {
  const services = [
    {
      title: "Privatumzüge",
      text: "Zuverlässige und sorgfältige Umzüge für Wohnungen, Häuser und private Haushalte.",
    },
    {
      title: "Firmenumzüge",
      text: "Professionelle Umzüge für Büros, Praxen und Unternehmen mit möglichst wenig Ausfallzeit.",
    },
    {
      title: "Möbeltransport",
      text: "Sicherer Transport einzelner Möbelstücke und größerer Einrichtungsgegenstände.",
    },
    {
      title: "Montage & Demontage",
      text: "Fachgerechter Ab- und Aufbau von Möbeln für einen reibungslosen Umzug.",
    },
    {
      title: "Entrümpelung",
      text: "Schnelle und gründliche Entrümpelung von Wohnungen, Kellern, Garagen und weiteren Räumen.",
    },
    {
      title: "Transportservice",
      text: "Flexible Transportlösungen für kleinere und größere Aufträge.",
    },
  ];

  return (
    <section className="services" id="leistungen">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Unsere Leistungen</span>

          <h2>
            Alles rund um Ihren <span>Umzug</span>
          </h2>

          <p>
            Von der Planung bis zum Transport übernehmen wir die Arbeiten,
            die Ihren Umzug einfacher und stressfreier machen.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">✓</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;