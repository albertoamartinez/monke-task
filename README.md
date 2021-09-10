# monke-task 🤖

monke-task é um bot de discord feito com NodeJS e typescript. A Função do bot é ajudar alunos no servidor do discord da faculdade a se organizarem com relação as tarefas. Atualmente o bot possui 2 funcionalidades. É possível utilizar o comando "/tarefas" para listar todas as tarefas atribuídas por professores. O bot também notifica todos do servidor do discord sempre que uma tarefa nova é adicionada.

---

## Sumário 📖

- [Comandos 👨‍💻](#comandos-)
- [Funcionalidades 🛠✨](#funcionalidades-)
- [Como-funciona 🧰](#como-funciona-)
- [Instalação 👷‍♂️](#instalação-%EF%B8%8F)
- [Contato 💼](#contato-)

## Comandos 👨‍💻

Atualmente existem 3 comandos disponíveis para o bot:

- `/tarefas` - Lista todas as tarefas atribuídas por professores, assim como suas respectivas datas de vencimento e descrição.
- `/server` - Lista informações do servidor em que ele está atualmente.
- `/user` - Retorna informações sobre o usuário utilizando o comando.

## Funcionalidades 🛠✨

### Funcionalidade de notificação :bell:
Usuários são notificados sempre que uma tarefa é adicionada ou modificada.
![notification](https://user-images.githubusercontent.com/39469125/132856636-45d1f56b-ea26-4f63-80dd-af3cc365d5ed.png)

### Funcionalidade de listagem de tarefas 📑
Usuários podem usar um comando para listar todas as tarefas.
![tasks](https://user-images.githubusercontent.com/39469125/132856639-f597c548-14d0-4168-a7ad-a3c8c222d877.png)


## Como Funciona 🧰

 O bot lista todas as tarefas dentro de um projeto do todoist. Ele utiliza a API do todoist para fazer uma requisição do tipo GET da API do [todoist](https://developer.todoist.com/rest/v1/#overview) para ter acesso as tarefas. Toda vez que esse projeto é modificado com a adição de novas tarefas ou modificação de tarefas existentes, o bot notifica os usuários no discord.
 
 ## Exemplo de projeto no todoist
 ![todoistTasks](https://user-images.githubusercontent.com/39469125/132858748-f63568b5-c00c-4093-b9c4-a8af2f92dac6.png)

---

## Instalação 👷‍♂️

### Configurando .env

criar arquivo chamado .env, no mesmo modelo de .env.example, e preenchê-lo com client_id da sua aplicação do discord, o token do seu bot de discord, assim como seu token de autenticação do todoist.

### Instalando dependências

Dentro do projeto, execute:
`yarn` 

### Executando a API em modo de desenvolvimento

`yarn dev`

--- 

## Contato 💼

| <a href="https://github.com/stelianok" target="_blank">**Kauã Steliano**</a> 
| :---: 
| [![Name](https://avatars2.githubusercontent.com/u/39469125?s=460&u=97e778a861a7a42bee1b16f6be1c80467c50c1d1&v=4)](https://github.com/stelianok)    

### Kauã Steliano

Twitter:
[@Steli4nok](https://twitter.com/Steli4nok)
LinkedIn:
[Kauã Alexandro Steliano](https://www.linkedin.com/in/kauã-steliano-107620181/)
E-mail:
stelianok@gmail.com
Github: 
[Stelianok](https://github.com/stelianok)




