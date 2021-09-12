const rutaPokemon= require('../routes/pokemons.js')
const agent2= session(rutaPokemon)
const { expect } = require('chai');
const session = require('supertest-session');
const { Pokemon, conn } = require('../../src/db.js');
const pokemons = require('../../src/routes/pokemons');

const agent = session(pokemons);
const ejemplo = {
  name: 'Pikachu',
  id: 1
};

describe('routes', () => {
    before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
    beforeEach(() => Pokemon.sync({ force: true })
      .then(() => Pokemon.create(ejemplo)));
    describe('GET /pokemons/:id', () => {
      it('should get 200', () =>
        agent.get('/pokemons/1').expect(200)
      );
    });
   agent.expect(function(res) {
        expect(res.body).toEqual([{name: 'Pikachu', id: 1}]
        );
      });
    
  });