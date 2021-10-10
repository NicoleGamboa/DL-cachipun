let cantidadJuegos = prompt('¿Cuántas veces quieres jugar contra la computadora?');

for (let juegoActual = 0; juegoActual < cantidadJuegos; juegoActual++) {
    let eleccionComputadora;
    let eleccionAleatoria; 
    let eleccionUsuario = prompt (`
        Escribe una opción:
        1. Piedra
        2. Papel
        3. Tijera
        `)   

    eleccionUsuario = eleccionUsuario.toLocaleLowerCase()
    eleccionAleatoria = Math.floor(Math.random() * (4 - 1)) + 1;

    switch(eleccionAleatoria){
        case 1: 
            eleccionComputadora = "piedra"
        break;
        case 2:
            eleccionComputadora = "papel"
        break;
        case 3:
            eleccionComputadora = "tijera"
        break;
    }

    if (eleccionComputadora === eleccionUsuario) {
        alert(`
            La computadora eligió ${eleccionComputadora} y tu ${eleccionUsuario}. ¡Es un empate!
        `);
    } else if(eleccionComputadora === 'piedra' && eleccionUsuario === 'papel'){
        alert(`
            La computadora eligió ${eleccionComputadora} y tu ${eleccionUsuario}. ¡Haz ganado!
        `);
    } else if(eleccionComputadora === 'papel' && eleccionUsuario === 'tijera'){
        alert(`
            La computadora eligió ${eleccionComputadora} y tu ${eleccionUsuario}. ¡Haz ganado!
        `);
    } else if(eleccionComputadora === 'tijera' && eleccionUsuario === 'piedra'){
        alert(`
            La computadora eligió ${eleccionComputadora} y tu ${eleccionUsuario}. ¡Haz ganado!
        `);
    } else {
        alert(`
            La computadora eligió ${eleccionComputadora} y tu ${eleccionUsuario}. ¡Haz perdido!
        `);
    }
}

alert('Ha finalizado el juego');