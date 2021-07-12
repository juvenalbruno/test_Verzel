# Teste Prático Fullstack Júnio - Verzel

### Candidato: Juvenal Bruno A. da Silva

---
---

## Tecnologias empregadas:

### Back-end
* NodeJS
* TypeScript
* TypeOrm
* Express
* bcryptJS
* jsonwebtoken
* Cors
* SQLite

> obs.: 
> - Foi utilziado o banco de dados 'SQLite' e gerado um 'arquivo local' de armazenamento visando facilitar a execução do projeto;
> - O arquivo '.sqlite' está contido em: server/src/database/db.sqlite


### Front-end
* ReactJS
* TypeScript
* Axios
* SASS

---
---

## Execução do projeto:

### Back-end:
> - Entre, via terminal, na pasta 'server' do projeto;
```bash
$ cd server
```
> - Instalando as dependências do back-end:
```bash
$ yarn # ou npm install
```

> - Execute o back-end do projeto com:
```bash
$ yarn dev # ou npm run dev
```
---
### Front-end:

> - Entre, via terminal, na pasta 'web' do projeto;
```bash
$ cd web
```
> - Instalando as dependências do front-end:
```bash
$ yarn #ou npm install
```
> - Execute o front-end do projeto com:
```bash
$ yarn start # ou npm run start
```

---
---
## Rotas do projeto:


### Back-end:

> obs.: Requisições do tipo: POST (sem ser de criação de usuário), PUT, DELETE necessitam de autenticação do usuário.

> - Usuário (POST: Criação)
```bash
http://localhost:3333/users
```

> - Login (POST: Authentication)
```bash
http://localhost:3333/login
```

> - Módulos (GET | POST | PUT | DELETE)
```bash
http://localhost:3333/modules
http://localhost:3333/modules/{:id}
```

> - Aulas (GET | POST | PUT | DELETE)
```bash
http://localhost:3333/modules/aulas
http://localhost:3333/modules/aulas/{:id}
```
> - Aulas por ID do módulo(GET)
```bash
http://localhost:3333/modules/aula/{:id}
```

### Front-end:
> obs.: Rotas de administração são privadas e só poderam ser acessadas por meio de autenticação/login.

> - Tela Inicial
```bash
http://localhost:3000/
```

> - Tela de Login
```bash
http://localhost:3000/user/login
```
> - Tela Cadastro
```bash
http://localhost:3000/user/register
```
> - Tela Administração - Cadastro, atualização e remoção de módulo, Criação de aula
```bash
http://localhost:3000/admin
```
> - Tela Administração - Listagem de Aulas por módulo e remoção de Aula
```bash
http://localhost:3000/admin/module
```
> - Tela Administração - Atualização de Aula
```bash
http://localhost:3000/admin/module/aula
```