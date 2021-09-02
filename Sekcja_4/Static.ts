{
  class Email {
    name: string;
    domain: string;
    constructor(name: string, domain: string) {
      this.name = name;
      this.domain = domain;
    }
    toString = () => {
      return `${this.name}@${this.domain}`;
    };
  }

  class Person {
    public static info = "Text"; // statyczna zmienna jest współdzielona w obrębie klasy!
    public firstName: string;
    public email: Email;
    constructor(name: string, email: Email) {
      this.firstName = name;
      this.email = email;
    }
    public toString = () => {
      return `${this.firstName} has email: ${this.email.toString()}`;
    };
  }
  Person.info; // static bez użycia instancji (obiektu)
  const person = new Person("Mich", new Email("mich", "op.pl"));
  //- person.info // błąd na obiekcie
}

// ------------------------------------------------------

{
  class Email {
    name: string;
    domain: string;
    constructor(name: string, domain: string) {
      this.name = name;
      this.domain = domain;
    }
    toString = () => {
      return `${this.name}@${this.domain}`;
    };
  }

  class Person {
    public static info = "Text";
    public static firstName: string;
    public email: Email;
    constructor(name: string, email: Email) {
      Person.firstName = name;
      this.email = email;
    }
    public toString = () => {
      return `${Person.firstName} has email: ${this.email.toString()}`;
    };
  }
  Person.info; // static bez użycia instancji (obiektu)
  const person = new Person("Mich", new Email("mich", "op.pl"));
  //- person.info // błąd na obiekcie
}
