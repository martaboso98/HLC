"use strict";

let contenedores = document.querySelectorAll(".container");

for (let i = 0; i < contenedores.length; i++) {
    let button = contenedores[i].querySelector(".btn");
    let image = contenedores[i].querySelector(".tamaño");

    button.addEventListener("click", function () {
        toggleVisibility(image, button);
    });
}

function toggleVisibility(img, btn) {
    img.style.display = (getComputedStyle(img).display === "none") ? "flex" : "none";
    btn.textContent = (img.style.display === "none") ? "Mostrar imagen" : "Ocultar imagen";
}
