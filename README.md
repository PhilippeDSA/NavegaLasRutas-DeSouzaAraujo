# Proyecto Final: Navega Las Rutas

## Descripción
"Navega Las Rutas" es una Single Page Application (SPA) de e-commerce desarrollada en **React**, que permite a los usuarios explorar un catálogo de productos, visualizar detalles de cada uno, agregarlos al carrito y finalizar compras. Los datos se almacenan en **Firebase Firestore**, incluyendo la gestión del stock y el registro de órdenes de compra.

El proyecto implementa conceptos clave de React como **Virtual DOM, Hooks, Context API** y navegación **Single Page** con **React Router**.

---

## Funcionalidades

### Listado de Productos
- Catálogo dinámico de productos cargados desde Firebase.
- Filtrado por categorías.
- Navegación al detalle del producto.

### Detalle de Productos
- Muestra información completa del producto: nombre, precio, descripción, stock, categoría.
- Componente `ItemCount` para seleccionar la cantidad a agregar al carrito.
- Oculta el selector de cantidad una vez que el producto es agregado al carrito.

### Carrito de Compras
- Visualización de productos agregados, cantidades y subtotales.
- Botón para vaciar carrito.
- Icono de carrito en el `NavBar` con la cantidad total de unidades.
- Persistencia del estado del carrito mediante **Context API**.

### Checkout
- Formulario de confirmación de compra con validación de datos.
- Actualización de stock en Firestore al confirmar la orden.
- Generación de un ID de orden que se muestra al usuario.

### Experiencia de Usuario
- Renderizado condicional para mensajes de “carrito vacío”, “producto sin stock”, etc.
- Navegación SPA sin recarga de página.
- Responsive y amigable para el usuario.

---

## Tecnologías Utilizadas
- **React** (Componentes funcionales, Hooks, Context API)
- **React Router DOM** (Navegación SPA)
- **Firebase Firestore** (Base de datos en la nube)
- **Vite** (Herramienta de build)
- **CSS** (Estilado de componentes)
- **Netlify** (Hosting del proyecto)

---

## Estructura de Componentes

App
│
├─ NavBar
│ └─ CartWidget
│
├─ ItemListContainer
│ └─ ItemList
│ └─ Item
│
├─ ItemDetailContainer
│ └─ ItemDetail
│ └─ ItemCount
│
├─ Cart
│ └─ CartItem
│
└─ Checkout
## Instalación y Ejecución

1. Clonar el repositorio:

```gitclone https://github.com/PhilippeDSA/NavegaLasRutas-DeSouzaAraujo.git "```


2. Clonar el repositorio:
cd NavegaLasRutas-DeSouzaAraujo
npm install
3. Configurar FireBase:

Crear un archivo .env o firebaseConfig.js con tus credenciales privadas de Firebase.

Nunca subir este archivo con credenciales reales a GitHub.

4. Ejecutar en modo desarrollo:
npm run dev

5. Construir la produccion:
npm run build

Enlace al deploy:
https://conpalta.netlify.app


Autor
Philippe De Souza Araujo

