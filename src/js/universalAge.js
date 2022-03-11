
export default class UniversalAge {
  constructor(earthAge) {
    this.earthAge = earthAge
  };

  mercuryTime(ageValue) {
    let mercuryConversion = ageValue * .24;
    return +mercuryConversion.toFixed(2);
  }

  venusTime(ageValue) {
    let venusConversion= ageValue * .62;
    return +venusConversion.toFixed(2);
  }

  marsTime(ageValue) {
    let marsConversion= ageValue * 1.88;
    return +marsConversion.toFixed(2);
  }

  jupiterTime(ageValue) {
    let jupiterConversion= ageValue * 11.86;
    return +jupiterConversion.toFixed(2);
  }

}