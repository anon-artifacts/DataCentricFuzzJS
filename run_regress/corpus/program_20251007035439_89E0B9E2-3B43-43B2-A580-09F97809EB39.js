function bar(a1) {
    var x = 0;
    function f4(a5) {
        x = a5;
    }
    a1.forEach(f4);
    return x;
}
function foo(a8) {
    return bar(a8);
}
let array = [,0.5];
foo(array);
foo(array);
foo(array);
