try {
    a = f();
} catch(e3) {
}
var i = 0;
function f() {
    try {
        f();
    } catch(e8) {
        i++;
        [];
    }
}
f();
