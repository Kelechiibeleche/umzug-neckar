import { Clock3, ShieldCheck, BadgeEuro, Handshake } from "lucide-react";

function About() {
  const benefits = [
    {
      title: "Zuverlässig & pünktlich",
      text: "Wir halten vereinbarte Termine ein und sorgen für einen reibungslosen Ablauf.",
      icon: Clock3,
    },
    {
      title: "Sorgfältiger Umgang",
      text: "Ihre Möbel und persönlichen Gegenstände werden sicher und sorgfältig behandelt.",
      icon: ShieldCheck,
    },
    {
      title: "Transparente Preise",
      text: "Klare Angebote ohne unnötige Überraschungen oder versteckte Kosten.",
      icon: BadgeEuro,
    },
    {
      title: "Persönlicher Service",
      text: "Wir beraten Sie individuell und finden die passende Lösung für Ihren Umzug.",
      icon: Handshake,
    },
  ];

  return (
    <section className="about" id="ueber-uns">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="eyebrow">Über uns</span>

          <h2>
            Ihr Umzug in <span>guten Händen</span>
          </h2>

          <p>
            Umzug Neckar steht für zuverlässige, sorgfältige und unkomplizierte
            Umzüge. Unser Ziel ist es, Ihnen so viel Arbeit wie möglich
            abzunehmen und Ihren Umzug von Anfang bis Ende angenehm zu
            gestalten.
          </p>

          <p>
            Ob Privatumzug, Firmenumzug, Möbeltransport oder Entrümpelung – wir
            kümmern uns professionell um Ihren Auftrag und gehen individuell auf
            Ihre Wünsche ein.
          </p>

          <a href="#kontakt" className="button button-primary">
            Jetzt Angebot anfragen
          </a>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article className="benefit-card" key={benefit.title}>
                <div className="benefit-icon">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
