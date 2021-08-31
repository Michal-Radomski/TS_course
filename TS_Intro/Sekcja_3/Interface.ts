{
  let michal: {name: string; age: number; email?: string} = {
    //email jest opcjonalny
    name: "Michal",
    age: 32,
  };

  michal = {name: "Michal", age: 40, email: "test@op.pl"};

  let kinga: {name: string; age: number; email?: string} = {
    name: "Kinga",
    age: 34,
  };
}

function sendEmail(people: {name: string; age: number; email?: string}[]) {
  people
    .filter((person) => person.email)
    .forEach((person) => {
      console.log(`Sending email ${person.name} to ${person.email}`);
    });
}

// Funkcja strzałkowa
const sendEmail2 = (
  people: {name: string; age: number; email?: string}[]
): {name: string; age: number; email?: string}[] => {
  people
    .filter((person) => person.email)
    .forEach((person) => {
      console.log(`Sending email ${person.name} to ${person.email}`);
    });
  return people;
};

{
  // Interface
  interface Person {
    name: string;
    age: number;
    email?: string;
    toString: () => string; // Metoda nie jest sprawdzana czy jest obowiązkowa
  }

  const sendEmail3 = (people: Person[]): Person[] => {
    people
      .filter((person) => person.email)
      .forEach((person) => {
        console.log(`Sending email ${person.name} to ${person.email}`);
      });
    return people;
  };
}
