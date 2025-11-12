var boton = document.getElementById('btnSaludar');
var nombreInput = document.getElementById('nombre');
if (boton) {
    boton.addEventListener('click', function () {
        var nombre = nombreInput ? nombreInput.value : undefined;
        if (nombre) {
            alert("\u00A1Hola, ".concat(nombre, "!"));
        }
        else {
            alert('Por favor, introduce tu nombre.');
        }
    });
}
