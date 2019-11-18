#CENTRAL SYSTEM MOBILE APP

## Configuraçao de Ambiente 

### Installing NodeJS and yarn
	    1) Primeiro baixe o [node](https://nodejs.org/en/download/) e instale na sua maquina
	    2) Em seguida, digite o seguinte comando no terminal, dentro da pasta raiz do projeto:  	brew install yarn

### Installing Sequelize 
		1) Na pasta raiz do projeto rode o comando:yarn add sequelize

### Installing Mysql 
		1) Na pasta raiz do projeto rode o comando: yarn add mysql2

### Creating Database Tabels
		1) No arquivo src/config/database.js, configure a conexao com seu banco de dados (PostGres ou Mysql)
		2) Em seguida, dentro da pasta raiz rode o seguinte comando: yarn sequelize db:migrate

## Steps to run the server
		1) Na pasta da raiz do projeto, digite o seguinte comando: yarn dev

