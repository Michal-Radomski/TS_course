{
  // Typy generyczne
  interface WrapType<X> {
    value: X;
  }
  let age: WrapType<number> = {value: 5};
  let michal: WrapType<string> = {value: "michal"};

  // Typy generyczne w funkcji
  function wrap<FooBar>(x: FooBar): WrapType<FooBar> {
    return {
      value: x,
    };
  }
  let age2: WrapType<number> = {value: 5};
  let michal2: WrapType<string> = {value: "michal"};
  wrap<number>(5);
  const numberX: WrapType<number> = wrap<number>(5);
  console.log(19, numberX);
  wrap<string>("michal2");

  interface Person {
    name: string;
    age: number;
    email?: string;
  }

  const person: WrapType<Person> = wrap<Person>({name: "Michal", age: 40});
  console.log(29, person);
}
