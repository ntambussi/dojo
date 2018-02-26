import { expect } from 'chai';
import Dojo from '../main/Dojo';

describe('dojo', () => {
  it('should return the correct sensei name', () => {
    const dojo = new Dojo({
      sensei: 'Diego'
    });

    const expected = '{"sensei":"Diego"}';

    expect(dojo.toJSON()).to.be.equal(expected);
  });
});