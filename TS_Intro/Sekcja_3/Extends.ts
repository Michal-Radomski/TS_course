{
  interface Person {
    name: string;
    age: number;
    email?: string;
  }
  interface Child extends Person {
    favoriteColor: string;
  }
  interface Adult extends Person {
    favoriteBeverage: string;
  }
  const alicja: Child = {
    name: "Alicja",
    age: 5,
    favoriteColor: "Pink",
  };
  let someone: Person = alicja;
  interface Driver {}

  interface CoffeeDrinker extends Person, Adult, Driver {}
}
