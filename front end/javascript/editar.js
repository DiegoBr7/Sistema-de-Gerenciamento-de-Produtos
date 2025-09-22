const token = localStorage.getItem("token");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const nomeInput = document.getElementById("nome");
const descricaoInput = document.getElementById("descricao");
const precoInput = document.getElementById("preco");
const quantidadeInput = document.getElementById("quantidade");
const mensagem = document.getElementById("mensagem");

if (!token) {
  alert("Você precisa estar logado!");
  window.location.href = "login.html";
}


async function carregarProduto() {
  try {
    const response = await fetch(`http://localhost:8080/api/produtos/${id}`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token
      }
    });

    if (!response.ok) {
      throw new Error("Erro ao carregar produto");
    }

    const produto = await response.json();

    nomeInput.value = produto.nome;
    descricaoInput.value = produto.descricao;
    precoInput.value = produto.precoProduto;
    quantidadeInput.value = produto.quantidade;

  } catch (error) {
    mensagem.textContent = "Erro: " + error.message;
    mensagem.style.color = "red";
  }
}


document.getElementById("editarForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  try {
    const response = await fetch(`http://localhost:8080/api/produtos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({
        nome: nomeInput.value,
        descricao: descricaoInput.value,
        precoProduto: parseFloat(precoInput.value),
        quantidade: parseInt(quantidadeInput.value)
      })
    });

    if (response.ok) {
      mensagem.textContent = "Produto atualizado com sucesso!";
      mensagem.style.color = "green";
      setTimeout(() => window.location.href = "painel-supervisor.html", 2000);
    } else {
      const error = await response.text();
      mensagem.textContent = "Erro ao atualizar: " + error;
      mensagem.style.color = "red";
    }

  } catch (error) {
    mensagem.textContent = "Erro de conexão com o servidor.";
    mensagem.style.color = "red";
  }
});

carregarProduto();
