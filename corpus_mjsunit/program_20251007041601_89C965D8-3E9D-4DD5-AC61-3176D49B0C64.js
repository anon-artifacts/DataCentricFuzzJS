function f1(a1, a2) {
    return a1[a2] + 0.5;
}
var arr = [,0,2.5];
f1(arr, 1);
f1(arr, 1);
f1(arr, 1);
var push = Array.prototype.push;
var array_prototype = Array.prototype;
function optopush(a27) {
    push.call(a27, 1);
}
function foo() {
    optopush(array_prototype);
}
optopush([]);
optopush([]);
optopush([]);
foo();
f1(arr, 0);
