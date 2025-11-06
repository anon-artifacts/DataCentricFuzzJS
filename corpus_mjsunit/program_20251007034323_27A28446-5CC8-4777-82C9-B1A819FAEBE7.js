var a = {};
var b = {};
a.x = 1;
a.y = 1;
b.x = 1;
function foo(a8) {
    var s = 0;
    for (const v11 in a8) {
        s++;
    }
    return s;
}
foo(a);
foo(b);
foo(a);
foo(b);
