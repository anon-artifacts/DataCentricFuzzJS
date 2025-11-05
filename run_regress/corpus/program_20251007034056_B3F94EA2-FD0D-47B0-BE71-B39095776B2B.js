var res = 0;
function f2() {
    res++;
}
var o = { __proto__: f2 };
function f() {
    for (let i8 = 0; i8 < 70; i8++) {
        o.__proto__();
    }
}
f();
