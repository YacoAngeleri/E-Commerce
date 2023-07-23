//GET

const listaProductos = () => {
  fetch("http://localhost:3000/producto")
    .then((respuesta) => respuesta.json())
    .catch((error) => console.log(error));
};

//POST

const crearProducto = (imagen, name, price, description) => {
  return fetch("http://localhost:3000/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imagen, name, price, description, id: uuid.v4() }),
  });
};

//DELETE

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
  });
};

//Obtenemos la informacion del cliente

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

//PUT

const actualizarCliente = (imagen, name, price, description, id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imagen, name, price, description }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const productoServicios = {
  listaProductos,
  crearProducto,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};
