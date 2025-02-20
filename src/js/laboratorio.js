const imagen = document.getElementById("objeto");

let agregarFiltro = {
    grises: false,
    sepia: false,
    desemfoque: false,
    brillo: false,
    contraste: false,
    rotar: false,
}

let grises = document.getElementById("btn-gris");
    grises.addEventListener("click", () => {
        agregarFiltro.grises = !agregarFiltro.grises;
        aplicarFiltro();
        aplicarColor(agregarFiltro.grises,grises);
    })
let sepia = document.getElementById("btn-sepia");
    sepia.addEventListener("click", () => {
        agregarFiltro.sepia = !agregarFiltro.sepia;
        aplicarFiltro();
        aplicarColor(agregarFiltro.sepia,sepia);
    })
let desemfoque = document.getElementById("btn-desenfoque");
    desemfoque.addEventListener("click", () => {
        agregarFiltro.desemfoque = !agregarFiltro.desemfoque;
        aplicarFiltro();
        aplicarColor(agregarFiltro.desemfoque,desemfoque);
    })
let brillo = document.getElementById("btn-brillo");
    brillo.addEventListener("click", () => {
        agregarFiltro.brillo = !agregarFiltro.brillo;
        aplicarFiltro();
        aplicarColor(agregarFiltro.brillo,brillo);
    })
let contraste = document.getElementById("btn-contraste");
    contraste.addEventListener("click", () => {
        agregarFiltro.contraste = !agregarFiltro.contraste;
        aplicarFiltro();
        aplicarColor(agregarFiltro.contraste,contraste);
    })
let rotar = document.getElementById("btn-rotar");
    rotar.addEventListener("click", () => {
        agregarFiltro.rotar = !agregarFiltro.rotar;
        aplicarFiltro();
        aplicarColor(agregarFiltro.rotar,rotar);
    })

function aplicarColor (bool,variable){
    if (bool) {
        variable.style.background = "blue";
    }
    else{
        variable.style.background = "";
    }
}

function aplicarFiltro (){

    let filtrosAplicados = [];
    let colorActivado = [];

    if (agregarFiltro.contraste) {
        filtrosAplicados.push("contrast(200%)");
    }
    if (agregarFiltro.rotar) {
        filtrosAplicados.push("invert(100%)");
        rotar.style.background = "blue";
    }
    if (agregarFiltro.sepia) {
        filtrosAplicados.push("sepia(100%)");
        sepia.style.background = "blue";
    }
    if (agregarFiltro.brillo) {
        filtrosAplicados.push("brightness(200%)");
        brillo.style.background = "blue";
    }
    if (agregarFiltro.desemfoque) {
        filtrosAplicados.push("blur(5px)");
        desemfoque.style.background = "blue";
    }
    if (agregarFiltro.grises) {
        filtrosAplicados.push("grayscale(100%)");
        grises.style.background = "blue";
    }

    imagen.style.filter = filtrosAplicados.join(" ");
}
