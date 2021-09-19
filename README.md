# Documentação

## Tecnologias usadas

- Node.

- Express.

- Sequelize.

## Heroku URL Base

`https://back-end-ilove-marajo.herokuapp.com/`

### Rotas para cidades:

As rotas de cidades são munito importantes para o funcionamento da outras rotas.

- Listando todos os cidades: `http://localhost:3000/cidades` => lista todos as cidade existentes.

- Pesquisando por uma unica cidade:`http://localhost:3000/cidades/cidade?nome_cidade=Nome da cidade` => busca um cidade pelo nome dela.


### Rotas para locais:

Obs: Todas essas rotas tem um id de uma cidade que é definido no cadastro de locais, se por um acaso o usuario quiser busca locais eu um determinada cidade, e esta não cidade estiver cadastradade no app ele a rota não ira funcionar de acordo com o esperado dela. ele nao ira funcionar cado você não defina ela na rota.
Ex: `http://localhost:3000/cidades/1/locais` nesse exemplo ele vai busca os todos os locais do cidade que esta com salvo com o id = 1.

- Listando todas os locais de uma cidade: `http://localhost:3000/cidades/id_cidade/locais` => essa rota pode lista todos os locais de uma cidade unica cidade, basta essa cidade esta cadastrada no banco de dados.

- Pesquisando por um local: `http://localhost:3000/cidades/id_cidade/local?local=praia` => basta você digitar o local que voce deseja na query que ela irá fazer a busca por esses locais que existem no banco de dados Ex: Praia, Pousadas e etc...

- Pesquisando pelo nome do local: `http://localhost:3000/cidades/id_cidade/local/nome?nome_local=Nome do local` => nesta rota você pode fazer as buscas pelo nome de um local de um determinada cidade(o id que esteja na rota).

## Rotas de Avaliação: 

Se na rota de locais o principal era o id da cidade nas rotas de avaliaçao já é diferente, porque aqui o principal é o id do local para poder fazer as buscas e principalmente fazer uma avalicação.

- Listando avaliações de um local: `http://localhost:3000/avaliacao/id_local/avaliacoes` => esta rota irá busca todas as avaliações de um local pelo seu id.

- Avaliar um local: `http://localhost:3000/avaliacao/id_local/avaliar` => essa rota é para avaliar um local, importante te o id do local na rota.
Ex post: 
```` json
{
  "nome_usuario": "Kevin",
  "nota": 4.5,
  "comentario": "Blá, Blá, Blá....."
}
````
