import { productoServicios } from "../Services/productos.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  console.log(id)

  if (id === null) {
    window.location.href = "/HTML/error.html";
  }

  const imagen = document.querySelector("[data-url]");
  const name = document.querySelector("[data-name]");
  const price = document.querySelector("[data-price]");
  const description = document.querySelector("[data-description]");

  try {
    const producto = await productoServicios.detalleCliente(id);
    if (producto.imagen && producto.name && producto.price && producto.description) {
      imagen.value = producto.imagen;
      name.value = producto.name;
      price.value = producto.price;
      description.value = producto.description;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log("Error");
  }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {

  evento.preventDefault();

  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const imagen = document.querySelector("[data-url]").value;
  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;
  const description = document.querySelector("[data-description]").value;
  productoServicios.actualizarCliente(imagen, name, price, description, id).then(() => {
    window.location.href = "../HTML/producto-editado.html";
  });
});
