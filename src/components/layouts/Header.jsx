import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="contenedor header__inner">
        <h1 className="header__logo">Sazón</h1>
        <nav className="header__nav">
          <a href="#inicio" className="header__link header__link--activo">Inicio</a>
          <a href="#catalogo" className="header__link">Catálogo</a>
          <a href="#recetas" className="header__link">Recetas</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;