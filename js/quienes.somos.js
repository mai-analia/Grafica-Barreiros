//quienes somos: alert de usuario registrado con exito cuando da click en ingresar 

/* const usuario=document.getElementById("usuario").value
const contraseña=document.getElementById("contraseña").value */



/* const form=document.getElementById("formulario")
const btnIngreso=document.getElementById("ingreso") */





/* const dom=document.getElementById("infoDeIngreso")
const usuario=document.getElementById("usuario").value
const contrasena=document.getElementById("contraseña").value

btnIngreso.addEventListener ('click', (e)=> {
    e.preventDefault()
    
    let login = {
        usuario: usuario.value,
        contrasena: contrasena.value
    }

    console.log(login);
 */
   /*  if (login){
        dom.innerHTML= `
        <div class="alert alert-success" role="alert">
        <h5> Usuario registrado con éxito. \nBienvenidos a Gráfica Barreiro's!! </h5>
        </div>
        ` 
    }
    else {
        dom.innerHTML= `
        <div class="alert alert-success" role="alert">
        <h5> Error. Usuario no valido! </h5>
        </div>
        `
    } 
}) */

/* function inner() {

if (usuario == "Maite" && contrasena == "2407" || usuario === "Joel" && contrasena == "2602") {
    dom.innerHTML= `
    <div class="alert alert-success" role="alert">
    <h5> Usuario registrado con éxito. \nBienvenidos a Gráfica Barreiro's!! </h5>
    </div>
    `
    }
else {
        dom.innerHTML= `
        <div class="alert alert-success" role="alert">
        <h5> Error. Usuario no valido! </h5>
        </div>
        `
    }
}





btnIngreso.addEventListener ("click", function () {
    inner()
})



function limpiar (){
    const btnLimpiar= document.getElementById ("limpiar")
     if (usuario || contrasena){
        
     }
}

btnLimpiar.addEventListener ("click", function () {
    limpiar()
}) */











/* function inner() {
    dom.innerHTML= `
    <div class="alert alert-success" role="alert">
    <h5> Usuario registrado con éxito. \nBienvenidos a Gráfica Barreiro's!! </h5>
    </div>
    `
};

btnIngreso.addEventListener ("click", function () {
    inner()
})  */


 



//guardar datos usuario y contraseña

let user = document.getElementById("exampleInputUsuario1"); 
let pass= document.getElementById("exampleInputPassword1");
let btn = document.getElementById ("ingreso"); 
let limpiar= document.getElementById ("limpiar");
let dom=document.getElementById("infoDeIngreso") 

btn.addEventListener("click", () => {
   localStorage.setItem ("usuario1", JSON.stringify(user.value))
   localStorage.setItem ("contraseña1", JSON.stringify (pass.value))

    let login = {
        user: user.value,
        pass: pass.value
    }

    if (login){
        dom.innerHTML= `
        <div class="alert alert-success" role="alert">
        <h5> Usuario registrado con éxito. \nBienvenidos a Gráfica Barreiro's!! </h5>
        </div>
        ` 
    }
    else{
        dom.innerHTML= `
        <div class="alert alert-success" role="alert">
        <h5> Error. Usuario no valido! </h5>
        </div>
        `
    }
    


    limpiar.addEventListener ("click", () =>{
        localStorage.removeItem (login)
    })
})



















