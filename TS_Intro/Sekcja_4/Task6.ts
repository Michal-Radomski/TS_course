{
  class Point2D {
    private y1: number;
    private x1: number;
    private x2: number;
    private y2: number;
    constructor(x1: number, y1: number, x2: number, y2: number) {
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
    }
    distanceBetween = (): number => {
      return Math.sqrt((this.x2 - this.x1) ** 2 + (this.y2 - this.y1) ** 2);
    };
  }
  const distance1 = new Point2D(0, 0, 1, 1);
  const distance2 = new Point2D(0, 0, 3, 4);
  console.log(19, distance1.distanceBetween());
  console.log(20, distance2.distanceBetween());
}
