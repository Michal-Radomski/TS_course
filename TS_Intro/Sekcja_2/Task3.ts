// Stwórz funkcje, która zwróci wynik dodawana dwóch liczb,
// przyjmujemy jednak, że parametry do funkcji przychodzą z
// zewnątrz, nie przeszły żadnej kontroli

function sum2numbers(a: any, b: any): number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error(`${a} or/and ${b} is not a number`);
    // console.log(`${a} or/and ${b} is not a number`);
  }
}

console.log(14, sum2numbers(3, 5));
console.log(15, sum2numbers("Michal", "Kasia"));
