document.getElementById("produtoForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const descricao = document.getElementById("descricao").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;

    const token = localStorage.getItem("token");
    if (!token) {
        alert("Você precisa estar logado!");
        window.location.href = "login.html";
        return;
    }

    try {
        const response = await fetch("http://localhost:8080/api/produtos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                nome: nome,
                descricao: descricao,
                precoProduto: parseFloat(preco),
                quantidade: parseInt(quantidade)
            })
        });

        if (response.ok) {
            alert("Produto cadastrado com sucesso!");
            window.location.href = "painel.html"; 
        } else {
            const error = await response.text();
            alert("Erro ao cadastrar produto: " + error);
        }
    } catch (error) {
        alert("Erro de conexão com o servidor.");
    }
});
