 // --- VARIABLES ---
 let usuario = document.getElementById("usuario"); // Input usuario
 let contrasena = document.getElementById("contrasena"); // Input contraseña
 let recordarDom = document.getElementById ("recordarDom"); // Recordar DOM label
 
 const iniciarSesionButton = document.getElementById('ingreso');  // Boton "iniciar sesion"
 
 
 // --- FUNCIONES ---
 
 
   // Valida que los campos del formulario esten completos
 function validarFormulario() {
     let usuarioValue = usuario.value;
     let contrasenaValue = contrasena.value;
 
      // Validamos que los campos de texto no estén vacíos
      if (usuarioValue == "" || contrasenaValue == "") {
        recordarDom.innerHTML= `
         <div class="alert alert-success" role="alert">
         <h5> Error. Usuario no valido! </h5>
         </div>
         `
         
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, complete todos los campos!',
          })

       return false;  
     } else {
         recordarDom.innerHTML= `
         <div class="alert alert-success" role="alert">
         <h5> Usuario registrado con éxito. \nBienvenidos a Gráfica Barreiro's!! </h5>
         </div>
         `  

         Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'Bienvenidos a Gráfica Barreiros!!',
          })

         // Si todos los campos están completos, se puede enviar el formulario
         return true;
     }
 }
 
 
   // Guarda el valor de los inputs en el localStorage
 const guardarDatosEnLocalStorage = () => {
   let usuarioValue = usuario.value;
   let contrasenaValue = contrasena.value;
 
   localStorage.setItem('usuario', usuarioValue);
   localStorage.setItem('contrasena', contrasenaValue);
 }
 
 
 
   // Actualiza los datos del localStorage cada vez que cambie el valor de los imputs
 usuario.addEventListener('change', () => guardarDatosEnLocalStorage()); // cambios en input usuario
 contrasena.addEventListener('change', () => guardarDatosEnLocalStorage()); // cambios en input contraseña
 
 
   // Crea un objeto llamado "data" y guarda los valores de Usuario y Contraseña
const recordarme = () => {
   let data = {
     usuario: usuario.value,
     contrasena: usuario.value,
   };
 
   let dataJson = JSON.stringify(data);
 
   localStorage.setItem("userData", dataJson);
 
   return true;
 }
 
 // ----- EJECUCION -----
 
   // Ejecuta las funciones al hacer click al botton "iniciar sesion"
 iniciarSesionButton.addEventListener('click', () =>{
   validarFormulario();
   recordarme();
 })



















