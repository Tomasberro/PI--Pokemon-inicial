const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
      it('should work when its a valid hp', () => {
        Pokemon.create({ hp: 40 });
      });
      it('should work when its a valid attack', () => {
        Pokemon.create({ attack: 38 });
      });
      it('should work when its a valid defense', () => {
        Pokemon.create({ defense: 35 });
      });
      it('should work when its a valid speed', () => {
        Pokemon.create({ speed: 30 });
      });
      it('should work when its a valid height', () => {
        Pokemon.create({ height: 8 });
      });
      it('should work when its a valid weight', () => {
        Pokemon.create({ weight: 120 });
      });
    });
  });
});
