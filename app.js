const input = document.getElementById('input-friends');
const participantsList = document.getElementById('participants-list');

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
    const nombres = input.value.split(',').map(nombre => nombre.trim()).filter(nombre => nombre !== '');
    if (nombres.length === 0) {
        alert('Debes de ingresar al menos un nombre');
        return;
    }

    for (const nombre of nombres) {
        if (amigos.includes(nombre)) {
            alert(`El amigo ${nombre} ya está en la lista`);
            continue;
        }

        if (/^\d/.test(nombre)) {
            alert(`El nombre "${nombre}" no puede empezar con un número.`);
            continue;
        }

        if (nombre.length < 2) {
            alert(`El nombre "${nombre}" es demasiado corto (mínimo 2 letras).`);
            continue;
        }

        amigos.push(nombre);

        renderizarAmigo(nombre);
    }

    input.value = '';
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
        alert('No hay amigos en la lista para sortear');
        return;
    }

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.style.animationPlayState = 'paused';
    });

    cards.forEach(card => {
        card.style.animation = 'vibrate 0.2s linear infinite';
    });

    setTimeout(function () {

        const ganador = amigos[Math.floor(Math.random() * amigos.length)];

        document.getElementById('ganador-nombre').textContent = ganador;
        document.getElementById('modal-ganador').style.display = 'flex';

        cards.forEach(card => {
            card.style.animation = 'none';
        });

        cards.forEach(card => {
            card.style.animation = 'bounce 2s ease-in-out infinite';
            card.style.animationPlayState = 'running';
        });

    }, 1000);
}


function closeModalGanador() {
    document.getElementById('modal-ganador').style.display = 'none';
}