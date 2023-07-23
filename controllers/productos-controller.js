import { productoServicios } from "../Services/productos.js";
const crearNuevaLinea = (name, imagen, price, id, description) => {
  const card = document.createElement("section");
  const contenido = `
        <a href="productos.html?id:${id}"><img src="${imagen}"
            alt="${name}"></a>
        <h5>${name}</h5>
        <p>$${price}</p>
        <a href="productos.html?id:${id}">Ver producto</a><br>
        <a class="btn-editar">Editar</a><br>
        <button class="btn-eliminar" type="button" id="${id}">Eliminar</button>`;

  card.innerHTML = contenido;
  card.dataset.id = id;

  const btn = card.querySelector("button");
  btn.addEventListener("click", () => {
    const id = btn.id;
    productoServicios
      .eliminarCliente(id)
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((err) => alert("Ocurrió un error"));
  });

  return card;
};

const productos = document.querySelector("[data-producto]");

const http = new XMLHttpRequest();

http.open("GET", "http://localhost:3000/producto");

http.send();

http.onload = () => {
  const data = JSON.parse(http.response);
  console.log(data);
  data.forEach((producto) => {
    const nuevaLinea = crearNuevaLinea(
      producto.name,
      producto.imagen,
      producto.price,
      producto.id,
      producto.description

    );
    productos.appendChild(nuevaLinea)
  });
};
