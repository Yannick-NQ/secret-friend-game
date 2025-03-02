let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');

    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre de amigo.");
        return;
    }

    amigos.push(nombre);

    console.log(amigos);

    input.value = "";
}

