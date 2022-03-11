
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
}