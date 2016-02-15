var tochka = Object.create(geometry.point).init(5, 8);
var shape = Object.create(geometry.shape).init('#ffff00');
var circle = Object.create(geometry.circle).init(tochka, 8, '#556600');
console.log(tochka.toString());
console.log(shape.toString());
console.log(circle.toString());