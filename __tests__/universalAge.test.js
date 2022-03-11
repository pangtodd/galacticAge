import UniversalAge from '../src/js/universalAge.js';

describe('universalAge', () => {

test('should correctly create a universalAge object with one attribute', () => {
    const testUniversalAge = new UniversalAge(24);
      expect(testUniversalAge.earthAge).toEqual(24);
  });
})

//    expect()
//     expect(livingThingOne.attackPower).toEqual(80);
//     expect(livingThingOne.agility).toEqual(80);
//   });
//   test('should correctly add a random number to the health & attack power', () => {
//     // const dieRollHealth = new LivingThing.heroStartingStats();
//     const dieRollHealth = new LivingThing;
//     dieRollHealth.heroStartingStats();
//     expect(dieRollHealth.health).toBeLessThan(13);
//     expect(dieRollHealth.attackPower).toBeLessThan(7)
