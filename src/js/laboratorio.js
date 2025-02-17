const imagen = document.getElementById("objeto");

//filtro para grises
let gris = document.getElementById("btn-gris");
let grisBool = true;

gris.addEventListener("click", () => {
    if (grisBool){
        imagen.style.filter = "grayscale(100%)";
        grisBool = !grisBool;
        gris.style.background = "blue";
    }
    else{
        imagen.style.filter = ("grayscale(0%)");
        grisBool = !grisBool;
        gris.style.background = "";

    }
})

//filtro para sepia
let sep = document.getElementById("btn-sepia");
let sepBool = true;

sep.addEventListener("click", () => {
    if (sepBool){
        imagen.style.filter = "sepia(100%)";
        sepBool = !sepBool;
        sep.style.background = "blue";
    }
    else{
        imagen.style.filter = ("");
        sepBool = !sepBool;
        sep.style.background = "";

    }
})

//filtro para desenfoque
let desemfoque = document.getElementById("btn-desenfoque");
let desBool = true;

desemfoque.addEventListener("click", () => {
    if (desBool){
        imagen.style.filter = "blur(5px)";
        desBool = !desBool;
        desemfoque.style.background = "blue";
    }
    else{
        imagen.style.filter = ("");
        desBool = !desBool;
        desemfoque.style.background = "";

    }
})

//filtro para brillo
let brillo = document.getElementById("btn-brillo");
let briBool = true;

brillo.addEventListener("click", () => {
    if (briBool){
        imagen.style.filter = "brightness(200%)";
        briBool = !briBool;
        brillo.style.background = "blue";
    }
    else{
        imagen.style.filter = ("");
        briBool = !briBool;
        brillo.style.background = "";

    }
})

//filtro para contraste
let contraste = document.getElementById("btn-contraste");
let contrasBool = true;

contraste.addEventListener("click", () => {
    if (contrasBool){
        imagen.style.filter = "contrast(200%)";
        contrasBool = !contrasBool;
        contraste.style.background = "blue";
    }
    else{
        imagen.style.filter = ("");
        contrasBool = !contrasBool;
        contraste.style.background = "";

    }
})

//filtro para negativo
let rotar = document.getElementById("btn-rotar");
let rotaBool = true;

rotar.addEventListener("click", () => {
    if (rotaBool){
        imagen.style.filter = "invert(100%)";
        rotaBool = !briBool;
        rotar.style.background = "blue";
    }
    else{
        imagen.style.filter = ("");
        rotaBool = !rotaBool;
        rotar.style.background = "";

    }
})

