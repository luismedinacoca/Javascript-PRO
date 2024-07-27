/* Area of right triangle */
function getTriangleArea(a, b) {
    return (a * b) / 2;
}

/* Hypotenuse of Right Triangle */
function getTriangleHypotenuse(a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
}

/*  */
let myTri = {
    a: 3,
    b: 4,
    /* methods: */
    getArea: function(){
        return (this.a * this.b) / 2;
    },
    getHypotenuse: function(){
        return Math.sqrt(this.a**2 + this.b**2);
    }
}

console.log('myTri.a: ', myTri.a)
console.log('myTri.b: ', myTri.b)
console.log('myTri.getArea: ', myTri.getArea)
console.log('myTri.getArea(): ', myTri.getArea())
console.log('myTri.getHypotenuse(): ', myTri.getHypotenuse())

/*
myTri.a = 5;
myTri.b = 12;
myTri.getArea() ???
myTri.getHypotenuse() ???
*/

let myTri2 = {
    a: 5,
    b: 12,
    /* methods: */
    getArea: function(){
        return (this.a * this.b) / 2;
    },
    getHypotenuse: function(){
        return Math.sqrt(this.a**2 + this.b**2);
    }
}

/* What would happen if you need to create 1000 traigles?? */

/*
So, we can helpfully mix data & functionality
=> This is tidy: related functionality lives together
=> anooying when we have more than one triangle
    -  Difficult to maintain
    - If we have 1000 triangles, we'd have 1000 copies of these functions - thart's going to waste memory
DRY: Don't repeat Yourself!!
*/
