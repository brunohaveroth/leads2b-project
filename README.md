# leads2b-project

## Sobre o projeto
Sistema feito com Vue.js, Node.js e SQLite.

O projeto permite fazer o controle de colaboradores e projetos de uma empresa.
Ao cadastrar um colaborador é possível informar todas as competências profissionais do mesmo, como por exemplo o nível de conhecimento em node.js, vue.js, Photoshop e etc.

Durante as etapas de cadastro também é possível adicionar uma escala de 1 até 10 ao nível de conhecimento do colaborador em cada competência profissional informada.

No cadastro de projetos também é possível informar quais competências os profissionais participantes devem possuir. Desta forma, o sistema dará sugestões de colaboradores ideais na hora de adicionar participantes ao projeto.

## Instalação
`git clone <repository-url>`


### Utiizando Docker
`cd leads2b-project`

`docker-compose build`

`docker-compose up`

Acessar  http://localhost:8080.

### Client
`cd leads2b-project/client`

`npm install`

`npm run serve`

Acessar  http://localhost:8080.

### Server
`cd leads2b-project/server`

`npm install`

`node app.js`

Server disponível em  http://localhost:3000.


Compatibilidade
------------------------------------------------------------------------------
* Node.js v12
