const token = localStorage.getItem("token");
const tabela = document.getElementById("tabela-produtos").querySelector("tbody");
const mensagem = document.getElementById("mensagem");
const adicionar = document.getElementById("adicionar");

if (!token) {
    window.location.href = "login.html";
}

async function carregarProdutos() {
    try {
        const response = await fetch("http://localhost:8080/api/produtos", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        if (!response.ok) {
            throw new Error("Erro ao carregar produtos (" + response.status + ")");
        }

        const produtos = await response.json();
        tabela.innerHTML = "";

        produtos.forEach(produto => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
        <td>${produto.id}</td>
        <td>${produto.nome}</td>
        <td>${produto.descricao}</td>
        <td>${produto.precoProduto}</td>
        <td>${produto.quantidade}</td>
        <td>${new Date(produto.dataCriacao).toLocaleString()}</td>
        <td>-</td> <!-- Analista não pode editar nem excluir -->
      `;

            tabela.appendChild(tr);
        });

    } catch (error) {
        mensagem.textContent = "Erro: " + error.message;
        mensagem.style.color = "red";
    }
}

document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "login.html";
});

adicionar.addEventListener("click", () => {
    window.location.href = "adicionar-analista.html";
});

carregarProdutos();


// _____________________________________________________________________________________________________________

document.getElementById("btnBuscar").addEventListener("click", async () => {
    const nome = document.getElementById("filtroNome").value.trim();

    if (!nome) {
        carregarProdutos();
        return;
    }

    try {
        const response = await fetch(`http://localhost:8080/api/produtos/buscar?nome=${encodeURIComponent(nome)}`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        if (!response.ok) {
            throw new Error("Erro ao buscar produtos");
        }

        const produtos = await response.json();
        tabela.innerHTML = "";

        produtos.forEach(produto => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>${produto.descricao}</td>
                <td>${produto.precoProduto}</td>
                <td>${produto.quantidade}</td>
                <td>${new Date(produto.dataCriacao).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "medium" })}</td>
                <td>-</td>
            `;
            tabela.appendChild(tr);
        });
    } catch (error) {
        mensagem.textContent = "Erro: " + error.message;
        mensagem.style.color = "red";
    }
});
