let amigos = [];

function adicionar() {
    // implementar a adição de nomes à lista de amigos secretos
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value === '') { // verifica se o campo está vazio
        alert('Informe o nome do amigo!');
        return;
    }
    if (amigos.includes(amigo.value)) { // verifica se o amigo já foi adicionado
        alert('Amigo já adicionado');
        return;
    }
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value); // adiciona o amigo à lista
    if (lista.textContent == '') { // verifica se a lista está vazia
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear() {
    // implementar o sorteio dos amigos secretos e mostrar o resultado na id "lista-sorteio"
    if (amigos.length <= 2) {
        alert('Adicione pelo menos dois amigos para sortear!');
        return;
    }
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>'
        } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>'
        }

    }
}

function embaralhar(lista) {
    // implementar o embaralhamento da lista de amigos
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    // implementar a reinicialização da lista e do sorteio
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}