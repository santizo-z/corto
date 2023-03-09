function comando(titulo,descripcion){

    let html = `
        <h2 class="titulo-comando">${titulo}</h2>
        <p class="descripcion-comando">${descripcion}</p>
    `;

    return html;
}