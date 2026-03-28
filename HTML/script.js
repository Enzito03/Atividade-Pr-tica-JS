let tarefas = []; 

let titulo = document.getElementById("titulo");
titulo.innerText = "Lista Dinâmica com JavaScript";

function adicionarTarefa() {
    let input = document.querySelector("#inputTarefa");

    if (input.value.trim() === "") {
        alert("Digite uma tarefa válida");
        return;
    }

    tarefas.push(input.value); 
    input.value = ""; 
    renderizarLista();
}

function renderizarLista() {
    let lista = document.getElementById("listaTarefas");
    lista.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
        let item = document.createElement("li");
        item.innerText = tarefas[i];

        item.onclick = function() {
            tarefas.splice(i, 1);
            renderizarLista();
        };

        lista.appendChild(item);
    }

    let contador = document.getElementById("contador");
    if (contador) {
        contador.innerText = "Tarefas: " + tarefas.length;
    }
}

function limparLista() {
    tarefas = [];
    renderizarLista();
}