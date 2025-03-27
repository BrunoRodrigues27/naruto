let btnEnviarNomes = document.getElementById('btnenviarnome');
let espacoNomes = document.getElementById('listalutadores');

let listaNinjas = [];

let musica = new Audio("narutoaudio.mp3");

document.getElementById("btnPlay").addEventListener("click", function() {
    musica.play();
});


btnEnviarNomes.addEventListener('click', enviar);

function enviar() {
    let ninja = document.getElementById('adicionarnome').value;
    if (!ninja) {
        alert('Por favor, digite um nome.');
        return;
    }

    let nome = document.createElement('li');
    nome.style.listStyle = 'none'
    
    if (listaNinjas.includes(ninja)) {
        alert('Esse ninja já se encontra na lista.');
        return;
    }
    
    listaNinjas.push(ninja);
    nome.innerHTML += ninja;
    espacoNomes.appendChild(nome);
}

let sortearConfronto = document.getElementById('sorteador');

sortearConfronto.addEventListener('click', sortear);

function sortear() {
    let caixaNome1 = document.getElementById('nome1');
    let caixaNome2 = document.getElementById('nome2');

    // Verifica se há pelo menos dois ninjas na lista
    if (listaNinjas.length < 2) {
        alert("É necessário ter pelo menos dois ninjas na lista para sortear.");
        return;
    }

    // Sorteia dois índices aleatórios diferentes
    let indiceAleatorio1 = Math.floor(Math.random() * listaNinjas.length);
    let indiceAleatorio2 = Math.floor(Math.random() * listaNinjas.length);

    // Garante que os dois índices sorteados são diferentes
    while (indiceAleatorio2 === indiceAleatorio1) {
        indiceAleatorio2 = Math.floor(Math.random() * listaNinjas.length);
    }

    let ninjaSorteado1 = listaNinjas[indiceAleatorio1];
    let ninjaSorteado2 = listaNinjas[indiceAleatorio2];

    // Exibe os nomes sorteados nos campos <p>
    caixaNome1.innerText = ninjaSorteado1;  // Exibe o nome sorteado no primeiro <p>
    caixaNome2.innerText = ninjaSorteado2;  // Exibe o nome sorteado no segundo <p>
}
