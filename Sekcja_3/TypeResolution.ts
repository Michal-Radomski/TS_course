{
  interface Person {
    age: number;
    name: string;
    email?: string;
  }

  interface Pet {
    age: number;
    name: string;
    breed?: string;
  }
  let michal: Person = {
    name: "Michal",
    age: 40,
    email: "email@email.pl",
  };
  let misia: Pet = {
    name: "Misia",
    age: 1,
    breed: "dog",
  };

  michal = misia; // Obowiązkowe pole w obu interface są takie same
}
