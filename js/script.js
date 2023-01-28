//TERCERA PREENTREGA (DOM- EVENTOS - STORAGE - JSON)

let h2 = document.getElementById ('saludo')

h2.innerText = localStorage.getItem('usuario1') 



//AJAX Y FETCH
//await
const lista = document.querySelector("#listado");

const pedirProductos = async() => {
    const resp= await fetch("/js/data.json"); //pensar la peticion como si estuvieramos en el html
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







