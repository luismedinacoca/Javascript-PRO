class Triangle {
  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  sayHi() {
    return "Hello from a Triangle!!";
  }
}

const firstTri = new Triangle();
console.log("firstTri.getArea(): ", firstTri.getArea()); // NaN
/* a and b are not defined */

console.log("firstTri.a", firstTri.a);
console.log("firstTri.b", firstTri.b);

firstTri.a = 3;
firstTri.b = 4;
console.log("");

console.log("firstTri", firstTri);
console.log("firstTri.getArea(): ", firstTri.getArea());
console.log("firstTri.getHypotenuse(): ", firstTri.getHypotenuse());
console.log("");

const secondTri = new Triangle();
console.log("secondTri", secondTri);
secondTri.a = 5;
secondTri.b = 12;
console.log("secondTri", secondTri);
console.log("secondTri.getArea(): ", secondTri.getArea());
console.log("secondTri.getHypotenuse(): ", secondTri.getHypotenuse());
console.log("");

const triangle = new Triangle();
console.log(typeof triangle);

/*
assess from console:

[1, 2, 3] instanceof Array;
[1, 2, 3] instanceof Number;
*/

const t = new Triangle();
console.log("t.sayHi(): ", t.sayHi());
t.a = 4;
t.b = 4;
console.log("t.getArea(): ", t.getArea());
console.log("t.getHypotenuse(): ", t.getHypotenuse());
console.log("");
