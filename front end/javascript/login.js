function parseJwt(token) {

    try {

        const base64Url = token.split('.')[1];

        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

        const jsonPayload = decodeURIComponent(

            atob(base64)
                .split('')
                .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')

        );

        return JSON.parse(jsonPayload);

    } catch (e) {

        return null;

    }
}

document.getElementById("login").addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;

    const senha = document.getElementById("senha").value;

    const mensagem = document.getElementById("mensagem");

    try {

        const response = await fetch("http://localhost:8080/auth/login", {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, senha: senha })

        });

        if (response.ok) {

            const data = await response.json();
            localStorage.setItem("token", data.token);

            const payload = parseJwt(data.token);
            const roles = payload?.roles || [];

            mensagem.textContent = "Usuário logado com sucesso!";
            mensagem.style.color = "green";

            setTimeout(() => {

                if (roles.includes("ROLE_SUPERVISOR")) {

                    window.location.href = "painel-supervisor.html";

                } else if (roles.includes("ROLE_ANALISTA")) {

                    window.location.href = "painel-analista.html";

                } else {

                    window.location.href = "login.html";
                }
            }, 1000);

        } else {

            const error = await response.text();

            mensagem.textContent = "Erro ao logar: " + error;

            mensagem.style.color = "red";

        }
    } catch (error) {

        mensagem.textContent = "Erro de conexão com o servidor";

        mensagem.style.color = "red";

    }

});
