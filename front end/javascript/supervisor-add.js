function parseJwt(token) {
    try {
        const payload = token.split(".")[1];
        const json = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
        return JSON.parse(decodeURIComponent(escape(json)));
    } catch {
        return null;
    }
}

const token = localStorage.getItem("token");
if (!token) {
    alert("Você precisa estar logado.");
    window.location.href = "login.html";
}

const payload = parseJwt(token);
const roles = Array.isArray(payload?.roles) ? payload.roles : [];
const isSupervisor = roles.includes("ROLE_SUPERVISOR");

if (!isSupervisor) {
    alert("Você não tem permissão para esta página de Supervisor.");
    if (roles.includes("ROLE_ANALISTA")) {
        window.location.href = "painel-analista.html";
    } else {
        window.location.href = "login.html";
    }
}


document.getElementById("produtoForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const preco = document.getElementById("preco").value.trim().replace(",", ".");
    const quantidade = document.getElementById("quantidade").value.trim();
    const mensagem = document.getElementById("mensagem");

    try {
        const resp = await fetch("http://localhost:8080/api/produtos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                nome,
                descricao,
                precoProduto: parseFloat(preco),
                quantidade: parseInt(quantidade)
            })
        });

        if (!resp.ok) {
            const txt = await resp.text();
            mensagem.textContent = "Erro ao cadastrar: " + txt;
            mensagem.style.color = "red";
            return;
        }

        mensagem.textContent = "Produto cadastrado com sucesso!";
        mensagem.style.color = "green";
        setTimeout(() => (window.location.href = "painel-supervisor.html"), 1200);
    } catch (err) {
        mensagem.textContent = "Erro de conexão com o servidor.";
        mensagem.style.color = "red";
    }
});
