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

3️⃣ Produto – Cadastrar

Request

POST http://localhost:8080/api/produtos

<img width="2397" height="566" alt="Captura de tela 2025-09-22 165005" src="https://github.com/user-attachments/assets/03440eec-25c1-4d9c-ae8c-6099617b6760" />

link da imagem : https://github.com/user-attachments/assets/03440eec-25c1-4d9c-ae8c-6099617b6760

<img width="2415" height="1123" alt="image" src="https://github.com/user-attachments/assets/d0656970-adfa-44e2-9631-1db5af4a4046" />

link da imagem : https://github.com/user-attachments/assets/d0656970-adfa-44e2-9631-1db5af4a4046


5️⃣ Produto – Buscar por ID

Request

GET http://localhost:8080/api/produtos/1

<img width="2429" height="1207" alt="image" src="https://github.com/user-attachments/assets/a65bce43-715f-46d6-8bfd-8323b699627c" />

link da imagem : https://github.com/user-attachments/assets/a65bce43-715f-46d6-8bfd-8323b699627c

7️⃣ Produto – Buscar por Nome (Filtro)

Request

GET http://localhost:8080/api/produtos?nome=Notebook

<img width="2397" height="1204" alt="image" src="https://github.com/user-attachments/assets/678558e2-1344-4677-bbc1-84fd4c1f26b2" />

link da imagem : https://github.com/user-attachments/assets/678558e2-1344-4677-bbc1-84fd4c1f26b2

8️⃣ Produto – Excluir (Supervisor apenas)

Request

DELETE http://localhost:8080/api/produtos/1

<img width="2425" height="1221" alt="Captura de tela 2025-09-22 165933" src="https://github.com/user-attachments/assets/2413d7b3-db9d-4457-b609-d1028291fd3f" />

link da imagem : https://github.com/user-attachments/assets/2413d7b3-db9d-4457-b609-d1028291fd3f

Response (204 No Content)

(vazio)

## .5 AGORA TESTANDO O FRONT END :

No meu caso eu testei no VsCode , embaixo no rodapé da imagem tem o botão Go live clique nele e irá iniciar o front end , junto com o back end :

<img width="2477" height="1478" alt="Captura de tela 2025-09-22 170203" src="https://github.com/user-attachments/assets/01b8cfd1-f92b-4c28-9238-bd00a65bb752" />

link da imagem : https://github.com/user-attachments/assets/01b8cfd1-f92b-4c28-9238-bd00a65bb752

Irá aparecer essa página :

<img width="1912" height="975" alt="Captura de tela 2025-09-22 170534" src="https://github.com/user-attachments/assets/4e236609-54d0-42c0-b110-4b7f7f653f99" />

link da imagem : https://github.com/user-attachments/assets/4e236609-54d0-42c0-b110-4b7f7f653f99

Preencha todos os campos :

<img width="1865" height="979" alt="Captura de tela 2025-09-22 170733" src="https://github.com/user-attachments/assets/c3b59f0a-9b08-484a-9b35-d8485255aafa" />

link da imagem : https://github.com/user-attachments/assets/c3b59f0a-9b08-484a-9b35-d8485255aafa

Você será redirecionado para a página login :

<img width="1904" height="872" alt="Captura de tela 2025-09-22 171130" src="https://github.com/user-attachments/assets/29de1590-eda8-4b05-b98f-2354a929318c" />

link da imagem : https://github.com/user-attachments/assets/29de1590-eda8-4b05-b98f-2354a929318c











