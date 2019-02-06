/*
Perform the following:

1.Given one or more parameters, create a function that returns the area of a triangle
2.Given one or more parameters, create a function that returns the area of a circle
3. Create a single function that can take one or more parameters, and can return the area regardless of the shape (single function for triangle, circle, or rectangle)
*/


function AreaOfTriangle(Base, Height) {
    var result = Base * Height / 2;
    return result;
}


function AreaOfCircle(Radius) {
    var result = Math.PI * Math.pow(Radius, 2);
    return result;
}

var area = AreaOfTriangle(2, 1);
var areaCircle = AreaOfCircle(1);

console.log(area);
console.log(areaCircle);

