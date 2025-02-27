let imagenes = document.querySelectorAll("img");

let btnAll =  document.getElementById("btn-all");
btnAll.addEventListener("click", () => {
    mostarTodo();
})
//lista de bool para activar/desactivar filtros
let boolFiltro = {
    arboles: false,
    planetas: false,
    halo: false,
    autos:  false,
}

let imgPorCategoria = {
    arboles:[],
    planetas:[],
    halo:[],
    autos:[],
    sinCategoria:[]
}
function mostarTodo (){
    for (const imagen of imagenes) {
        imagen.classList.remove("ocultar")
        imagen.classList.add("mostrar");
        btnAll.style.background = "blue";
    }
}

function filtarImagenes (){
    for (const imagen of imagenes) {
        switch (imagen.alt) {
            case "arboles":
                imgPorCategoria.arboles.push(imagen);           
                break;
            case "planetas":
                imgPorCategoria.planetas.push(imagen);
                break;
            case "halo":
                imgPorCategoria.halo.push(imagen);
                break;
            case "autos":
                imgPorCategoria.autos.push(imagen);    
            default:
                imgPorCategoria.sinCategoria.push(imagen);
                break;
        }
    }
}
function aplicarColor (bool,btn){
    if(bool){btn.style.background = "blue"}
    else{btn.style.background = ""};
}

function aplicarFiltro (){
    for (const imagen of imagenes) {
        imagen.classList.add("ocultar");
        imagen.classList.remove("mostrar");
    }

    let todosActivos = Object.values(boolFiltro).every(bool => bool === true);
    let todosDesactivados = Object.values(boolFiltro).every(bool => bool === false);

    if(todosActivos){mostarTodo()};
    if(todosDesactivados){mostarTodo()};


    if (boolFiltro.arboles) {
        for (const imagen of imgPorCategoria.arboles) {
            imagen.classList.add("mostrar");
            imagen.classList.remove("ocultar")
            btnAll.style.background = "";
        }
    }
    if (boolFiltro.planetas) {
        for (const imagen of imgPorCategoria.planetas) {
            imagen.classList.add("mostrar");
            imagen.classList.remove("ocultar")
            btnAll.style.background = "";
        }
    }
    if (boolFiltro.halo) {
        for (const imagen of imgPorCategoria.halo) {
            imagen.classList.add("mostrar");
            imagen.classList.remove("ocultar")
            btnAll.style.background = "";
        }
    }
    if (boolFiltro.autos) {
        for (const imagen of imgPorCategoria.autos) {
            imagen.classList.add("mostrar");
            imagen.classList.remove("ocultar")
            btnAll.style.background = "";
        }
    }
}

let btnArboles = document.getElementById("btn-arboles");
btnArboles.addEventListener("click", () => {
    boolFiltro.arboles = !boolFiltro.arboles; // Alterna el estado del filtro
    aplicarColor(boolFiltro.arboles,btnArboles);
    aplicarFiltro(boolFiltro.arboles,btnArboles);
});

let btnPlanetas = document.getElementById("btn-planetas");
btnPlanetas.addEventListener("click", () => {
    boolFiltro.planetas = !boolFiltro.planetas; // Alterna el estado del filtro
    aplicarColor(boolFiltro.planetas,btnPlanetas);
    aplicarFiltro();
});
let btnHalo = document.getElementById("btn-halo");
btnHalo.addEventListener("click", () => {
    boolFiltro.halo = !boolFiltro.halo; // Alterna el estado del filtro
    aplicarColor(boolFiltro.halo,btnHalo);
    aplicarFiltro();
});
let btnAutos = document.getElementById("btn-autos");
btnAutos.addEventListener("click", () => {
    boolFiltro.autos = !boolFiltro.autos; // Alterna el estado del filtro
    aplicarColor(boolFiltro.autos,btnAutos);
    aplicarFiltro();
});

window.onload = filtarImagenes();
window.onload = mostarTodo();