function g() {
}
var count = 0;
function f() {
    try {
        f();
    } catch(e5) {
        print(e5.stack);
    }
    if (count < 100) {
        count++;
    }
}
f();
g();
