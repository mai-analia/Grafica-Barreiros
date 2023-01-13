//carrito de compras
let opcionesProductos=[
    {
        id:1,
        producto: "Box pan dulce",
        cantidad: 1,
        precio: 130,
        medidas:"14x14x17",
        img: "../recursos/box-o-pan-dulce.jpeg",
    },
    {
        id:2,
        producto: "Box cupcakes sin interior",
        cantidad: 1,
        precio: 155,
        medidas:"27x17x10",
        img: "../recursos/cupcakes-sin-interior.jpeg",
    },
    {
        id:3,
        producto: "Bombonera Rosa",
        cantidad: 1,
        precio: 70,
        medidas:"18,5x11,5x4",
        img: "../recursos/bombonera-rosa.jpeg",
    },
    {
        id:4,
        producto: "Box torta alta",
        cantidad: 1,
        precio: 155,
        medidas:"30x30x30",
        img: "../recursos/torta-alta.jpeg",
    },
    {
        id:5,
        producto: "Bombonera oro",
        cantidad: 1,
        precio: 100,
        medidas:"15,5x8,5x3",
        img: "../recursos/bombonera-oro.jpeg",
    },
    {
        id:6,
        producto: "Box multiuso",
        cantidad: 1,
        precio: 152,
        medidas:"30x20x7,5",
        img: "../recursos/multiuso.jpeg",
    },
    {
        id:7,
        producto: "Box cupcakes x6",
        cantidad: 1,
        precio: 175,
        medidas:"27x17x10",
        img: "../recursos/cupcakes.jpeg",
    },
    {
        id:8,
        producto: "Box macarrons",
        cantidad: 1,
        precio: 95,
        medidas:"5x5x21",
        img: "../recursos/macarrons.jpeg",
    },
    {
        id:9,
        producto: "Box valijita",
        cantidad: 1,
        precio: 140,
        medidas:"17x15,5x9,5",
        img: "../recursos/valijita.jpeg",
    },
]

let contenedor= document.querySelector('#contenedor'); 

opcionesProductos.forEach((prod)=>{
    const {id, producto,cantidad, medidas, precio, img}=prod //desestructuracion
    contenedor.innerHTML += `
   <div class="card mt-3" style="width: 18rem;">
   <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
   <div class="card-body">
     <h5 class="card-title">${producto}</h5>
     <p class="card-text">Precio: ${precio}</p>
     <p class="card-text">Cantidad: ${cantidad}</p>
     <p class="card-text">Medidas: ${medidas}</p>
     <button id="comprar" class="btn btn-danger" onclick="agregarProducto(${id})">Comprar Producto</button>
   </div>
 </div>
   `;
}); 

let carrito=[]; 

function agregarProducto(id) {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto Agregado',
        showConfirmButton: false,
        timer: 1500
      })
    console.log(id); 
} 

const agregar = (id) => {
    const item = agregarProducto.find((prod) => prod.id === id);
    carrito.push(item);
  
    mostrarCarrito();
}; 




//json y storage productos
let opcionesProductosStg=JSON.stringify (opcionesProductos);

//almacena objeto opciones productos en el local storage
localStorage.setItem ("objetoProductos", opcionesProductosStg);

//recuperando el objeto opciones productos del local storage
let datosStorage=localStorage.getItem("objetoProductos");

let objetoProductosConv=JSON.parse (datosStorage);


















