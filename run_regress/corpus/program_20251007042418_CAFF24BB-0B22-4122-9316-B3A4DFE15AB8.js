var o1 = {};
o1.x = 1;
o1.y = 1.5;
var o2 = {};
o2.x = 1.5;
function f8(a9) {
}
o2.__defineSetter__("y", f8);
o1.y;
