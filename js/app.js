let amigos = [];

// Adiciona listener para a tecla Enter no input
document.addEventListener('DOMContentLoaded', () => {
    const inputAmigo = document.getElementById('nome-amigo');
    inputAmigo.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Impede o comportamento padrão (ex: reiniciar ou submeter form)
            adicionar();
        }
    });

    // Impede que o formulário recarregue a página se alguém tentar submeter
    const form = document.querySelector('.form');
    form.addEventListener('submit', (e) => e.preventDefault());
});

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let nome = amigo.value.trim();

    if (nome === '') {
        alert('Informe o nome do amigo!');
        return;
    }
    if (amigos.includes(nome)) {
        alert('Amigo já adicionado');
        return;
    }

    amigos.push(nome);
    amigo.value = '';
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        let tag = document.createElement('div');
        tag.classList.add('amigo-tag');
        tag.innerHTML = `
            <span>${amigo}</span>
            <button onclick="removerAmigo(${index})" class="tag-remove-btn">
                <span class="material-symbols-rounded">close</span>
            </button>
        `;
        lista.appendChild(tag);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
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
    atualizarLista();
    document.getElementById('lista-sorteio').innerHTML = '';
}

function copiarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    if (sorteio.innerText === '') {
        alert('Realize o sorteio antes de copiar!');
        return;
    }

    // Converte o HTML (<br>) para quebra de linha real para o clipboard
    const textoParaCopiar = sorteio.innerText.replace(/\n\n/g, '\n');

    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        alert('Resultado copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}