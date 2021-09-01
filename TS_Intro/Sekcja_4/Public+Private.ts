{
  // Public -> domyślny typ
  class Email {
    public name: string;
    public domain: string;
    constructor(name: string, domain: string) {
      this.name = name;
      this.domain = domain;
    }
    public toString = () => {
      return `${this.name}@${this.domain}`;
    };
  }

  class Person {
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

  const michal = new Person("Michal", new Email("michal", "kurs_ts.pl"));
  // console.log(michal.toString());
  michal.email = new Email("michalRad", "kurs_node.pl");
  console.log(michal.toString());
}

{
  // Private -> tylko z wnętrza klasy -> błędy bo private
  class Email {
    private name: string;
    private domain: string;
    constructor(name: string, domain: string) {
      this.name = name;
      this.domain = domain;
    }
    private toString = () => {
      return `${this.name}@${this.domain}`;
    };
  }

  class Person {
    private firstName: string;
    private email: Email;
    constructor(name: string, email: Email) {
      this.firstName = name;
      this.email = email;
    }
    private toString = () => {
      return `${this.firstName} has email: ${this.email.toString()}`;
    };
  }

  const michal = new Person("Michal", new Email("michal", "kurs_ts.pl"));
  // console.log(michal.toString());
  michal.email = new Email("michalRad", "kurs_node.pl");
  console.log(michal.toString());
}
