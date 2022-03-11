import UniversalAge from '../src/js/universalAge.js';
describe('universalAge', () => {
  let testUniversalAge;
  beforeEach(()=>{testUniversalAge = new UniversalAge(24);
  });

test('should correctly create a universalAge object with one attribute', () => {
      expect(testUniversalAge.earthAge).toEqual(24);
  });

  test('should correctly calculate Mercury age based on earth age', ()=> {
    expect(testUniversalAge.mercuryTime(testUniversalAge.earthAge)).toEqual(5.76);
  });
  test('should correct calculate Venus age based on earth age', ()=> {
    expect(testUniversalAge.venusTime(testUniversalAge.earthAge)).toEqual(14.88);
  });
  test('should correct calculate Mars age based on earth age', ()=> {
    const testUniversalAge= new UniversalAge(24);
    expect(testUniversalAge.marsTime(testUniversalAge.earthAge)).toEqual(45.12);
  });
  test('should correct calculate Jupiter age based on earth age', ()=> {
    expect(testUniversalAge.jupiterTime(testUniversalAge.earthAge)).toEqual(284.64);
  });

})