let amigos = [];

function renderizarAmigo(name) {
    const card = document.createElement('div');

    card.classList.add('card');
    card.setAttribute('data-name', name);

    card.innerHTML = `
        <div class="card__body">
            <div class="card__icon">
              <img src="assets/images/mi-logo.png" alt="Participant Logo" />
            </div>

            <p class="card__title">${name}</p>
          </div>
          <div class="card__ribbon">
            <button class="card__ribbon-delete-icon" id="btn-delete-participant">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 14 14"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m13.5.5l-13 13m0-13l13 13"
                  stroke-width="2"
                />
              </svg>
            </button>
        </div>
    `;

    const deleteButton = card.querySelector('#btn-delete-participant');
    deleteButton.addEventListener('click', function () {
        eliminarAmigo(name);
    });

    participantsList.appendChild(card);
}

function eliminarAmigo(name) {

    const index = amigos.indexOf(name);
    if (index > -1) {
        amigos.splice(index, 1);
    }

    const card = participantsList.querySelector(`.card[data-name="${name}"]`);
    if (card) {
        participantsList.removeChild(card);
    }
}


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