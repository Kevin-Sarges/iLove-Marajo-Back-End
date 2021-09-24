import request from 'supertest';
import { app } from '../app';
import { connection } from '../database/connect';

describe('Teste das rotas Post da Aplicação', () => {
  it('Craindo Nova Cidade', async () => {
    const response = await request(app).post('/criar-cidade').send({
      nome_cidade: 'Cidade teste'
    });

    console.log(response.body);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({});
  });

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

  afterAll(() => {
    connection.close();
  });
})