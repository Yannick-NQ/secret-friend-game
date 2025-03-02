let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');

    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre de amigo.");
        return;
    }

    amigos.push(nombre);

    actualizarLista();

    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}