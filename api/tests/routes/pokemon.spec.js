/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');
const rutaback= require('../../src/routes/pokemons')
const agent = session(app);
const agent2 = session(rutaback)
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should get 200', () =>
      agent.get('/pokemons').expect(200)
    );
  });
})
  const pokemon2 = {
    name: 'Tomas',
    hp: 40
  };
  
  describe('Pokemon routesback', () => {
    before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
    beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon2)));
    describe('POST /pokemons', () => {
  it('POST agregar un nuevo pokemon y devuelve el nombre y hp del pokemon agregado', function() {
     agent2.post('/pokemons')
      .send(pokemon2)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function(res) {
        expect(res.body).toEqual("Tomas", 40);
      });
  });
});
}); 