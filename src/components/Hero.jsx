import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Umzug Neckar</span>

            <h1>
              Ihr zuverlässiger Partner für
              <span> Umzüge & Entrümpelungen</span>
            </h1>

            <p>
              Professionelle Umzüge, Transporte und Entrümpelungen –
              zuverlässig, sorgfältig und unkompliziert.
            </p>

            <div className="hero-buttons">
              <a href="#kontakt" className="button button-primary">
                Kostenloses Angebot anfragen
              </a>

              <a href="tel:+490000000000" className="button button-secondary">
                Jetzt anrufen
              </a>
            </div>

            <div className="hero-points">
              <span>✓ Zuverlässig</span>
              <span>✓ Transparent</span>
              <span>✓ Flexibel</span>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              src={heroImage}
              alt="Umzug Neckar Umzugsservice"
              className="hero-image"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
