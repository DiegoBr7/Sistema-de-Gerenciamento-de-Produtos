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

Preencha os campos :

<img width="1735" height="817" alt="Captura de tela 2025-09-22 171338" src="https://github.com/user-attachments/assets/e49d3547-f610-4139-8833-7c5fa63768d6" />

link da imagem : https://github.com/user-attachments/assets/e49d3547-f610-4139-8833-7c5fa63768d6

e será redirecionado para a página de gerenciamento de produtos : 

<img width="1909" height="363" alt="Captura de tela 2025-09-22 175454" src="https://github.com/user-attachments/assets/a9a4f429-5b56-4a41-81c3-f4d308cd9482" />

link da imagem : https://github.com/user-attachments/assets/e49d3547-f610-4139-8833-7c5fa63768d6

clicando no botão adicionar produtos , você será direcionado a página de adicionar produto :

<img width="1747" height="851" alt="Captura de tela 2025-09-22 180101" src="https://github.com/user-attachments/assets/2edc5e89-ffba-40cd-ae57-0e0f34890b77" />

link da imagem : https://github.com/user-attachments/assets/2edc5e89-ffba-40cd-ae57-0e0f34890b77

Preencha as informações do produto e clique em salvar e será direcioando para a página de gerenciamento de produtos o produto e valores e os dados adicionados :

<img width="1904" height="355" alt="Captura de tela 2025-09-22 180511" src="https://github.com/user-attachments/assets/0974fe5b-d009-4bf9-b9e4-d0bc05cf3f0d" />

link da imagem : https://github.com/user-attachments/assets/0974fe5b-d009-4bf9-b9e4-d0bc05cf3f0d

Função buscar :

Ao clicar em buscar digite o nome ou a letra ou caractere do produto e ele realizará a busca :

<img width="1902" height="376" alt="Captura de tela 2025-09-22 180816" src="https://github.com/user-attachments/assets/2e59005a-0513-4fb0-8506-178c84f02bef" />

link da imagem : https://github.com/user-attachments/assets/2e59005a-0513-4fb0-8506-178c84f02bef

<img width="1905" height="478" alt="Captura de tela 2025-09-22 181039" src="https://github.com/user-attachments/assets/0634d2f6-748d-4116-94c3-8adbd6c9981d" />

link da imagem : https://github.com/user-attachments/assets/0634d2f6-748d-4116-94c3-8adbd6c9981d

<img width="1912" height="477" alt="Captura de tela 2025-09-22 181055" src="https://github.com/user-attachments/assets/e23a1e28-8cd2-4942-8f5b-1ac7ae0138a7" />

liink da imagem : https://github.com/user-attachments/assets/e23a1e28-8cd2-4942-8f5b-1ac7ae0138a7

Testando o botão de editar :

ao clicar no botão editar , você será redirecionado a página :

<img width="989" height="735" alt="Captura de tela 2025-09-22 181525" src="https://github.com/user-attachments/assets/e749b4de-0c14-4dad-8246-8846ea83e3be" />

link da imagem : https://github.com/user-attachments/assets/e749b4de-0c14-4dad-8246-8846ea83e3be

realize as alterações necessárias e clique em salvar e você será redirecionado a página de gerenciamento novamente com os valores alterados :

<img width="1914" height="525" alt="image" src="https://github.com/user-attachments/assets/d36f9998-4155-4d56-981b-58f8bf933cd8" />

link da imagem : https://github.com/user-attachments/assets/d36f9998-4155-4d56-981b-58f8bf933cd8

Testando o botão deletar :

Ao clicar no botão deletar , ele perguntará se tem certeza de que deseja excluir :

<img width="1915" height="407" alt="Captura de tela 2025-09-22 183246" src="https://github.com/user-attachments/assets/c02c91ab-3dd4-46fb-b298-b5a7c1cd142c" />

link da imagem : https://github.com/user-attachments/assets/c02c91ab-3dd4-46fb-b298-b5a7c1cd142c

ao clicar em ok o produto será excluido 

Testando o cadastro de analista :

realize o cadastro como analista :

<img width="749" height="878" alt="Captura de tela 2025-09-22 183620" src="https://github.com/user-attachments/assets/777943ba-dfaf-48c7-b629-a8b7f9ded0a0" />

link da imagem :

https://github.com/user-attachments/assets/777943ba-dfaf-48c7-b629-a8b7f9ded0a0

clique em cadastrar , e será redirecionado para a página login novamente :

<img width="1072" height="806" alt="Captura de tela 2025-09-22 183821" src="https://github.com/user-attachments/assets/62dda74e-dac0-414d-a6c9-a0c37aeaf424" />

link da imagem : https://github.com/user-attachments/assets/62dda74e-dac0-414d-a6c9-a0c37aeaf424

realizando o login ele direciona para a página de gerenciamento do sistema :

<img width="1899" height="428" alt="Captura de tela 2025-09-22 183944" src="https://github.com/user-attachments/assets/ef73a5e3-50df-43c3-a2c2-bd19a3cccf75" />

link da imagem : https://github.com/user-attachments/assets/ef73a5e3-50df-43c3-a2c2-bd19a3cccf75

como mencionado no escopo o analista só poderá realizar a adição de produto , ao clicar em adicionar produto :

<img width="825" height="682" alt="Captura de tela 2025-09-22 184709" src="https://github.com/user-attachments/assets/39d528d1-b24d-4ef2-8f2b-c72eee9dd04e" />

link de imagem : https://github.com/user-attachments/assets/39d528d1-b24d-4ef2-8f2b-c72eee9dd04e

ao clicar em salvar o produto será adicionado :

<img width="1912" height="528" alt="Captura de tela 2025-09-22 184730" src="https://github.com/user-attachments/assets/04744737-f692-42d3-bb19-4f7445527f96" />

link da imagem : https://github.com/user-attachments/assets/04744737-f692-42d3-bb19-4f7445527f96

ao clicar em botão buscar , digite os dados para busca e clique em buscar  :

<img width="1911" height="400" alt="Captura de tela 2025-09-22 185434" src="https://github.com/user-attachments/assets/09859462-066f-4dfe-a653-8e5bd1eb30d6" />

link da imagem : https://github.com/user-attachments/assets/09859462-066f-4dfe-a653-8e5bd1eb30d6

e será selecionado o valor para a busca da tabela de produtos

e como última funcionalidade tanto para analista como para supervisor o botão sair será direcionado a página login , com o botão para direcionar a página de registro e de registro para direcionar a página de login .




























