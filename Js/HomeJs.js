   // Función para cambiar la clase del elemento <span>
   const elemento = document.getElementById("navbar");
   document.getElementById("menu").addEventListener("click", function () {
    const menuIcon = document.getElementById("menuIcon");


    // Si la clase actual es "gg-menu", cambiar a "gg-close"; de lo contrario, cambiar a "gg-menu"
    if (menuIcon.classList.contains("gg-menu")) {
        menuIcon.classList.remove("gg-menu");
        menuIcon.classList.add("gg-close");
        elemento.style.backgroundColor = "#122a49";
        elemento.style.textAlign = "";
    } 
    else{
        menuIcon.classList.remove("gg-close");
        menuIcon.classList.add("gg-menu");
        elemento.style.backgroundColor = "transparent";
    }
});