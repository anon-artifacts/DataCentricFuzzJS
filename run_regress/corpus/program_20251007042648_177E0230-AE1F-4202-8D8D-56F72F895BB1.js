var o = {};
function foo(a3) {
    return o[a3];
}
var s = "c" + "c";
foo(s);
foo(s);
foo(s);
foo();
foo("c" + "c");
foo();
foo(("ccddeeffgg").slice(0, 2));
foo();
