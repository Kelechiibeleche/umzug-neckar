import "./Process.css";

import {
  MessageSquareText,
  ClipboardCheck,
  CalendarDays,
  Truck,
} from "lucide-react";

function Process() {
  const steps = [
    {
      number: "01",
      title: "Anfrage senden",
      text: "Kontaktieren Sie uns telefonisch, per WhatsApp oder über unser Anfrageformular.",
      icon: MessageSquareText,
    },
    {
      number: "02",
      title: "Angebot erhalten",
      text: "Wir prüfen Ihren Auftrag und erstellen ein transparentes, individuelles Angebot.",
      icon: ClipboardCheck,
    },
    {
      number: "03",
      title: "Termin vereinbaren",
      text: "Gemeinsam finden wir einen passenden Termin für Ihren Umzug oder Transport.",
      icon: CalendarDays,
    },
    {
      number: "04",
      title: "Entspannt umziehen",
      text: "Unser Team kümmert sich zuverlässig und sorgfältig um die Durchführung.",
      icon: Truck,
    },
  ];

  return (
    <section className="process" id="ablauf">
      <div className="container">
        <div className="process-heading">
          <span className="eyebrow">So funktioniert's</span>

          <h2>
            Einfach zum <span>stressfreien Umzug</span>
          </h2>

          <p>
            In vier einfachen Schritten von der ersten Anfrage bis zum
            erfolgreichen Umzug.
          </p>
        </div>

        <div className="timeline">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="timeline-step" key={step.number}>
                <div className="timeline-top">
                  <div className="timeline-icon">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  {index < steps.length - 1 && (
                    <div className="timeline-line"></div>
                  )}
                </div>

                <span className="timeline-number">{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;
