function paginar(id) {
    let elementos = document.querySelectorAll('.item');
    elementos.forEach(elemento => {
        elemento.classList.remove('active');
    });

    let paginaAtiva = document.getElementById(id);
    paginaAtiva.classList.add('active');
}