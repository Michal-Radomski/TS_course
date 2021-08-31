interface Weapon {
  name: string;
  damage: string;
  ammoLeft: number;
  ammoMax: number;
  rateOfFire: number;
  range: number;
}

interface Unit {
  name: string;
  hitPointsLeft: number;
  maxHitPoints: number;
  moveDistance: number;
  weapons: Weapon[];
}

interface Infantry extends Unit {}

interface Vehicle extends Unit {
  fuelLeft: number;
  maxFuel: number;
  fuelConsumptionPerMove: number;
}
