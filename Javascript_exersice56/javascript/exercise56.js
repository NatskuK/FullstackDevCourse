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

var areaTriangle = AreaOfTriangle(2, 1);
var areaCircle = AreaOfCircle(2);

console.log(areaTriangle);
console.log(areaCircle);

function Area(X, Height) {
    var result;

    if (typeof Height === undefined) {
        result = [ AreaOfCircle(X), X * X, undefined];
    }
    else {
        result = [AreaOfCircle(X), X * Height, AreaOfTriangle(X, Height)];
    }
    return result;
}

console.log(Area(2,1));