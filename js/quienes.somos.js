//quienes somos: alert de usuario registrado con exito cuando da click en ingresar 

const usuario=document.getElementById("usuario")
const contraseña=document.getElementById("contraseña")
const form=document.getElementById("formulario")
const btnIngreso=document.getElementById("ingreso")
const dom=document.getElementById("infoDeIngreso")
const btnLimpiar= document.getElementById ("limpiar")

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

let user = document.getElementById("exampleInputUsuario1"); 
let pass= document.getElementById("exampleInputPassword1");
let btn = document.getElementById ("ingreso"); 
let limpiar= document.getElementById ("limpiar");

btn.addEventListener("click", () => {
    console.log("Registrando usuario")
   localStorage.setItem ("usuario1", JSON.stringify(user.value))
   localStorage.setItem ("contraseña1", JSON.stringify (pass.value))
})

limpiar.addEventListener ("click", () =>{
    localStorage.removeItem (user)
})

















