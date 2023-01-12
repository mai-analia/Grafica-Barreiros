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

btnIngreso.addEventListener ("click", function () {
    inner();
})
 


//guardar datos usuario y contraseña
//stringify: convierte en string formato json
let usuarioJson=JSON.stringify (usuario);
let contraseñaJson=JSON.stringify (contraseña);

//almacena objeto opciones productos en el local storage
localStorage.setItem ("usuario", "maite");
localStorage.setItem ("contraseña", 1234);

//recuperando el objeto opciones productos del local storage
let datoUsuario=localStorage.getItem("usuario");
let datoContraseña=localStorage.getItem("contraseña");

/* //convierte string formato json a objeto 
let datoParseUsuario=JSON.parse (datoUsuario);
let datoParseContraseña=JSON.parse (datoContraseña); */
