# 🛒 Sistema de Gerenciamento de Produtos

Projeto desenvolvido com **Spring Boot (Back-end)** e **HTML/CSS/JS (Front-end)**.  
Permite o cadastro de usuários, login com JWT, controle de permissões (Analista e Supervisor) e CRUD de produtos com restrições de acesso.  

---

## ✅ Funcionalidades

- Cadastro e login de usuários com JWT.
- Perfis de acesso:
  - **Analista** → pode visualizar e cadastrar produtos.
  - **Supervisor** → pode visualizar, cadastrar, editar e excluir produtos.
- CRUD completo de produtos.
- API RESTful protegida para consulta de produtos (`/api/produtos`).
- Painel Web com:
  - Listagem de produtos.
  - Filtro de produtos pelo nome.
  - Botões de ação (editar/excluir) restritos ao Supervisor.
  - Logout.

---

## 🛠️ Tecnologias Utilizadas

### Back-end
- Java 17+
- Spring Boot 3+
- Spring Security + JWT
- Spring Data JPA
- Banco de dados **H2 (memória)** para testes

### Front-end
- HTML5
- CSS3
- JavaScript (fetch API, localStorage)

---

## ⚙️ Requisitos

- **Java 17+**
- **Maven** instalado
- Navegador atualizado (para rodar o front)

---

## ▶️ Como Executar

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
