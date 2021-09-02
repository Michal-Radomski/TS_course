{
  class Rectangle {
    private a: number;
    private b: number;
    constructor(a: number, b: number) {
      this.a = a;
      this.b = b;
    }
    public area = (): number => {
      return this.a * this.b;
    };
  }
  let prostokat: Rectangle = new Rectangle(10, 5);
  console.log(14, prostokat.area());

  class Square extends Rectangle {
    constructor(a: number) {
      super(a, a);
    }
    public toString = (): string => {
      return "Jestem kwadratem";
    };
  }
  let kwadrat: Square = new Square(5);
  console.log(25, kwadrat.area());
  console.log(26, kwadrat.toString());
}
