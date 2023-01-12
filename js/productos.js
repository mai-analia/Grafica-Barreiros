//carrito de compras
let opcionesProductos=[
    {
        id:1,
        producto: "Box pan dulce",
        cantidad: 1,
        precio: 130,
        img: "../recursos/box-o-pan-dulce.jpeg",
    },
    {
        id:2,
        producto: "Box cupcakes sin interior",
        cantidad: 1,
        precio: 155,
        img: "../recursos/cupcakes-sin-interior.jpeg",
    },
    {
        id:3,
        producto: "Bombonera Rosa",
        cantidad: 1,
        precio: 70,
        img: "../recursos/bombonera-rosa.jpeg",
    },
    {
        id:4,
        producto: "Box torta alta",
        cantidad: 1,
        precio: 155,
        img: "../recursos/torta-alta.jpeg",
    },
    {
        id:5,
        producto: "Bombonera oro",
        cantidad: 1,
        precio: 100,
        img: "../recursos/bombonera-oro.jpeg",
    },
    {
        id:6,
        producto: "Box multiuso",
        cantidad: 1,
        precio: 152,
        img: "../recursos/multiuso.jpeg",
    },
    {
        id:7,
        producto: "Box cupcakes x6",
        cantidad: 1,
        precio: 175,
        img: "../recursos/cupcakes.jpeg",
    },
    {
        id:8,
        producto: "Box macarrons",
        cantidad: 1,
        precio: 95,
        img: "../recursos/macarrons.jpeg",
    },
    {
        id:9,
        producto: "Box valijita",
        cantidad: 1,
        precio: 140,
        img: "../recursos/valijita.jpeg",
    },
]

let contenedor= document.querySelector('#contenedor'); 

/* //agregado
let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");


document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito(); 

});

vaciarCarrito.addEventListener("click", () => {
  carrito.length = [];
  mostrarCarrito();
});

procesarCompra.addEventListener("click", () => {
  if (carrito.length === 0) {
    Swal.fire({
      title: "¡Tu carrito está vacio!",
      text: "Compra algo para continuar con la compra",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  } else {
    location.href = "compra.html";
    procesarPedido()

  }
});


//fin */





opcionesProductos.forEach((prod)=>{
    const {id, producto,cantidad, precio, img}=prod //desestructuracion
    contenedor.innerHTML += `
   <div class="card mt-3" style="width: 18rem;">
   <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
   <div class="card-body">
     <h5 class="card-title">${producto}</h5>
     <p class="card-text">Precio: ${precio}</p>
     <p class="card-text">Cantidad: ${cantidad}</p>
     <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
   </div>
 </div>
   `;
});




function agregarProducto(id) {
    console.log(id);
} 



/* //agregado
const agregarProducto = (id) => {
    const item = stockProductos.find((prod) => prod.id === id);
    carrito.push(item);
  
    mostrarCarrito();
  };
  

  
  const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body");
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      console.log(modalBody)
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      
      `;
    });



    if (carrito.length === 0) {
      console.log("Nada");
      modalBody.innerHTML = `
      <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
      `;
    } else {
      console.log("Algo");
    }
    carritoContenedor.textContent = carrito.length;
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  
    guardarStorage();
  };
  
  function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  
  function eliminarProducto(id) {
    const juegoId = id;
    carrito = carrito.filter((juego) => juego.id !== juegoId);
    mostrarCarrito();
  }
  function procesarPedido() {
    carrito.forEach((prod) => {
      console.log(carrito)
      const contenedorCompra = document.querySelector('#contenedorCompra')
      console.log(contenedorCompra);
      const { id, nombre, precio, desc, img, cantidad } = prod;
      const div = document.createElement("div");
      div.innerHTML += `
            <div class="modal-contenedor">
              <div>
              <img class="img-fluid img-carrito" src="${img}"/>
              </div>
              <div>
              <p>Producto: ${nombre}</p>
            <p>Precio: ${precio}</p>
            <p>Cantidad :${cantidad}</p>
            <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
              </div>
            </div>
            
        
            `;
      contenedorCompra.appendChild(div);
    });
  }

/// fin */











//json y storage productos
let opcionesProductosStg=JSON.stringify (opcionesProductos);

//almacena objeto opciones productos en el local storage
localStorage.setItem ("objetoProductos", opcionesProductosStg);

//recuperando el objeto opciones productos del local storage
let datosStorage=localStorage.getItem("objetoProductos");

let objetoProductosConv=JSON.parse (datosStorage);


















