//Agregado de imagen
const imagen = document.getElementById("objeto");
//Array de filtros y valores de filtro
let agregarFiltro = {
    grises: { bool:false, valor:100 },
    desemfoque: { bool:false, valor:10 },
    brillo: { bool:false, valor:200 },
    contraste: { bool:false, valor:200 },
    sepia: false,
    rotar: false,
}
//boton de gris
let grises = document.getElementById("btn-gris");
let inputGrises = document.getElementById("input-gris");
    grises.addEventListener("click", () => {
        agregarFiltro.grises.bool = !agregarFiltro.grises.bool;
        aplicarFiltro();
        aplicarColor(agregarFiltro.grises.bool,grises);
    })
    inputGrises.addEventListener("input", () => {
        if(agregarFiltro.grises.bool){
            agregarFiltro.grises.valor = inputGrises.value;
        }
        aplicarFiltro();
    })


//boton de desenfoque
let desemfoque = document.getElementById("btn-desenfoque");
let inputDesemfoque =document.getElementById("imput-desenfoque");
    desemfoque.addEventListener("click", () => {
        agregarFiltro.desemfoque.bool = !agregarFiltro.desemfoque.bool;
        aplicarFiltro();
        aplicarColor(agregarFiltro.desemfoque.bool,desemfoque);
    })
    inputDesemfoque.addEventListener("input", () => {
        if(agregarFiltro.desemfoque.bool){
            agregarFiltro.desemfoque.valor = inputDesemfoque.value;
        }
        aplicarFiltro();
    })

    
//boton de brillo
let brillo = document.getElementById("btn-brillo");
let inputBrillo =document.getElementById("imput-brillo");
    brillo.addEventListener("click", () => {
        agregarFiltro.brillo.bool = !agregarFiltro.brillo.bool;
        aplicarFiltro();
        aplicarColor(agregarFiltro.brillo.bool,agregarFiltro.brillo);
    })
    inputBrillo.addEventListener("input", () => {
        if(agregarFiltro.brillo.bool){
            agregarFiltro.brillo.valor = inputBrillo.value;
        }
        aplicarFiltro();
    })
    

//boton de contraste
let contraste = document.getElementById("btn-contraste");
let inputContraste =document.getElementById("imput-contraste");
    contraste.addEventListener("click", () => {
        agregarFiltro.contraste.bool = !agregarFiltro.contraste.bool;
        aplicarFiltro();
        aplicarColor(agregarFiltro.contraste,contraste);
    })
    inputContraste.addEventListener("input", () => {
        if(agregarFiltro.contraste.bool){
            agregarFiltro.contraste.valor = inputContraste.value;
        }
        aplicarFiltro();
    })

//botonde sepia
let sepia = document.getElementById("btn-sepia");
    sepia.addEventListener("click", () => {
        agregarFiltro.sepia = !agregarFiltro.sepia;
        aplicarFiltro();
        aplicarColor(agregarFiltro.sepia,sepia);
    })

//boton de rotar
let rotar = document.getElementById("btn-rotar");
    rotar.addEventListener("click", () => {
        agregarFiltro.rotar = !agregarFiltro.rotar;
        aplicarFiltro();
        aplicarColor(agregarFiltro.rotar);
    })

//funcion de cambio de color al activar el boton
function aplicarColor (bool,variable){
    if (bool) {
        variable.style.background = "blue";
    }
    else{
        variable.style.background = "";
    }
}
//funcion principal para aplicar filtros
function aplicarFiltro (){

    
    let filtrosAplicados = [];
    let colorActivado = [];

    if (agregarFiltro.grises.bool) 
        { filtrosAplicados.push(`grayscale(${agregarFiltro.grises.valor}%)`);
        grises.style.background = "blue";
    }
    if (agregarFiltro.desemfoque.bool) 
        { filtrosAplicados.push(`blur(${agregarFiltro.desemfoque.valor}px)`);
        desemfoque.style.background = "blue";
    }
    if (agregarFiltro.brillo.bool) 
        { filtrosAplicados.push(`brightness(${agregarFiltro.brillo.valor}%)`);
        brillo.style.background = "blue";
    }
    if (agregarFiltro.contraste.bool) 
        { filtrosAplicados.push(`contrast(${agregarFiltro.contraste.valor}%)`);
    }
    if (agregarFiltro.sepia) 
        { filtrosAplicados.push("sepia(100%)");
        sepia.style.background = "blue";
    }
    if (agregarFiltro.rotar) { 
        filtrosAplicados.push("invert(100%)");
        rotar.style.background = "blue";
    }

    imagen.style.filter = filtrosAplicados.join(" ");
}
