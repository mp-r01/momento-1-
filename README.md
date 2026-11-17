# Sazón · Recetario Digital (Momento 1)

Traslado del diseño estático a React + Vite, con componentes reutilizables
y datos estáticos manejados con estados locales (`useState`).

## Historia de usuario

**HU-01 · Catálogo de productos**
Como visitante del portal Sazón, quiero ver los productos del catálogo en
tarjetas y filtrarlos por marca, para encontrar rápidamente lo que busco.

**Criterios de aceptación**
- Se muestran tarjetas con nombre, marca, descripción y stock.
- Puedo filtrar por marca (Todas, Zenú, Noel, Doria, Colcafé).
- Los productos agotados se muestran diferenciados.

## Árbol de componentes

- `App` → `Header`, `Producto`, `Footer`
- `Producto` → `ProductCard` (reutilizable, recibe datos por props)

## Estructura

- `src/assets`: kit de marca global (`estilos.css`)
- `src/components/layouts`: Header y Footer
- `src/components/pages`: vistas (Producto)
- `src/components/ProductCard`: tarjeta reutilizable

## Ramas

`main`, `dev`, `feature/catalogo/HU-01-`

## Cómo ejecutar

    npm install
    npm run dev