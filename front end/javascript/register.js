document.getElementById("registro").addEventListener("submit", async function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarsenha = document.getElementById("confirmarSenha").value;
    const cargo = document.getElementById("cargo").value;

    const mensagem = document.getElementById("mensagem");

    if (senha !== confirmarsenha) {
        mensagem.textContent = "As senhas não coincidem !"
        mensagem.style.color = "red";
        return;
    }

    try {
        const response = await fetch("http://localhost:8080/usuario/enviar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                senha: senha,
                cargo: cargo
            })
        });

        if (response.ok) {
            mensagem.textContent = "Usuário cadastrado com sucesso ";
            mensagem.style.color = "green";

            setTimeout(() => window.location.href = "login.html", 2000);

        } else {
            const error = await response.text();
            mensagem.textContent = "Erro ao cadastrar: " + error;
            mensagem.style.color = "red";
        }


    } catch (error) {
        mensagem.textContent = "Erro de conexão com o servidor";
        mensagem.style.color = "red";
    }

})