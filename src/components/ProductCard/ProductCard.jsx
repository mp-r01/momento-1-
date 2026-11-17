import "./ProductCard.css";

const ProductCard = ({ nombre, marca, descripcion, stock, emoji }) => {
  const disponible = stock > 0;

  return (
    <article className="product-card">
      <div className="product-card__imagen">{emoji}</div>
      <span className="product-card__marca">{marca}</span>
      <h3 className="product-card__nombre">{nombre}</h3>
      <p className="product-card__descripcion">{descripcion}</p>
      <span
        className={
          disponible
            ? "product-card__stock"
            : "product-card__stock product-card__stock--agotado"
        }
      >
        {disponible ? `${stock} disponibles` : "Agotado"}
      </span>
    </article>
  );
};

export default ProductCard;