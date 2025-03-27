let btnEnviarNomes = document.getElementById('btnenviarnome');
let espacoNomes = document.getElementById('listalutadores');
let btnSortear = document.getElementById('btnSortear');
let btnPlay = document.getElementById('btnPlay');
let btnStop = document.getElementById('btnStop');

let listaNinjas = [];
let musica = new Audio("narutoaudio.mp3");

// 🎵 Evento para tocar a música
btnPlay.addEventListener("click", function() {
    musica.play();
});

// 🛑 Evento para parar a música
btnStop.addEventListener("click", function() {
    musica.pause();
    musica.currentTime = 0; // Reinicia a música para o começo
});

// ➕ Adicionar nome à lista
btnEnviarNomes.addEventListener('click', function() {
    let ninja = document.getElementById('adicionarnome').value.trim();
    
    if (!ninja) {
        alert('Por favor, digite um nome.');
        return;
    }

    if (listaNinjas.includes(ninja)) {
        alert('Esse ninja já se encontra na lista.');
        return;
    }

    listaNinjas.push(ninja);

    let nome = document.createElement('li');
    nome.style.listStyle = 'none';
    nome.style.fontWeight = 'bold';
    nome.style.color = 'white';
    nome.style.fontSize = '1.6em';
    nome.innerText = ninja;

    espacoNomes.appendChild(nome);
    document.getElementById('adicionarnome').value = ''; // Limpa o input
});

// 🎲 Sorteio de confronto
btnSortear.addEventListener('click', function() {
    let caixaNome1 = document.getElementById('nome1');
    let caixaNome2 = document.getElementById('nome2');

    if (listaNinjas.length < 2) {
        alert("É necessário ter pelo menos dois ninjas na lista para sortear.");
        return;
    }

    let indiceAleatorio1 = Math.floor(Math.random() * listaNinjas.length);
    let indiceAleatorio2;

    do {
        indiceAleatorio2 = Math.floor(Math.random() * listaNinjas.length);
    } while (indiceAleatorio2 === indiceAleatorio1);

    caixaNome1.innerText = listaNinjas[indiceAleatorio1];
    caixaNome2.innerText = listaNinjas[indiceAleatorio2];

    caixaNome1.style.fontSize = '1.8em';
    caixaNome2.style.fontSize = '1.8em';
    caixaNome1.style.color = 'white';
    caixaNome2.style.color = 'white';
});
