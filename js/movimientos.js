// Obtén el elemento del sprite
const sprite = document.querySelector('.spriteMovimiento');

// Establece la posición inicial del sprite
let xPos = 0;
let yPos = 0;

// Función para mover el sprite dentro de sí mismo
function moverSprite(x, y) {
    // Actualiza las coordenadas del sprite
    xPos += x;
    yPos += y;

    // Aplica la transformación de movimiento al sprite
    sprite.style.transform = `translate(${xPos}px, ${yPos}px)`;
}

// Función para manejar el evento de tecla presionada
function manejarTeclaPresionada(event) {
    const step = 10; // Cantidad de píxeles a mover en cada tecla

    // Comprueba qué tecla se presionó
    switch (event.key) {
        case 'ArrowLeft':
            moverSprite(-step, 0);
            sprite.style.animation = `mover-sprite-izquierda 1s steps(3) infinite`;
            break;
        case 'ArrowUp':
            moverSprite(0, -step);
            sprite.style.animation = `mover-sprite-arriba 1s steps(3) infinite`;
            break;
        case 'ArrowRight':
            moverSprite(step, 0);
            sprite.style.animation = `mover-sprite-derecha 1s steps(3) infinite`;
            break;
        case 'ArrowDown':
            moverSprite(0, step);
            sprite.style.animation = `mover-sprite-abajo 1s steps(3) infinite`;
            break;
    }
}

// Agrega un event listener para el evento 'keydown'
document.addEventListener('keydown', manejarTeclaPresionada);
