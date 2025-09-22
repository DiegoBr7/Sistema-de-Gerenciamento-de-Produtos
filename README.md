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

### 2. Executar o Back End

No meu caso eu utilizei o intellij para executar o projeto Spring :

<img width="2490" height="1024" alt="Captura de tela 2025-09-22 161209" src="https://github.com/user-attachments/assets/657db500-06dd-42d0-965b-343376a86a5d" />
link da imagem : https://github.com/user-attachments/assets/657db500-06dd-42d0-965b-343376a86a5d

### 3. Executar o Front End

<img width="2548" height="1526" alt="Captura de tela 2025-09-22 161308" src="https://github.com/user-attachments/assets/6b49d2bb-835d-4cfb-a90d-4b7a3fa63722" />

link da imagem : https://github.com/user-attachments/assets/6b49d2bb-835d-4cfb-a90d-4b7a3fa63722

### 4. Realizando Testes Back End – Postman

1️⃣ Usuário – Cadastro

<img width="2421" height="574" alt="Captura de tela 2025-09-22 163211" src="https://github.com/user-attachments/assets/f5cdb42c-d451-4558-b3ce-417d1bd662de" />

link da imagem : https://github.com/user-attachments/assets/f5cdb42c-d451-4558-b3ce-417d1bd662de

<img width="2416" height="946" alt="Captura de tela 2025-09-22 163223" src="https://github.com/user-attachments/assets/f28f0c84-2da3-4f84-a60a-511d18a8bbaa" />

link da imagem : https://github.com/user-attachments/assets/f28f0c84-2da3-4f84-a60a-511d18a8bbaa



