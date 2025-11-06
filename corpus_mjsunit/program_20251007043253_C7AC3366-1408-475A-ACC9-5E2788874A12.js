var g1 = { a: 1 };
function load() {
    return g1.a;
}
load();
load();
load();
delete g1.a;
load();
var g2 = { a: 2 };
function load2() {
    return g2.a;
}
load2();
load2();
load2();
g2.b = 10;
g2.a = 5;
load2();
var g3 = { a: 2, b: 9, c: 1 };
function store(a35) {
    g3.a = a35;
    return g3.a;
}
store(5);
store(8);
store(10);
delete g3.c;
store(7);
const v51 = { a: 7, b: 9 };
