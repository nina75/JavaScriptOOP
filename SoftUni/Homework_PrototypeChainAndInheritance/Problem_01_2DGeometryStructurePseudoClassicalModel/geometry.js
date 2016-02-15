var pointA = new geometry.Point(1, 2),
    pointB = new geometry.Point(2, 3),
    pointC = new geometry.Point(4, 8),
    radius = 8,
    colorCircle = '#00FF00',
    colorTriangle = '#FFFF00',
    colorLine = '#FFFFF0',
    colorSegment = '#22FF88',
    colorRectangle = '#333F035';

var circle = new geometry.Circle(pointA, radius, colorCircle);
var rectangle = new geometry.Rectangle(pointB, 5, 10, colorRectangle);
var triangle = new geometry.Triangle(pointA,pointB, pointC, colorTriangle);
var line = new geometry.Line(pointA, pointB, colorLine);
console.log(circle.toString());
console.log(rectangle.toString());
console.log(triangle.toString());
console.log(line.toString());