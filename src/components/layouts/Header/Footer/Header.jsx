const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">Sazón</h1>
      <nav className="header__nav">
        <a href="#inicio">Inicio</a>
        <a href="#catalogo">Catálogo</a>
        <a href="#recetas">Recetas</a>
      </nav>
    </header>
  );
};

export default Header;