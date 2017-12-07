import { expect } from 'chai';

import Dojo from '../src/dojo';

describe('#Dojo', () => {
  describe('sensei', () => {
    it('should return the current sensei of the dojo', () => {
      const dojo = new Dojo({ sensei: 'david' });

      expect(dojo.sensei).to.be.equal('david');
    });

    it('should return the default sensei of the dojo', () => {
      const dojo = new Dojo();

      expect(dojo.sensei).to.be.equal('diego');
    });
  });
});
