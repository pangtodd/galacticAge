
export default class UniversalAge {
  constructor(earthAge) {
    this.earthAge = earthAge
  };

  mercuryTime() {
    let mercuryConversion = this.earthAge * .24;
    this.mercuryAge = +mercuryConversion.toFixed(2);
  }

  venusTime() {
    let venusConversion= this.earthAge * .62;
    this.venusAge = +venusConversion.toFixed(2);
  }

  marsTime() {
    let marsConversion= this.earthAge * 1.88;
    this.marsAge = +marsConversion.toFixed(2);
  }

  jupiterTime() {
    let jupiterConversion= this.earthAge * 11.86;
    this.jupiterAge = +jupiterConversion.toFixed(2);
  }

}