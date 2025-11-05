function foo() {
    var x = 0;
    for (let i7 = arguments.length - 1; i7 >= 0; i7--) {
        x += arguments[i7];
    }
    return x;
}
function bar() {
    var x = 0;
    for (let i19 = 0; i19 < arguments.length; i19++) {
        x += arguments[i19];
    }
    return x;
}
function baz(a29, a30, a31, a32, a33) {
    var x = 0;
    for (let i37 = 0; i37 < arguments.length; i37++) {
        x += arguments[i37];
    }
    return x;
}
for (let i47 = 0; i47 < 10; i47++) {
    foo(1, 2, 3, 4, 5);
    function f63() {
        return 10;
    }
    bar(1, 2.5, true, { valueOf: f63 }, "five");
    baz(1, 2, 3, 4, 5);
}
