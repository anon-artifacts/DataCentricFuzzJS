function f0() {
}
var BUGNUMBER = 326466;
var summary = "Implement Pythonic generators and iteration protocol support";
var actual;
var expect;
f0(BUGNUMBER);
f0(summary);
function* fib() {
    var a = 0;
    var b = 1;
    while (true) {
        yield a;
        var t = a;
        a = b;
        b += t;
    }
}
var g = fib();
f0(expect = "[object Generator]", actual = g.toString(), summary);
var actual = [];
var expect = [0,1,1,2,3,5,8,13];
actual.push(g.next().value);
actual.push(g.next().value);
actual.push(g.next().value);
actual.push(g.next().value);
actual.push(g.next().value);
actual.push(g.next().value);
actual.push(g.next().value);
actual.push(g.next().value);
f0(expect.join(), actual.join(), summary);
