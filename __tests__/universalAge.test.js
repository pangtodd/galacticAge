import UniversalAge from '../src/js/universalAge.js';
describe('universalAge', () => {

test('should correctly create a universalAge object with one attribute', () => {
    const testUniversalAge = new UniversalAge(24);
      expect(testUniversalAge.earthAge).toEqual(24);
  });

  test('should correctly calculate Mercury age based on earth age', ()=> {
    const testUniversalAge= new UniversalAge(24);
    testUniversalAge.mercuryTime();
      expect(testUniversalAge.mercuryAge).toEqual(5.76);
  });
  test('should correct calculate Venus age based on earth age', ()=> {
    const testUniversalAge= new UniversalAge(24);
    testUniversalAge.venusTime();
    expect(testUniversalAge.venusAge).toEqual(14.88);
  });
  test('should correct calculate Mars age based on earth age', ()=> {
    const testUniversalAge= new UniversalAge(24);
    testUniversalAge.marsTime();
    expect(testUniversalAge.marsAge).toEqual(45.12);
  });

})