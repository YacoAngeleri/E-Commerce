import { productoServicios } from "../Services/productos.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const imagen = document.querySelector("[data-url]").value;
  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;
  const description = document.querySelector("[data-description]").value;

  console.log(imagen)
  console.log(name)
  console.log(price)
  console.log(description)

  productoServicios.crearProducto(imagen, name, price, description)
  .then(() => {
    window.location.href = "/HTML/producto-agregado.html";
  })
  .catch((err) => console.log(err));

});
