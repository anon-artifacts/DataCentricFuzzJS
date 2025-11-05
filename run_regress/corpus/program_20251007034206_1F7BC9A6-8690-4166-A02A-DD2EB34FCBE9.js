function f() {
    'function';
    typeof f;
}
f();
function f() {
    var f;
    typeof f;
}
f();
function f() {
    var f;
    typeof f;
    with ({}) {
    }
}
f();
typeof f;
function f20() {
    var o = { a: 1 };
    with (o) {
        var a = 2;
    }
    typeof a;
    o.a;
}
f20();
