
export default class UniversalAge {
  constructor(earthAge) {
    this.earthAge = earthAge
  };

  mercuryAge() {
    this.mercuryAge = this.earthAge * .24;
  }

  // heroStartingStats() { //FIND HOW TO CALL ON THIS FUNCTION AND SHOVE VALUES INTO A const hero = new LivingThing()
  //   this.health = diceRoll() * 2
  //   this.attackPower = diceRoll()
  //   this.battleHealth = this.health
  //   this.agility = diceRoll()
  // };

  }