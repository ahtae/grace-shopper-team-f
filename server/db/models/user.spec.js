/* global describe beforeEach it */

const {expect} = require('chai');
const db = require('../index');
const User = db.model('user');

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true});
  });

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody;

      beforeEach(async () => {
        cody = await User.create(    {
            name: 'Cody Tremblay',
            email: 'Brent.Reichel5@yahoo.com',
            password: 'bones',
            mailingAddress: '10533 Pouros Club McLaughlinton, ID',
            billingAddress: '123 Gingerbread Brooklyn, NY 34343',
            phone: '987-232-7337',
        });
      });

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true);
      });

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false);
      });
    }); // end describe('correctPassword')
  }); // end describe('instanceMethods')
}); // end describe('User model')