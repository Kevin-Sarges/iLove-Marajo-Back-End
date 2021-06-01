# Documentação

## Tecnologias usadas

- Node.

- Express.

- Knex.

## Heroku URL Base

`https://back-end-ilove-marajo.herokuapp.com/`

### Rotas Municipios:

- Listando todos os municipios: `http://localhost:3000/municipios`

- Pesquisando por uma unico municipio:`http://localhost:3000/municipio?nome_municipio=Nome do municipio`


### Rotas Praias:

- Listando todas as praias: `http://localhost:3000/praias`

- Pesquisando por uma unica praia: `http://localhost:3000/praia?nome_praia=Nome da praia`

- Pesquisando praias de um municipio: `http://localhost:3000/praias-municipio?municipio=Nome do municipio`

## Rotas Avaliação: 

- Listando avaliações de uma praia: `http://localhost:3000/avaliacoes-praia?id_local=Id da praia`

- Avaliar uma praia: `http://localhost:3000/avaliar-praia` { post avaliação: nota, comentario, id_local }
