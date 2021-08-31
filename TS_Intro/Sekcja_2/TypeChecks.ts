{
  let logical: boolean = true;
  let age: number = 3;
  let name: string = "Michal";

  if (typeof age === "number") {
    console.log("age to liczba");
  }
  let something: any;
  if (typeof something === "string") {
    something.length;
  } else if (typeof something === "number") {
    something.toString();
  } else if (typeof something === "function") {
    something();
  }
}
