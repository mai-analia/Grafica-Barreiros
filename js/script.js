/* ////segunda preentrega

//registrarse
let nombreUsuario=prompt ("Crear nombre de usuario");
let contraseña=prompt("Crear contraseña");

function registro (){ 
    alert("Usuario registrado con éxito. \nBienvenidos a Gráfica Barreiro's!!");
};

registro();

//carrito de compras

let opcionesProductos=[
    {
        id:1,
        producto: "Box pan dulce",
        precio: 130,
    },
    {
        id:2,
        producto: "Box cupcakes sin interior",
        precio: 155,
    },
    {
        id:3,
        producto: "Bombonera Rosa",
        precio: 70,
    },
    {
        id:4,
        producto: "Box torta alta",
        precio: 155,
    },
    {
        id:5,
        producto: "Bombonera oro",
        precio: 100,
    },
    {
        id:6,
        producto: "Box multiuso",
        precio: 152,
    },
    {
        id:7,
        producto: "Box cupcakes x6",
        precio: 175,
    },
    {
        id:8,
        producto: "Box macarrons",
        precio: 95,
    },
    {
        id:9,
        producto: "Box valijita",
        precio: 140,
    },
]

let buscar;
let i=0;
const newCarrito =[];
while (i<opcionesProductos.length) {
let opcionesCarrito=parseInt(prompt("Seleccione el número del producto que quiere agregar al carrito de compras: \n1- Box pan dulce. \n2- Box cupcakes sin interior. \n3- Bombonera rosa. \n4- Box torta alta. \n5- Bombonera oro. \n6- Box multiuso. \n7- Box cupcakes x6. \n8- Box macarrons. \n9- Box valijita. \n Presiona x para finalizar."));
buscar=opcionesProductos.find (opcionesProductos=>opcionesProductos.id==opcionesCarrito)
console.log(buscar);
newCarrito.push (buscar);
alert (i++);
}
 
console.log(newCarrito);  */



//TERCERA PREENTREGA (DOM- EVENTOS - STORAGE - JSON)
let box= {ID: 1, nombre: "box torta alta", precio: 120};
let productos = `ID: ${box.ID}, Nombre: ${box.nombre} - Precio: ${box.precio} `;
console.log(productos);

//plantilla literal con innerHTML
let boxs= {ID: 1, nombre: "box torta alta", precio: 120};

let contenedor=document.createElement ("div");

contenedor.innerHTML= `
<h5>ID: ${boxs.ID}</h5>
<p> Producto: ${boxs.nombre}</p>
<span>Precio: $ ${boxs.precio}</span>
`;

/* //agrego a body
document.body.appendChild(contenedor);
console.log(boxs); */

//formulario
let rellenarFormulario = document.getElementById("formulario");
rellenarFormulario.addEventListener ("submit", validar);










  
 















