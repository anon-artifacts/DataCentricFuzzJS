function foo(a1) {
    var a = arguments;
    function bar(a5) {
        let v6 = a[0];
        ++v6;
    }
    bar(1);
    bar(2);
    bar(3);
    return bar;
}
var baz = foo(0);
baz(4);
baz(5);
baz(6);
function foo2(a24) {
    var a = arguments;
    function bar2(a28) {
        let v29 = a[0];
        ++v29;
    }
    bar2(1.5);
    bar2(2.5);
    bar2(3.5);
    return bar2;
}
var baz2 = foo2(0.5);
baz2(4.5);
baz2(5.5);
baz2(6.5);
