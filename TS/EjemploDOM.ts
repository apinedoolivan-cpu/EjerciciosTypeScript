
const boton = document.getElementById('btnSaludar') as HTMLButtonElement;
const nombreInput = document.getElementById('nombre') as HTMLInputElement;

boton?.addEventListener('click', () => {
    const nombre = nombreInput?.value;
    if (nombre) {
        alert(`¡Hola, ${nombre}!`);
    } else {
        alert('Por favor, introduce tu nombre.');
    }
});

export {}