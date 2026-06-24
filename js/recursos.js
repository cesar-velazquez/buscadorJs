const tituloElemento = document.getElementById('titulo');
const BASE_URL = "buscador.json";

//Función para traer los datos del .JSON
let dataComplete = [];

async function getInformation() {
    try {
        const response = await fetch(BASE_URL);
        dataComplete = await response.json();
        titulo.style.display = "none";
        renderResults(dataComplete);
    } catch (error) {
        console.log("Error al cargar los datos")
    }
}

function renderResults(data) {
    const contenedorElemento = document.getElementById('contenedor-elementos');
    contenedorElemento.innerHTML = '';
    if (data.length === 0) {
        contenedorElemento.innerHTML = `<div class="non-information">
        <p class="title-tarjet">No se han encontrado resultados para tu búsqueda</p>
        </div>`;
        return
    }

    data.forEach(resp => {
        const div = document.createElement('div');
        const titulo = document.createElement('h2');
        const p = document.createElement('p');
        const openResource = document.createElement('a');

        div.classList.add("design-tarjet");
        titulo.classList.add('title-tarjet');
        openResource.classList.add('openResource')
        openResource.setAttribute("href", resp.siteweb);
        openResource.target = "_blank";

        titulo.textContent = resp.titulo;
        p.textContent = resp.descripcion;
        openResource.textContent = "Abrir";

        div.appendChild(titulo);
        div.appendChild(p);
        div.appendChild(openResource);
        contenedorElemento.appendChild(div);
    });
}


//BUSCAR Info:
let inputSearch = document.getElementById('inputSearch');

inputSearch.addEventListener('input', (e) => {
    const wordSearch = inputSearch.value.toLowerCase();
    const resultResearch = dataComplete.filter(res => res.titulo?.toLowerCase().includes(wordSearch));
    renderResults(resultResearch);

})

getInformation();