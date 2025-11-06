function f(a1, a2) {
    return a1 == a2;
}
var X = "" + Math.random();
var Y = "" + Math.random();
f(X + Y, X + Y);
