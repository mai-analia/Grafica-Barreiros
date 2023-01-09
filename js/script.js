//TERCERA PREENTREGA (DOM- EVENTOS - STORAGE - JSON)

//quienes somos: alert de usuario registrado con exito cuando da click en ingresar 

const usuario=document.getElementById("usuario")
const contraseña=document.getElementById("contraseña")
const form=document.getElementById("formulario")
const btnIngreso=document.getElementById("ingreso")
const dom=document.getElementById("infoDeIngreso")

function inner() {
    dom.innerHTML= `
    <div class="alert alert-success" role="alert">
    <h5> Usuario registrado con éxito. \nBienvenidos a Gráfica Barreiro's!! </h5>
    </div>
    `
};

btnIngreso.addEventListener ("click", function (e)  {
    inner();
})



//JSON Y STORAGE: carrito de compras
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

let opcionesProductosStg=JSON.stringify (opcionesProductos);

//almacena objeto opciones productos en el local storage
localStorage.setItem ("objetoProductos", opcionesProductosStg);

//recuperando el objeto opciones productos del local storage
let datosStorage=localStorage.setItem("objetoProductos");

let objetoProductosConv=JSON.parse (datosStorage);






//contacto prevent default
const form2=document.getElementById("formulario2")
form2.addEventListener ("enviar", validacion)
function validacion (e) {
    e.preventDefault()
}

const btnEnviar=document.getElementById("btn-enviar")

btnEnviar.onclick=()=>{
    preventDefault()
};

msj.addEventListener ("click", function (e)  {
    msjParaEnviar();
}) 