# sv-back

Back end do Saved Games, desenvolvido em Node JS.

# Estrutura do projeto

## Config

Na pasta config ficará todos os arquivos de configuração, é onde configuramos o express e demais dependências do servidor.

## Controllers

Camada de controle, manipula as requisições dos usuários e envia os dados para o Model.
Valida as requisições dos usuários bem como regras de autenticação e autorização.

## Models

Leitura, escrita e validação dos dados. Nesta camada são implementadas as regras de negócios.

## Services

Utilitários, funções e códigos reutilizados por mais classes da aplicação.

## Routes

Rotas referentes a aplicação.

## Database

## Migrations

Versionamento das tabelas do BD, nela consta o código da criação da tabela do banco.

sequelize migration:create --name create-users

## Criação da tabela no banco

sequelize db:migrate

## Model do Sequelize

É a representação da tabela do banco de dados.

## Dev server

npm start