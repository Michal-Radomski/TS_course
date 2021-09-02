// Void

function printText(text: string): void {
  console.log(text);
}

let person2: void = undefined; // undefined -> brak wartości (zupełnie nic -> czegoś nie ma); null -> jest pole ale brak wartości -> jest ale nie wartości

{
  // Unknown
  let xx: unknown;
  xx = "Michal";
  xx = 33;
  xx == {};
  xx = () => {};
  if (typeof xx === "number") {
    let xage: number = xx;
  }

  if (typeof xx === "function") {
    xx();
  }
}
