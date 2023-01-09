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
    localStorage.setItem("usuario", usuario.value)
    localStorage.setItem("contraseña", contraseña.value)
})


//productos: cambiar imagen cuando pasa el mousse

box=document.querySelector(".box-o-pan-dulce")

box.onmouseover=()=>{
    box.style.backgroundImage='url("../recursos/logo.jpeg")';
}


//carrito de compras
const cards= document.querySelectorAll(".card")




//contacto prevent default

const btnEnviar=document.getElementById("btn-enviar")

btnEnviar.onclick=()=>{
    preventDefault()
};
