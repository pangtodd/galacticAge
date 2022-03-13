
export default class UniversalAge {
  constructor(earthAge, gender, smoker, lifeStyle, lifeExp) {
    this.earthAge = earthAge;
    this.gender = gender;
    this.smoker = smoker;
    this.lifeStyle= lifeStyle;
    this.lifeExp = 76;
  }

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

  lifeExpectency(){
    if (this.gender === "female") {
      this.lifeExp = this.lifeExp + 5;
    }
    if (this.smoker === "yes"){
      this.lifeExp = this.lifeExp - 10;
    }
    if (this.lifeStyle === "healthy") {
      this.lifeExp =this.lifeExp + 7;
    }
  }

  timeLeft(){
    this.earthTimeLeft = this.lifeExp - this.earthAge;
  }

  timeCheck(value){
    if (value<0) {
      return Math.abs(value)+" years ago!";
    } else {
      return value;
    }
  }

}