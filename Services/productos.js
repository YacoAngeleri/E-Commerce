//GET

const listaProductos = () => {
  fetch("https://64bf2af85ee688b6250d251b.mockapi.io/api/productos")
    .then((respuesta) => respuesta.json())
    .catch((error) => console.log(error));
};

//POST

const crearProducto = (imagen, name, price, description) => {
  return fetch(`https://64bf2af85ee688b6250d251b.mockapi.io/api/productos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imagen, name, price, description, id: uuid.v4() }),
  });
};

//DELETE

const eliminarCliente = (id)=>{
  return fetch(`https://64bf2af85ee688b6250d251b.mockapi.io/api/productos/${id}`,{
      method: "DELETE",
  });
};


//Obtenemos la informacion del cliente

const detalleCliente = (id)=> {
  return fetch(`https://64bf2af85ee688b6250d251b.mockapi.io/api/productos/${id}`).then((respuesta) =>
    respuesta.json()
  )
};


//PUT

const actualizarCliente = (imagen, name, price, description, id) => {
  return fetch(`https://64bf2af85ee688b6250d251b.mockapi.io/api/productos/${id}`, {
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
