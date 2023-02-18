//carrito de compras
let opcionesProductos=[
    {
        id:1,
        producto: "Box pan dulce",
        cantidad: 1,
        precio: 130,
        medidas:"14x14x17",
        img: "../img/box-o-pan-dulce.jpeg",
    },
    {
        id:2,
        producto: "Box cupcakes sin interior",
        cantidad: 1,
        precio: 155,
        medidas:"27x17x10",
        img: "../img/cupcakes-sin-interior.jpeg",
    },
    {
        id:3,
        producto: "Bombonera Rosa",
        cantidad: 1,
        precio: 70,
        medidas:"18,5x11,5x4",
        img: "../img/bombonera-rosa.jpeg",
    },
    {
        id:4,
        producto: "Box torta alta",
        cantidad: 1,
        precio: 155,
        medidas:"30x30x30",
        img: "../img/torta-alta.jpeg",
    },
    {
        id:5,
        producto: "Bombonera oro",
        cantidad: 1,
        precio: 100,
        medidas:"15,5x8,5x3",
        img: "../img/bombonera-oro.jpeg",
    },
    {
        id:6,
        producto: "Box multiuso",
        cantidad: 1,
        precio: 152,
        medidas:"30x20x7,5",
        img: "../img/multiuso.jpeg",
    },
    {
        id:7,
        producto: "Box cupcakes x6",
        cantidad: 1,
        precio: 175,
        medidas:"27x17x10",
        img: "../img/cupcakes.jpeg",
    },
    {
        id:8,
        producto: "Box macarrons",
        cantidad: 1,
        precio: 95,
        medidas:"5x5x21",
        img: "../img/macarrons.jpeg",
    },
    {
        id:9,
        producto: "Box valijita",
        cantidad: 1,
        precio: 140,
        medidas:"17x15,5x9,5",
        img: "../img/valijita.jpeg",
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

let modal=document.querySelector(".modal-body");

let carrito=[]; 

function mostrarCarrito() {
    let insertar="";
    carrito.forEach((prod)=>{
        const {img, producto,cantidad, precio}=prod //desestructuracion
        insertar += `
        <div>
        <img style="width: 100px;" src="${img}"/>
        <h3>${producto}</h3>
        <p>Precio:$${precio}</p> 
        <p>Cantidad:${cantidad}</p> 
        </div>
        `;
    })
    modal.innerHTML=insertar;
}

function agregarProducto(id) {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto Agregado',
        showConfirmButton: false,
        timer: 1500
    })

    const item = opcionesProductos.find((prod) => prod.id === id);
    carrito.push(item);
    
    mostrarCarrito();
} 


let compra = document.getElementById ("comprar");

compra.addEventListener ("click", () => {
    Swal.fire({
        title: 'Quieres guardar tu compra',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No guardar`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Guardado!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Los cambios no fueron guardados', '', 'info')
        }
      })
})



//AJAX Y FETCH
//await
const lista = document.querySelector("#listado");

const pedirProductos = async() => {
    const resp= await fetch("../js/data.json"); //pensar la peticion como si estuvieramos en el html
    const data=await resp.json ();

    data.forEach ((productos) =>{
        const li =document.createElement("li")
        li.innerHTML= `
        <h4>${productos.producto}</h4>
        <h7> $ ${productos.precio}</h7>
        <p>${productos.medidas}</p>
        `
        lista.append(li)
    });
};

pedirProductos();













