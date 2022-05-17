export default class Character {
  constructor() {
    this.distance = 2;
  }

  set stoned(value) {
    this.isStoned = value;
  }

  get stoned() {
    return this.isStoned;
  }

  set attack(value) {
    this.attackPower = value;
  }

  get attack() {
    let attackCalculate = this.attackPower * (1 - (this.distance - 1) / 10);
    if (this.stoned) {
      attackCalculate -= Math.round(Math.log2(this.distance)) * 5;
    }
    return attackCalculate;
  }
}
