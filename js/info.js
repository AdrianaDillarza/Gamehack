function addElement() {
    // crea un nuevo div 
    // y añade contenido 
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Hola!¿Qué tal?");
    newDiv.appendChild(newContent); //añade texto al div creado. 

    // añade el elemento creado y su contenido al DOM 
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);


    /*Método jquery para publicar comentarios uno encima de otro sin que desaparezcan */
    $(document).ready(function () {
        $("#benviar").click(function () {
            $("#comments").prepend('<li>' + $("#comentario").val() + '</li>');
            $("#comentario").val('');
        });
    });