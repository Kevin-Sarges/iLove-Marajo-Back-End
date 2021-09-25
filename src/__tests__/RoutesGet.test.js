import request from 'supertest';
import { app } from '../app';

describe('Testando rotas Get da Aplicação', () => {
  it('Listando Todas as cidades', async() => {
    const response = await request(app).get('/cidades');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
  });

  it('Buscando um municipio pelo nome', async () => {
    const response = await request(app).get('/cidades/cidade').query('nome_cidade=Cidade');
    
    //expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
  });
});