const sections = document.querySelectorAll(
    "#inicio, #proyectos, #juegos, #sistemas"
);

const navigationItems = document.querySelectorAll(".nav-item");


function showSection(sectionId) {

    // Ocultar todas las secciones
    sections.forEach(section => {
        section.classList.remove("active-section");
    });

    // Mostrar la sección seleccionada
    const selectedSection =
        document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.add("active-section");
    }


    // Actualizar el botón activo
    navigationItems.forEach(item => {
        item.classList.remove("active");
    });

    const selectedButton =
        document.querySelector(
            `.nav-item[href="#${sectionId}"]`
        );

    if (selectedButton) {
        selectedButton.classList.add("active");
    }
}


/* -----------------------------------------
   CLIC EN LA BARRA LATERAL
----------------------------------------- */

navigationItems.forEach(item => {

    item.addEventListener("click", event => {

        event.preventDefault();

        const sectionId =
            item.getAttribute("href").substring(1);

        showSection(sectionId);

    });

});


/* -----------------------------------------
   INICIO
----------------------------------------- */

showSection("inicio");