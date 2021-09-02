// Stwórz funkcje przyjmującą jeden parametr, typ tekstowy
// funkcja zwara typ tekstowy
// jesli parametr zaczyna sie od ts to zwroc bez zmian
// w innym wypadku dodaj 'ts' na poczatku

function test(str: string): string {
  if (str.slice(0, 2) === "ts") {
    return str;
  } else {
    return "ts" + str;
  }
}

console.log(14, test("ts_file"));
console.log(15, test("_file"));
