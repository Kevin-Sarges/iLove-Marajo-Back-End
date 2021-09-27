import request from 'supertest';
import { app } from '../app';
import { connection } from '../database/connect';

describe('Teste das rotas Post da Aplicação', () => {
  it('Craindo Nova Cidade', async () => {
    const response = await request(app).post('/criar-cidade').send({
      nome_cidade: 'Cidade teste'
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('Listando todas as cidades', async () => {
    const response = await request(app).get('/cidades');

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({});
  });

  it('Buscando uma cidade pelo nome', async () => {
    const response = await request(app)
      .get('/cidades/cidade')
      .query('nome_cidade=Cidad');

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({});
  })
});

describe('Testando rotas de local', () => {
  it('Craindo Novo Local', async () => {
    const response = await request(app).post('/cidades/1/criar-local').send({
      local: 'praia',
      nome_local: 'praia teste',
      foto: 'http://localhost:3000/image.png',
      lat: '1.7264274724',
      lon: '0.3526634747',
      descricao: 'aaaaaaaaaaaaaaaaaa',
      id_cidade: 1
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('id_cidade');
  });

  it('Lista os locais de um municipio', async () => {
    const response = await request(app).get('/cidades/1/locais');

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({});
  });

  it('Buscando um local', async () => {
    const response = await request(app)
      .get('/cidades/1/local')
      .query('local=praia')

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({});
  });

  it('Buscando um local pelo nome', async () => {
    const response = await request(app)
      .get('/cidades/1/local/nome')
      .query('nome_local=pra');

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({});
  });
});

describe('Testando rotas de avaliação', () => {
  it('Craindo Novo Local', async () => {
    const response = await request(app).post('/avaliacao/1/avaliar').send({
      nome_usuario: 'João',
      nota: 4.5,
      comentario: 'bbbbbbbbbbbbbb',
      id_local: 1
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('id_local');
  });

  it('Listando as avaliações de um local', async () => {
    const response = await request(app).get('/avaliacao/1/avaliacoes');

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({});
  });

  afterAll(() => {
    connection.close();
  });
});