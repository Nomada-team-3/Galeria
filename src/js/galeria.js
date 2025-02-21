let imagenes = document.querySelectorAll("img");

//boton para filtro de arboles
let btnArboles = document.getElementById("btn-arboles");
let filtroArboles = "arboles";
aplicarFitros(btnArboles,imagenes,filtroArboles);

//boton para filtro de planetas
let btnPlanetas = document.getElementById("btn-planetas")
let filtroPlanetas = "planetas";
aplicarFitros(btnPlanetas,imagenes,filtroPlanetas);

//boton para filtro de halo
let btnHalo = document.getElementById("btn-halo");
let filtroHalo = "halo"
aplicarFitros(btnHalo,imagenes,filtroHalo);

//boton para filtro de autos
let btnAutos = document.getElementById("btn-autos");
let filtroAutos = "autos";
aplicarFitros(btnAutos,imagenes,filtroAutos);

//funcion para fitrar por alt
function aplicarFitros (boton,objetos,filtroArboles){
    boton.addEventListener("click", () => {
        for (const imagen of objetos) {
            if(imagen.alt === filtroArboles){
                imagen.classList.add("mostrar");
            }else {
                imagen.classList.add("ocultar");
                imagen.classList.remove("mostrar");
            }
        }
    })
}