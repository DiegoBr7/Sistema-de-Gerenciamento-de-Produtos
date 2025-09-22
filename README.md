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

Request

POST http://localhost:8080/usuario/enviar

<img width="2421" height="574" alt="Captura de tela 2025-09-22 163211" src="https://github.com/user-attachments/assets/f5cdb42c-d451-4558-b3ce-417d1bd662de" />

link da imagem : https://github.com/user-attachments/assets/f5cdb42c-d451-4558-b3ce-417d1bd662de

<img width="2416" height="946" alt="Captura de tela 2025-09-22 163223" src="https://github.com/user-attachments/assets/f28f0c84-2da3-4f84-a60a-511d18a8bbaa" />

link da imagem : https://github.com/user-attachments/assets/f28f0c84-2da3-4f84-a60a-511d18a8bbaa

2️⃣ Usuário – Login

Request

POST http://localhost:8080/auth/login

<img width="2412" height="463" alt="image" src="https://github.com/user-attachments/assets/0dc5e306-2115-4cdd-869b-72e2c9d0ae04" />

link da imagem : https://github.com/user-attachments/assets/0dc5e306-2115-4cdd-869b-72e2c9d0ae04 

Com essa solicitação do post ele irá enviar um token :

<img width="2419" height="860" alt="Captura de tela 2025-09-22 163953" src="https://github.com/user-attachments/assets/e7740eae-1c87-43e7-aff0-27a388712a66" />

link da imagem : https://github.com/user-attachments/assets/e7740eae-1c87-43e7-aff0-27a388712a66

Com esse token altere o tipo de autorização para Bearer Toke e cole o codigo gerado :

<img width="2388" height="1071" alt="Captura de tela 2025-09-22 164152" src="https://github.com/user-attachments/assets/2c512fd4-73aa-4dc0-9f25-04e85655bbf1" />

link da imagem : https://github.com/user-attachments/assets/2c512fd4-73aa-4dc0-9f25-04e85655bbf1

<img width="2412" height="1085" alt="Captura de tela 2025-09-22 164423" src="https://github.com/user-attachments/assets/c3313a3d-0f30-45b5-8a4b-6007fbcb84eb" />

link da imagem : https://github.com/user-attachments/assets/c3313a3d-0f30-45b5-8a4b-6007fbcb84eb






