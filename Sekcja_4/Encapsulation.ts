{
  // Enkapsulacja
  class Email {
    private name: string;
    private domain: string;

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
    private email: Email;
    private preferences: string[];
    constructor(name: string, email: Email) {
      this.firstName = name;
      this.email = email;
      this.preferences = [];
    }
    public toString = () => {
      return `${this.firstName} has email: ${this.email.toString()}`;
    };
    // public setEmail(email: Email): void {
    //   this.email = email;
    // }
    public getEmail(): Email {
      console.log(32, "Email was read");
      return this.email;
    }
    public getPreferences(): string[] {
      return this.preferences;
      // return Object.assign([], this.preferences); //zwraca kopię tablicy
    }
  }

  const michal = new Person("Michal", new Email("michal", "kurs_ts.pl"));
  // console.log(michal.toString());
  // michal.email = new Email("michalRad", "kurs_node.pl");
  console.log(44, michal.toString());
  console.log(45, michal.getEmail());
  console.log(michal.getPreferences());
}
