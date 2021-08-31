// Typ string
let firstName: string = "Michal";
let someText: string = `to jest moje imię: ${firstName}`;

// Typ liczbowy
let age: number = 40;
let weight: number = 78.5;
let imaginarySalary: number = 1_000_000_000;

// Typ logiczny
let male: boolean = true;
let female: boolean = false;

let x: number = 23;

// Tablice
let arr: number[] = [];
arr.push(33);

// Krotka
const tuple: [string, number] = ["Michal", 40];

// Any -> raczej nie używać, przydaje się przy migracji z JS do TS
let xx: any;
xx = "Michal";
xx = 33;
xx == {};
xx = () => {};

// Funkcje
function sum(a: number, b: number): number {
  return a + b;
}

let s: number = sum(5, 5);

const suma2 = (a: number, b: number): number => a + b;
suma2(5, 5);

// Łączenie typów -> przydaje się przy migracji
let ux: number | string | boolean;
ux = 5;
ux = "X";
ux = true;

// Typy jako zbiory wartości
{
  let age: number;
  let name: string;
  let someVar: string | number;

  let dice: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  dice = 6;
  let dontChangeMe: "dom";
  dontChangeMe = "dom";

  let flagIsSet: boolean = true;
  let anotherFlag: true | false = false;
  anotherFlag = flagIsSet;
}
