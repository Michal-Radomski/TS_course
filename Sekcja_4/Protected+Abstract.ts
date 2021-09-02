{
  // Abstrakcja i Polimorfizm
  abstract class Shape {
    abstract area: () => number;
  }

  class Rectangle extends Shape {
    protected a: number;
    protected b: number;
    constructor(a: number, b: number) {
      super();
      this.a = a;
      this.b = b;
    }
    public area = (): number => {
      return this.a * this.b;
    };
  }
  let prostokat: Rectangle = new Rectangle(10, 5);

  class Square extends Rectangle {
    constructor(a: number) {
      super(a, a);
    }
    public toString = (): string => {
      return `Jestem kwadratem o boku ${this.a}`; //może być super.area()
    };
  }
  class Circle extends Shape {
    radius: number;
    constructor(r: number) {
      super();
      this.radius = r;
    }
    public area = (): number => {
      return this.radius * this.radius * Math.PI;
    };
  }

  let kwadrat: Square = new Square(5);
  console.log(41, prostokat.area());
  console.log(42, kwadrat.area());
  console.log(43, kwadrat.toString());
  // wykorzystanie abstract
  const cos: Shape = new Circle(5);
  console.log(46, cos.area());
  const something: Shape = new Square(10);
  console.log(48, something.area());
  const prostokat2: Rectangle = new Square(12);
  console.log(50, prostokat2.area());
  console.log(51, prostokat2.toString());
}
