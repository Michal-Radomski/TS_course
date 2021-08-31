const dice: 1 | 2 | 3 | 4 = 4;
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
  let union: Person | Pet = {
    name: "Michal",
    age: 40,
    email: "cat@cat.com.pl",
    breed: "dog",
  };
  let join: Person & Pet = {
    name: "a",
    age: 3,
    email: "cat@cat.com.pl",
    breed: "cat",
  };
}

// Composition
{
  interface Email {
    name: string;
    domain: string;
  }
  interface Person {
    name: string;
    age: number;
    email: Email;
  }
}
