function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand">
          Umzug Neckar
        </a>

        <nav className="main-nav">
          <a href="#home">Startseite</a>
          <a href="#leistungen">Leistungen</a>
          <a href="#ueber-uns">Über uns</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <a href="#kontakt" className="header-button">
          Angebot anfragen
        </a>
      </div>
    </header>
  );
}

export default Header;
