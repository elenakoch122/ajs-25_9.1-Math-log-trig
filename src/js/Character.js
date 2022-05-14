export default class Character {
  constructor() {
    this.attackPower = 100;
    this.defence = 40;
  }

  set attack(distance) {
    this.attackPower *= (1 - (distance - 1) / 10);
  }

  get attack() {
    return this.attackPower;
  }

  set stoned(distance) {
    this.attack = distance;
    this.attackPower = this.attack - Math.round(Math.log2(distance)) * 5;
  }

  get stoned() {
    return this.attackPower;
  }
}
