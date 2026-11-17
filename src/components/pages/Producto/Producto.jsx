import { useState } from "react";
import ProductCard from "../../ProductCard/ProductCard";
import "./Producto.css";

const productosIniciales = [
  { id: 1, nombre: "Salchicha Zenú", marca: "Zenú", descripcion: "Clásica para toda la familia.", stock: 25, emoji: "🌭" },
  { id: 2, nombre: "Galletas Noel", marca: "Noel", descripcion: "Crujientes y deliciosas.", stock: 12, emoji: "🍪" },
  { id: 3, nombre: "Pasta Doria", marca: "Doria", descripcion: "Perfecta para tus recetas.", stock: 0, emoji: "🍝" },
  { id: 4, nombre: "Café Colcafé", marca: "Colcafé", descripcion: "Aroma para empezar el día.", stock: 40, emoji: "☕" },
];

const marcas = ["Todas", "Zenú", "Noel", "Doria", "Colcafé"];

const Producto = () => {
  const [productos] = useState(productosIniciales);
  const [marcaActiva, setMarcaActiva] = useState("Todas");

  const productosFiltrados =
    marcaActiva === "Todas"
      ? productos
      : productos.filter((p) => p.marca === marcaActiva);

  return (
    <main className="contenedor producto" id="catalogo">
      <section className="producto__hero">
        <p className="producto__etiqueta">Grupo Nutresa</p>
        <h2>Módulo Catálogo</h2>
        <p>Base lista para desarrollar historias de usuario del catálogo.</p>
      </section>

      <div className="producto__filtros">
        {marcas.map((marca) => (
          <button
            key={marca}
            className={
              marca === marcaActiva
                ? "producto__filtro producto__filtro--activo"
                : "producto__filtro"
            }
            onClick={() => setMarcaActiva(marca)}
          >
            {marca}
          </button>
        ))}
      </div>

      <p className="producto__estado" role="status">
        Mostrando {productosFiltrados.length} producto(s)
      </p>

      <section className="producto__grid">
        {productosFiltrados.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </section>
    </main>
  );
};

export default Producto;