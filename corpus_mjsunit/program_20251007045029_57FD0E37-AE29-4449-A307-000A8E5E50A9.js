var o1 = {};
function f2() {
    return 10;
}
o1.f1 = f2;
o1.x = 5;
o1.y = 2;
var o2 = {};
o2.x = 5;
o2.y = 5;
function store(a11, a12) {
    a11.y = a12;
}
store(o2, 0);
store(o1, 0);
store(o2, 0);
store(o1, 10);
o1.x;
o1.y;
