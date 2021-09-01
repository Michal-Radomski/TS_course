{
  class Weapon {
    private name: string;
    private damage: number;
    private ammoLeft: number;
    private ammoMax: number;
    private rateOfFire: number;
    private range: number;
    constructor(name: string, damage: number, ammoLeft: number, ammoMax: number, rateOfFire: number, range: number) {
      this.name = name;
      this.damage = damage;
      this.ammoLeft = ammoLeft;
      this.ammoMax = ammoMax;
      this.rateOfFire = rateOfFire;
      this.range = range;
    }
  }

  abstract class Unit {
    private name: string;
    private hitPointsLeft: number;
    private maxHitPoints: number;
    private moveDistance: number;
    private weapons: Weapon[];
    constructor(name: string, hitPointsLeft: number, maxHitPoints: number, moveDistance: number, weapons: Weapon[]) {
      this.name = name;
      this.hitPointsLeft = hitPointsLeft;
      this.maxHitPoints = maxHitPoints;
      this.moveDistance = moveDistance;
      this.weapons = weapons;
    }
  }

  class Infantry extends Unit {
    constructor(name: string, hitPointsLeft: number, maxHitPoints: number, moveDistance: number, weapons: Weapon[]) {
      super(name, hitPointsLeft, maxHitPoints, moveDistance, weapons);
    }
  }

  class Vehicle extends Unit {
    private maxFuel: number;
    private fuelConsumptionPerMove: number;
    private fuelLeft: number;
    constructor(
      name: string,
      hitPointsLeft: number,
      maxHitPoints: number,
      moveDistance: number,
      weapons: Weapon[],
      maxFuel: number,
      fuelConsumptionPerMove: number,
      fuelLeft: number
    ) {
      super(name, hitPointsLeft, maxHitPoints, moveDistance, weapons);
      this.maxFuel = maxFuel;
      this.fuelConsumptionPerMove = fuelConsumptionPerMove;
      this.fuelLeft = fuelLeft;
    }
  }
}
