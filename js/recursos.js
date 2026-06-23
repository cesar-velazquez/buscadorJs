
// contenedor-elementos Html
const tituloElemento = document.getElementById('titulo');
const contenedorElemento = document.getElementById('contenedor-elementos');
const BASE_URL = "buscador.json";
// const userName = localStorage.getItem('nameUser');


console.log("goodines");
//Función para traer los datos del .JSON
async function getInformation() {
    try {
        const data = await fetch(BASE_URL);
        const response = await data.json();
        if (response) {
            tituloElemento.style.display = "none";
        }
        response.forEach(resp => {
            const div = document.createElement('div');
            const titulo = document.createElement('h2');
            const p = document.createElement('p');
            const openResource = document.createElement('a');

            div.classList.add("design-tarjet");
            titulo.classList.add('title-tarjet');
            openResource.classList.add('openResource')
            openResource.setAttribute("href", resp.siteweb);
            openResource.target = "_blank";

            div.appendChild(titulo);
            div.appendChild(p);
            div.appendChild(openResource);

            titulo.textContent = resp.titulo;
            p.textContent = resp.descripcion;
            openResource.textContent = "Abrir";

            contenedorElemento.appendChild(div);
            // listaElemento.innerHTML += `<div class="design-tarjet">${resp.titulo}</div>`;
        });

    } catch (error) {
        console.log("Error al cargar los datos")
    }
}



// if (userName != undefined) {    
// console.log(typeof(showInfo));
// console.log("aquí está:", userName)
getInformation();
// }
