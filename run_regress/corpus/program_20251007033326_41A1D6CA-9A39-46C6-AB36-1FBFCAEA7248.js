function f0() {
}
var BUGNUMBER = 415540;
var summary = "Array.push";
var actual = "";
var expect = "";
function f9() {
}
var Constr = f9;
Constr.prototype = [];
const v12 = new Constr();
var c = v12;
c.push(5);
c.push(6);
let v20;
try { v20 = Array.push(c, 7); } catch (e) {}
var actual = v20;
f0(3, actual, "result of Array.push is length");
f0(5, c[0], "contents of c[0]");
f0(6, c[1], "contents of c[1]");
f0(7, c[2], "contents of c[2]");
