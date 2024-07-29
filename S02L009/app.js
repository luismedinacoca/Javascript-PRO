class Triangle {
  constructor(a, b) {
    /*
    // data validation:
    if(!Number.isFInite(a) || a <= 0)
      throw new Error(`Invalid a: ${a}`)

    if(!Number.isFInite(b) || b <= 0)
      throw new Error(`Invalid b: ${b}`)
    */
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  sayHi() {
    return "Hello from a triangle";
  }
}

const myTri = new Triangle(3, 4);
console.log("myTri", myTri);
console.log("myTri.getArea():", myTri.getArea());
console.log('');

const myTri2 = new Triangle(12, 5);
console.log("myTri2", myTri2);
console.log("myTri2.getArea():", myTri2.getArea());
console.log('');

/*
Common things:
- validate data
- assign porperties
=> uncomment data validation from constructor
*/

const badTri = new Triangle(true, 'triangle');
console.log("badTri: ", badTri)
console.log("badTri.getArea(): ", badTri.getArea()) // NaN
console.log('')

/*
// assess those example from console:
new Triangle(1, 2);
new Triangle(1, 'mon');
new Triangle(1, []);
new Triangle(1, {});
*/

/*
Constructor is not a method:
Triangle.constructor(a, b) 👀
*/