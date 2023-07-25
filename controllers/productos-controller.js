import { productoServicios } from "../Services/productos.js";
const crearNuevaLinea = (name, imagen, price, id, description) => {
  const card = document.createElement("section");
  const contenido = `
        <a href="Productos/${id}.html"><img src="${imagen}"
            alt="${name}"></a>
        <h5>${name}</h5>
        <p>$${price}</p>
        <a href="Productos/${id}.html">Ver producto <i class="bi bi-eye"></i></a><br>
        <a class="btn-editar" href="../HTML/editar-producto.html?id=${id}">Editar <i class="bi bi-pencil-square"></i></a><br>
        <button class="btn-eliminar" type="button" id="${id}">Eliminar <i class="bi bi-trash"></i></button>`;

  card.innerHTML = contenido;
  card.dataset.id = id;

  const btn = card.querySelector("button");
  btn.addEventListener("click", () => {
    const id = btn.id;
    productoServicios
      .eliminarCliente(id)
      .then((respuesta) => {
        console.log(respuesta);
        location.reload();
      })
      .catch((err) => alert("Ocurrió un error"));
  });

  return card;
};

const productos = document.querySelector("[data-producto]");

const http = new XMLHttpRequest();

http.open("GET", "https://64bf2af85ee688b6250d251b.mockapi.io/api/productos") /* */;

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
