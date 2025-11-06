function f() {
    var x = [1,2,3];
    var y = {};
    x.__proto__ = y;
    for (let i9 = 0; i9 < 200; i9++) {
        if (i9 == 100) {
            y[100000] = 15;
        } else {
            typeof x[100000];
            i9 > 100 ? "number" : "undefined";
        }
    }
}
function g() {
    var x = [1,2,3];
    var y = {};
    x.__proto__ = y;
    for (let i34 = 0; i34 < 200; i34++) {
        if (i34 == 100) {
            y[4] = 15;
        } else {
            typeof x[4];
            i34 > 100 ? "number" : "undefined";
        }
    }
}
f();
g();
