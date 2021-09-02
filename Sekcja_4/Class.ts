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
    firstName: string;
    email: Email;
    constructor(name: string, email: Email) {
      this.firstName = name;
      this.email = email;
    }
    toString = () => {
      return `${this.firstName} has email: ${this.email.toString()}`;
    };
  }

  const michal = new Person("Michal", new Email("michal", "kurs_ts.pl"));
  console.log(michal.toString());
}
