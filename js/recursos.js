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
        contenedorElemento.classList.remove('structureInfo');
        contenedorElemento.classList.add('notInfo');

        contenedorElemento.innerHTML = `<div class="non-information">
        <p class="title-tarjet">No se han encontrado resultados para tu búsqueda</p>
        </div>`;
        return;
    } else {
        data.forEach(resp => {
            const divMayor = document.createElement('div');
            const div = document.createElement('div');
            const titulo = document.createElement('h2');
            const p = document.createElement('p');
            const contenedorEnlaces = document.createElement('div');
            const openResource = document.createElement('a');
            const downloadResource = document.createElement('a');
            const imgDownload = document.createElement('img');

            
            div.classList.add("design-tarjet");
            titulo.classList.add('title-tarjet');
            contenedorEnlaces.classList.add('contenedor-enlaces');
            openResource.classList.add('openResource')                                
            openResource.setAttribute("href", resp.siteweb);
            openResource.target = "_blank";
            downloadResource.classList.add('downloadResource');
            downloadResource.setAttribute("href", resp.download);
            downloadResource.download = "";

            imgDownload.classList.add('imgDownload');                       
            imgDownload.setAttribute("src", "../img/download.png");
            imgDownload.setAttribute("alt", "Descargar");

            titulo.textContent = resp.titulo;
            p.textContent = resp.descripcion;
            openResource.textContent = "Abrir";            

            contenedorEnlaces.appendChild(downloadResource);
            contenedorEnlaces.appendChild(openResource);
            downloadResource.appendChild(imgDownload);

            div.appendChild(titulo);
            div.appendChild(p);
            div.appendChild(contenedorEnlaces);

            contenedorElemento.classList.add('structureInfo');
            contenedorElemento.classList.remove('notInfo');
            contenedorElemento.appendChild(div);

        });
        console.log(contenedorElemento);

    }
}


//BUSCAR Info:
let inputSearch = document.getElementById('inputSearch');

inputSearch.addEventListener('input', (e) => {
    const wordSearch = inputSearch.value.toLowerCase();
    const resultResearch = dataComplete.filter(res => res.titulo?.toLowerCase().includes(wordSearch));
    renderResults(resultResearch);

})

getInformation();