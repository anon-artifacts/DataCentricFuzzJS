function fun() {
}
fun.prototype = 42;
new fun();
function f() {
    return fun.prototype;
}
f();
f();
f();
