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

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];


    actualizarLista();

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li> `
}