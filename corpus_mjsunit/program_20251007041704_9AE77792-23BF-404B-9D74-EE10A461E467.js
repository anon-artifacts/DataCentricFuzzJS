var global = 1;
global = 2;
function f() {
    var o = { a: 1 };
    global = "a";
    for (let i8 = global; i8 < 2; i8++) {
        delete o[i8];
    }
}
f();
