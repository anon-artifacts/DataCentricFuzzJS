function isHoley(a1) {
    return false;
}
function assertHoley(a4, a5) {
    isHoley(a4);
}
function create_array(a9) {
    const v11 = new Array(a9);
    return v11;
}
obj = create_array(0);
create_array(0);
obj = create_array(10);
function f(a21) {
    const v23 = new Array(a21);
    return v23;
}
f(0);
f(0);
var a = f(10);
function g(a32) {
    return a32[0];
}
var b = [0];
g(b);
g(b);
g(a);
