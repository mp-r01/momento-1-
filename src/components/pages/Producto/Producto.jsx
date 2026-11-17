import Header from "../../layouts/Header/Footer/Header";
import Footer from "../../layouts/Header/Footer/Footer";
import "../../../assets/estilos.css";

const Producto = () => {
  return (
    <>
      <Header />

      <main className="contenedor">
        <h2>Módulo Catálogo</h2>
        <p>Base lista para desarrollar historias de usuario del catálogo.</p>
        <div id="catalogo-estado" className="mensaje-estado" role="status"></div>
      </main>

      <Footer />
    </>
  );
};

export default Producto;