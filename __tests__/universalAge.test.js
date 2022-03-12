import UniversalAge from '../src/js/universalAge.js';
describe('universalAge', () => {
  let testUniversalAge;
  beforeEach(()=>{testUniversalAge = new UniversalAge(24, "male", "no", "healthy");
  });

test('should correctly create a universalAge object with one attribute', () => {
      expect(testUniversalAge.earthAge).toEqual(24);
      expect(testUniversalAge.gender).toEqual("male");
      expect(testUniversalAge.smoker).toEqual("no");
      expect(testUniversalAge.lifeStyle).toEqual("healthy");
      expect(testUniversalAge.lifeExp).toEqual(76);
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

  test('should correct calculate life expectency based on gender, smoking status, and lifestyle', ()=> {
    let smokingHealthyDude = new UniversalAge(24, "male", "yes", "healthy");
    let smokingLazyDude = new UniversalAge(80, "male", "yes", "no");
    let noSmokeLazyDude = new UniversalAge(24, "male", "no", "no");
    let smokingHealthyLady = new UniversalAge(24, "female", "yes","healthy");
    let smokingLazyLady = new UniversalAge(80, "female", "yes", "no");
    let noSmokeHealthyLady= new UniversalAge (24, "female", "no", "healthy");
    let noSmokeLazyLady = new UniversalAge (24, "female", "no", "no");
    testUniversalAge.lifeExpectency();
    smokingHealthyDude.lifeExpectency();
    smokingLazyDude.lifeExpectency();
    noSmokeLazyDude.lifeExpectency();
    smokingHealthyLady.lifeExpectency();
    smokingLazyLady.lifeExpectency();
    noSmokeHealthyLady.lifeExpectency();
    noSmokeLazyLady.lifeExpectency();
    expect(testUniversalAge.lifeExp).toEqual(83);
    expect(smokingHealthyDude.lifeExp).toEqual(73);
    expect(smokingLazyDude.lifeExp).toEqual(66);
    expect(noSmokeLazyDude.lifeExp).toEqual(76);
    expect(smokingHealthyLady.lifeExp).toEqual(78);
    expect(smokingLazyLady.lifeExp).toEqual(71);
    expect(smokingLazyLady.earthAge).toEqual(80);
    expect(noSmokeHealthyLady.lifeExp).toEqual(88);
    expect(noSmokeLazyLady.lifeExp).toEqual(81);
  });

  test('should correct calculate time a person has left on earth based on life expetency calculation. If they have exceeded it, it will return that number.', ()=> {
    let smokingLazyLady = new UniversalAge(80, "female", "yes", "no");
    expect(testUniversalAge.timeLeft()).toEqual(59);
    expect(smokingLazyLady.timeLeft()).toEqual("9 years ago!")
  });
})