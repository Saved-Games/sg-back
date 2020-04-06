# sv-back

Back end do Saved Games, desenvolvido em Node JS.

# Estrutura do projeto

## Config

Na pasta config ficará todos os arquivos de configuração, é onde configuramos o express e demais dependências do servidor.

## Controllers

Camada de controle, manipula as requisições dos usuários e envia os dados para o Model.
Valida as requisições dos usuários bem como regras de autenticação e autorização.

## Models

Regras de negócio. 

## Services

Utilitários, funções e códigos reutilizados por mais classes da aplicação.

## Routes

Rotas referentes a aplicação.

## Dev server

npm start