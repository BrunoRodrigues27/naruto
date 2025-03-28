let btnEnviarNomes = document.getElementById('btnenviarnome');
let espacoNomes = document.getElementById('listalutadores');
let btnSortear = document.getElementById('btnSortear');
let btnPlay = document.getElementById('btnPlay');
let btnStop = document.getElementById('btnStop');
let btnLimpar = document.getElementById('btnLimpar');
let inputNome = document.getElementById('adicionarnome');
let btnLimparNomesSorteados = document.getElementById('zerar-nomes-sorteados')
let btnVoltarInicio = document.getElementById('voltar-inicio')
let btnDuelo = document.getElementById('btnduelo')
btnVoltarInicio.addEventListener('click', voltar)
btnDuelo.addEventListener('click', irsorteio)

function irsorteio(){
    alert("nao vai")
}



let listaNinjas = [];
let musica = new Audio("narutoaudio.mp3");

// 🎵 Evento para tocar a música
btnPlay.addEventListener("click", () => musica.play());

// 🛑 Evento para parar a música
btnStop.addEventListener("click", () => {
    musica.pause();
    musica.currentTime = 0;
});

// ➕ Adicionar nome à lista
btnEnviarNomes.addEventListener('click', adicionarNome);
inputNome.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adicionarNome();
});

function adicionarNome() {
    let ninja = inputNome.value.trim();

    if (!ninja) {
        alert('Por favor, digite um nome.');
        return;
    }

    if (listaNinjas.includes(ninja)) {
        alert('Esse ninja já está na lista.');
        return;
    }

    listaNinjas.push(ninja);

    let nome = document.createElement('li');
    nome.style.listStyle = 'none'
    nome.style.fontSize = '20pt'
    nome.style.lineHeight = '1.6'
    nome.style.letterSpacing = '3px'
    nome.textContent = ninja;
    nome.classList.add("ninja-list-item"); // Classe para CSS

    espacoNomes.appendChild(nome);
    inputNome.value = ''; // Limpa o input 

}

// 🎲 Sorteio de confronto e remoção dos sorteados
btnSortear.addEventListener('click', () => {
    let caixaNome1 = document.getElementById('nome1');
    let caixaNome2 = document.getElementById('nome2');

    if (listaNinjas.length < 2) {
        alert("Adicione pelo menos dois ninjas para sortear.");
        return;
    }

    let [ninja1, ninja2] = sortearDiferentes(listaNinjas);

    caixaNome1.style.fontSize = "20pt"
    caixaNome2.style.fontSize = "20pt"
    caixaNome1.style.letterSpacing = '3px'
    caixaNome2.style.letterSpacing = '3px'
    caixaNome1.textContent = ninja1;
    caixaNome2.textContent = ninja2;

    // Remover os sorteados da lista de ninjas
    listaNinjas = listaNinjas.filter(ninja => ninja !== ninja1 && ninja !== ninja2);

    // Atualizar a exibição da lista
    atualizarLista();
});

// Função para sortear dois nomes diferentes
function sortearDiferentes(lista) {
    let copiaLista = [...lista]; // Clonar a lista para evitar modificar a original
    let indice1 = Math.floor(Math.random() * copiaLista.length);
    let ninja1 = copiaLista.splice(indice1, 1)[0]; // Remove e retorna

    let indice2 = Math.floor(Math.random() * copiaLista.length);
    let ninja2 = copiaLista[indice2];

    return [ninja1, ninja2];
}

// 🔄 Atualiza a lista visualmente
function atualizarLista() {
    espacoNomes.innerHTML = '';
    listaNinjas.forEach(ninja => {
        let nome = document.createElement('li');
        nome.textContent = ninja;
        nome.classList.add("ninja-list-item");
        espacoNomes.appendChild(nome);
    });
}

// 🔄 Limpar lista e sorteios
btnLimpar.addEventListener('click', () => {
    listaNinjas = [];
    espacoNomes.innerHTML = '';
    
});

btnLimparNomesSorteados.addEventListener('click', zerar)

function zerar(){
    let sorteio1 = document.getElementById('nome1');
    let sorteio2 = document.getElementById('nome2');
    sorteio1.innerHTML = ''
    sorteio2.innerHTML = ''
}

function voltar(){
    window.location.href = 'index.html'
}