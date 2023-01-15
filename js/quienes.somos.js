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

let user = document.getElementById("usuario"); 
let pass= document.getElementById("contraseña");
let btn = document.getElementById ("ingreso"); 

btn.addEventListener("click", () => {
    console.log("Registrando usuario")
   // acá hacés los dos setItem.
   localStorage.setItem ("usuario1", JSON.stringify(usuario.value));
   localStorage.setItem ("contraseña1", JSON.stringify (contraseña.value));
})










/* function set() {
    let usuarioJson=JSON.stringify (usuario)
    let contraseñaJson=JSON.stringify (contraseña)
}

set (localStorage.setItem);

let examplePassword= document.getElementById(exampleInputPassword1);
let exampleUsuario = document.getElementById(exampleInputUsuario1);

//almacena objeto opciones productos en el local storage
localStorage.getItem("usuario", exampleUsuario)
localStorage.getItem ("contraseña", examplePassword)


console.log(exampleInputUsuario1, exampleInputPassword1);
 */

/* 


//recuperando el objeto opciones productos del local storage
let datoUsuario=localStorage.getItem("usuario");
let datoContraseña=localStorage.getItem("contraseña");


    
let user = document.querySelector(".usuario.value")
    
let pass = document.querySelector(".contraseña.value")  */